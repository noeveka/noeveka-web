# Noeveka — Sanity Staging & Production Workflow

> **One file to rule them all.** Read this before touching any data or schema.

---

## Table of Contents

1. [Project Setup Overview](#1-project-setup-overview)
2. [The Golden Rules](#2-the-golden-rules)
3. [For Developers — Schema Changes](#3-for-developers--schema-changes)
4. [For Developers — Data Migration (Staging → Production)](#4-for-developers--data-migration-staging--production)
5. [For Non-Technical Users (Site Owner)](#5-for-non-technical-users-site-owner)
6. [Environments At a Glance](#6-environments-at-a-glance)
7. [Useful CLI Commands](#7-useful-cli-commands)
8. [Disaster Recovery](#8-disaster-recovery)

---

## 1. Project Setup Overview

| | Value |
|---|---|
| **Sanity Project ID** | `gv2hvfjr` |
| **Production Dataset** | `production` |
| **Staging Dataset** | `staging` |
| **Studio (local dev)** | `http://localhost:3333` (two workspaces: `/production` and `/staging`) |
| **Deployed Studio** | Sanity-hosted (via `sanity deploy`) |
| **Production Site** | Live customer-facing website |
| **Staging Site** | Internal preview/testing website |

Both datasets live **inside the same Sanity project** (`gv2hvfjr`). They share the same schema code, but hold **completely independent data**.

The Studio is configured with **two workspaces** (`sanity.config.ts`) so you can switch between datasets inside a single Studio UI without logging in/out.

---

## 2. The Golden Rules

> Violating these rules is how data gets corrupted or the live site breaks.

1. **Never edit production data directly** unless it is a critical live-site fix.
2. **Always test schema changes in staging first** — a broken schema can crash the Studio for all editors.
3. **Never overwrite the production dataset with a staging export** without a backup.
4. **Always take a backup of `production` before any dataset migration** (see §8).
5. **Schema changes deploy to both datasets at the same time** — keep your schema backward-compatible while data migration is in progress (see §3.4).
6. **The `sanity.cli.ts` default dataset is `production`** — double-check which dataset a CLI command targets before running it.

---

## 3. For Developers — Schema Changes

### 3.1 The Full Cycle

```
feature branch → dev → staging Studio → staging site ✅ → merge to main → production Studio → production site ✅
```

### 3.2 Step-by-Step: Adding a New Field or Page

#### Step 1 — Branch

```bash
git checkout -b feat/new-page-or-field
```

#### Step 2 — Write the schema

Edit files inside `studio/noeveka/schemaTypes/`. The schema is **shared** — both workspaces use the same TypeScript files.

#### Step 3 — Test locally on Staging

```bash
cd studio/noeveka
npm run dev
```

Open `http://localhost:3333/staging` — switch to the **Staging workspace** and verify the new schema looks correct. Create a few test documents.

Check the staging website to confirm the frontend renders correctly.

> **Why staging and not production?** Because a schema bug can prevent any document from saving — you want to catch that before real content is affected.

#### Step 4 — Deploy the Studio to the Sanity CDN

When you are happy with staging:

```bash
npm run deploy
```

This deploys the Studio UI to Sanity's hosting. Share the link with the site owner so they can preview in the Staging workspace.

> `sanity deploy` deploys the **Studio app only** — not the data. The schema ships with the Studio bundle.

#### Step 5 — Merge to main / push to production frontend

Once staging is approved:

```bash
git checkout main
git merge feat/new-page-or-field
git push
```

Your CI/CD pipeline picks this up and redeploys the production website. Open `localhost:3333/production` or the deployed Studio `/production` workspace and confirm documents look right.

---

### 3.3 Handling Existing Documents During Schema Changes

| Change type | Risk | Mitigation |
|---|---|---|
| **Add a new optional field** | None — old docs just have `undefined` | Safe to deploy any time |
| **Add a new required field** | Old docs break in structured validation | Set `initialValue` or keep field optional first |
| **Rename a field** | All existing docs lose data for that field | Use a GROQ migration script (see below) |
| **Delete a field** | Permanent data loss in the dataset | Export dataset first; then delete |
| **Change field type** | Breaks all existing docs | Migrate data before deploying the schema change |
| **Add a new document type** | None | Safe |

#### Field Rename / Migration Script

```bash
# Install the migration tool
npm install -g @sanity/migrate

# Create a migration file
sanity migration create rename-field

# Run against STAGING first
sanity migration run --dataset staging

# Only after verifying staging, run against production
sanity migration run --dataset production
```

---

### 3.4 Backward-Compatible Schema Changes (Advanced)

When you rename or restructure a field, use a **2-step deploy** to avoid data loss:

**Step 1** — Add the new field alongside the old one. Deploy schema.

**Step 2** — Run the data migration (copies old field → new field). Verify.

**Step 3** — Remove the old field. Deploy schema.

This keeps the Studio functional throughout the migration.

---

## 4. For Developers — Data Migration (Staging → Production)

### 4.1 When Would You Do This?

The site owner or a content editor has **built up real, reviewed content in the Staging dataset** and now that content needs to go live in Production.

> ⚠️ This is a **partial or full dataset replace** — the most dangerous operation. Always back up first.

---

### 4.2 Full Dataset Migration (Replace Production with Staging)

Use this when staging content is the new source of truth for everything.

#### ⚠️ Critical: Understand What `--replace` Actually Does

The `--replace` flag is an **upsert by `_id`**, NOT a full wipe:
- If a document in the import has the same `_id` as one in production → it **replaces** it.
- If a document in the import has a different `_id` (e.g. created independently in staging) → it **adds** it.
- Documents in production that have no match in the import → they **stay untouched**.

**Real-world consequence:** If you created 4 services in staging and production already had 4 different services (different `_id`s), you will end up with 8 services in production after the import — not 4.

---

#### Option A — Safe Upsert (when IDs overlap, e.g. singleton pages)

Use this for singleton documents like `homePage`, `servicesPage`, `siteSettings` — these always have the same `_id` across datasets because there is only one of each.

```bash
# 1. Backup production first (non-negotiable)
npx sanity dataset export production production-backup-$(date +%Y%m%d).tar.gz

# 2. Export staging
npx sanity dataset export staging staging-export.tar.gz

# 3. Import — replaces matching _ids, adds new ones
npx sanity dataset import staging-export.tar.gz --dataset production --replace

# 4. Verify in the Studio
```

#### Option B — True Full Replace (wipes production completely, then imports staging)

Use this when you want production to be an **exact mirror** of staging — including collections like services, testimonials, resources where documents may have different `_id`s.

```bash
# 1. Backup production first (non-negotiable)
npx sanity dataset export production production-backup-$(date +%Y%m%d).tar.gz

# 2. Export staging
npx sanity dataset export staging staging-export.tar.gz

# 3. Delete the production dataset entirely
npx sanity dataset delete production

# 4. Recreate it as a fresh empty dataset
npx sanity dataset create production

# 5. Import staging into the now-empty production
npx sanity dataset import staging-export.tar.gz --dataset production

# 6. Verify in the Studio — open localhost:3333/production
```

---

#### Which Option Should I Use? — Quick Decision Table

| Situation | Use |
|---|---|
| Only changed text/images on singleton pages (homePage, servicesPage, siteSettings) | **Option A** — `import --replace` |
| Added or removed items in a collection (services, testimonials, resources) | **Option B** — delete → create → import |
| Not sure / want a 100% exact mirror of staging | **Option B** — always safe |
| Want to update just one specific document type | §4.3 Selective Migration |

> ⚠️ **Real example (what went wrong):** Staging had 4 services, production also had 4 services — but they were created independently so they had **different `_id`s**. Running `import --replace` added the 4 staging ones on top of the existing 4 production ones → 8 services total. The fix: `dataset delete production` → `dataset create production` → `import` fresh. Production then had exactly 4.

---


### 4.3 Selective / Partial Migration (Cherry-pick documents)

Use this when only specific documents (e.g., a new "Services" page) need to go from staging to production.

```bash
# Export with a GROQ filter — only export documents of a specific type
npx sanity dataset export staging staging-services.tar.gz \
  --query '*[_type == "servicesPage"]'

# Import into production
npx sanity dataset import staging-services.tar.gz production --replace
```

Alternatively, for a one-off document, you can just **copy-paste the content** inside the Studio UI (open both workspaces side by side).

---

### 4.4 Keep Images Consistent

Sanity stores images in an **asset store** linked to the project — **not** the dataset. This means images uploaded in staging are already accessible from production by default (same `projectId`). You do **not** need to re-upload images.

---

## 5. For Non-Technical Users (Site Owner)

You will be working in the **Sanity Studio**. It is a web-based editor that looks like a CMS.

### 5.1 The Simple Rule

> **Edit anything you see inside a field — text, images, buttons — directly in Production, any time. The only action that can break the site is deleting an entire document.**

Sanity was built exactly for this. Changing a field value (text, image, link, toggle) is 100% safe and instantly reflected on the live site.

---

### 5.2 What You Can Freely Edit in Production ✅

| What | Examples |
|---|---|
| **Text / headings** | Hero title, subtitles, body copy, button labels |
| **Images** | Hero image, team photos, service icons, logos |
| **Links & URLs** | CTA button URLs, nav links |
| **Rich text** | Blog-style body content, service descriptions |
| **Toggles** | Show/hide a section, enable/disable a feature |
| **Reordering** | Drag items in a list to change their order |
| **New testimonials / resources** | Adding new entries to a collection |

None of these touch the structure of the site — they only change the content inside it. Go ahead and edit directly in the **Production workspace** without involving the developer.

---

### 5.3 When to Use the Staging Workspace

Staging is only for reviewing **new pages or new sections** that the developer has built but not yet pushed live. The developer will tell you: *"Please review X in Staging before I go live."*

You do **not** need to use Staging for everyday content edits.

---

### 5.4 The ONE Thing That Can Break the Site ⚠️

> ❌ **Never click "Delete" on a whole document** (e.g. Home Page, Services Page, Site Settings, etc.)

These are the backbone documents the website reads from. If they are deleted, the page will crash or go blank.

**How to identify them:** They appear as top-level items in the left sidebar of the Studio (e.g. "Home Page", "About Page", "Site Settings"). They are different from testimonials or resources which are generally safe to delete individually.

If you accidentally delete one, **contact the developer immediately** — it can be restored.

---

### 5.5 Other Things to Avoid

- ❌ Do **not** share your Sanity login with others — everyone should have their own account (ask the developer to add new members).
- ❌ Do **not** delete an image from the **Media Library** if you are unsure whether it is used somewhere on the site.

---

### 5.6 When to Tell the Developer

Contact the developer when:

- You want a **brand new page or section** added to the site (that is a code/schema change).
- Something looks **broken** in either workspace.
- You **accidentally deleted** a whole document.
- You have built up content in Staging and want it pushed to Production.

---

## 6. Environments At a Glance

```
┌─────────────────────────────────────────────────────┐
│               Sanity Project: gv2hvfjr              │
│                                                     │
│  ┌──────────────────┐   ┌──────────────────────┐   │
│  │  Dataset:        │   │  Dataset:             │   │
│  │  STAGING         │   │  PRODUCTION           │   │
│  │                  │   │                       │   │
│  │  Studio:         │   │  Studio:              │   │
│  │  /staging        │   │  /production          │   │
│  │                  │   │                       │   │
│  │  Site:           │   │  Site:                │   │
│  │  staging.xyz     │   │  noeveka.com          │   │
│  └──────────────────┘   └──────────────────────┘   │
│                                                     │
│  Schema: SHARED (same schemaTypes/ folder)          │
│  Assets: SHARED (same project asset store)          │
└─────────────────────────────────────────────────────┘
```

---

## 7. Useful CLI Commands

> Run all commands from inside `studio/noeveka/`

```bash
# Run studio locally
npm run dev

# Deploy studio to Sanity hosting (both workspaces ship together)
npm run deploy

# Export a dataset
npx sanity dataset export <dataset> <output-file.tar.gz>

# Import into a dataset
npx sanity dataset import <file.tar.gz> <dataset> --replace

# List all datasets
npx sanity dataset list

# Run a GROQ migration
npx sanity migration run --dataset <staging|production>

# Validate the schema (catches type errors before deploying)
npx sanity schema validate
```

---

## 8. Disaster Recovery

### 8.1 Before Any Risky Operation

```bash
npx sanity dataset export production production-backup-$(date +%Y%m%d-%H%M%S).tar.gz
```

Store this file somewhere safe (e.g., Google Drive, S3, or a git-ignored `/backups` folder).

> There is already a `production-backup.tar.gz` in this folder — keep it updated before every migration.

### 8.2 Restore Production from a Backup

```bash
npx sanity dataset import production-backup-YYYYMMDD.tar.gz production --replace
```

### 8.3 Undo an Accidental Document Delete

Sanity keeps a full revision history per document. In the Studio:

1. Open the document.
2. Click the **"..."** menu → **"Review changes"** or **"History"**.
3. Restore the previous revision.

### 8.4 Emergency Checklist

If the production site is down due to a bad schema deploy:

1. Revert the git commit: `git revert HEAD && git push`
2. Redeploy the Studio: `npm run deploy`
3. If data is corrupted, restore from backup (§8.2).
4. Notify the site owner immediately.

---

## 9. Quick Reference Card

| Scenario | Action |
|---|---|
| Add a new page | Branch → schema in staging → test → merge → deploy studio |
| Rename a field | 2-step deploy + `sanity migration run` |
| Publish content owner made in staging | Export staging → import to production (§4.2) |
| Urgent live-site text fix | Edit directly in Production workspace (tell developer) |
| Something broke in production | Check git log, revert, `npm run deploy` |
| Before any dataset import | Run `dataset export production backup.tar.gz` first |

---

*Last updated: October 2026 · Maintained by the developer (Harsh)*
