---
trigger: always_on
---

---

trigger: always_on
---

# Antigravity Project Instructions & Agent Rules

> **Project:** Exaannum Frontend  
> **Target Audience:** Antigravity AI Agents & Sub-Agents  
> **Mode:** Strict Enforcement (Adhere to all patterns without deviation)

---

## 1. Role & Identity Context

You are an expert Frontend Engineer fully integrated into the Exaannum development environment. Your primary objective is to maintain perfect architectural integrity, ensure zero leakage across feature boundaries, and prevent type regressions.

---

## 2. Core Architectural Guardrails

### A. The Feature Folder Pattern (Strict Encapsulation)

- Every domain concept must live entirely inside `src/features/[feature-name]/`.
- **Public API Enforcement:** You may only expose capabilities outside a feature via its root `index.ts` barrel file.
- **Cross-Feature Communication:** - Feature A must _never_ reach into the internal directories of Feature B.
  - If a component or state utility is required by $\ge 2$ features, you must immediately promote it to `src/components/shared/` or `src/store/`.

### B. State Bounded Domains

You must rigorously segregate state into two domains with zero overlapping logic:

1. **Server State (TanStack Query v5):** All backend metrics, sessions, data fetching, mutations, and caching logic. Must specify explicit `staleTime`.
2. **Client State (Zustand):** Pure UI/UX state (e.g., sidebar toggles, theme preferences). Zustand stores _must never_ trigger direct API requests.

---

## 3. Code Generation & Execution Specs

### A. Technical Constraints

- **Language:** TypeScript in strict mode. Use of `any` will break compilation and is explicitly forbidden.
- **Routing & Framework:** React Router. Keep files under `src/pages/` entirely logicless; use them purely as structural orchestrators for components imported from features.
- **Styling:** Use Tailwind CSS driven strictly by CSS variable design system tokens. Do not introduce hardcoded HEX values.

### B. File Naming Rules

Execute strict compliance with the following structural layout:

- **React Components:** kebab-case (e.g., `session-list.tsx`)
- **Folders, Utilities, Hooks, Queries, Configs:** kebab-case (e.g., `sessions.queries.ts`, `sidebar.config.ts`)

---

## 4. Antigravity Workflow & Prompting Conventions

### Rule 1: Config-Driven UI Implementation

When generating repetitive UI elements (navigation lists, card matrices, footers), you must construct an interface and an abstract configuration array utilizing `as const`. Do not embed JSX or `React.ReactNode` directly inside configuration layers; instead, pass descriptive icon strings (e.g., `'ti-layout-dashboard'`).

### Rule 2: Path Alias vs. Relative Imports

- Inside a specific feature directory: Use local relative paths (`../../hooks/...`). Never import from the feature's own alias root (causes catastrophic circular dependency loops).
- Outside a feature directory: Use absolute path aliases matching the structural root (`@/features/auth`).

---

## 5. Components Rules

### Rule 1: Use shacdn for components (src/components/ui)

whenever you have to use a building block ui components, we already have the shadcn component installed so import from there and use it and import will always be this `@/components/ui/`

### Rule 2: Don't import the Lucide Icon directly from the lucide-react package

we already have the lucide icon component and lucideIconRegistry from `@/components/lucide-icons` and use it
you have to use like this and also the IconName will be in kebab-case. So if you have to add new icon then add it that to lucide-config.tsx file and use it

```typescript
import { LucideIcon, lucideIconRegistry } from "@/components/lucide-icons";

<LucideIcon name={lucideIconRegistry.ArrowRight} className="h-4 w-4" />
```

### Rule 3: Don't write very long css in the component Tags directly

if you need to write multiple classes of tailwind which will convert into long string so then don't add that in the tags directly.
instead
create a style object and then add the classname in that object and then use that object to get the className.

```typescript
const styles = {
  headerTitle: "text-2xl font-bold tracking-tight text-foreground",
  headerDesc: "mt-1.5 text-sm text-text-secondary mb-6",
  dividerContainer: "flex items-center my-6",
  dividerLine: "flex-1 border-t border-stroke-default",
  dividerText:
    "px-3 text-micro font-semibold uppercase tracking-wider text-text-muted select-none",
  form: "flex flex-col gap-5",
  fieldContainer: "flex flex-col gap-1.5",
  inputLabel:
    "text-micro font-semibold uppercase tracking-wider text-text-secondary",
  checkboxContainer: "flex items-start gap-3 my-1",
  checkbox:
    "h-4 w-4 shrink-0 rounded border-stroke-default text-brand focus:ring-brand focus:ring-offset-background",
  checkboxLabel: "text-xs text-text-secondary leading-normal select-none",
  submitButton:
    "btn btn-primary w-full flex items-center justify-center gap-2 mt-2",
  linkRow: "mt-6 text-center text-xs text-text-secondary",
  link: "font-semibold text-brand hover:text-brand-hover transition-colors",
  inputField: "input w-full pr-10",
};
```

## 6 Api Rule

### Rule 1: Always define the api routes in the `src/constants/api-routes.ts` file

whenever you need to integrate new api, you have to add that in the `src/constants/api-routes.ts` file first into it's relative object, means if api is related to Auth then it will go inside auth object and same goes for others.

```typescript
const API_ROUTES = {
  BASE_URL: "https://api.exaannum.com",
  ENDPOINTS: {
    GET_USER: "/user",
    GET_POSTS: "/posts",
    GET_POST: "/posts/:id",
    CREATE_POST: "/posts",
    UPDATE_POST: "/posts/:id",
    DELETE_POST: "/posts/:id",
  },
} as const;
```

## 7 React Router Rule

### Rule 1: Always add the new route of the application inside `src/routes` folder only

we have the `src/routes/routes-config.ts` file where we have the `routesRegistry` object which contains the routes of the application.

for example

```typescript
export const routesRegistry = {
  // public
  landing: "/",
  privacy: "/privacy",
  terms: "/terms",
  docs: "/docs",
  changelog: "/changelog",

  // auth — public, but redirect away if already logged in
  login: "/login",
  signup: "/signup",
  forgotPassword: "/forgot-password",

  // protected — dashboard
  overview: "/overview",
  sessions: "/sessions",
  analytics: "/analytics",
  provenance: "/provenance",
  settings: "/settings",
} as const;
```

### Rule 2 Always use the app-router file to add new Route

we have the `src/routes/app-router.tsx` file where we have the `AppRouter` component which contains the routes of the application. so if you have to add new route, you must have to add here.

and we have public-only-route and protected-route components so use these while creating the public and private routes

for example

```typescript
export default function AppRouter() {
  const routes = routesRegistry;

  return (
    <Routes>
      {/* Main landing / test page redirecting to login */}
      <Route
        path={routesRegistry.landing}
        element={<Navigate to={routesRegistry.login} replace />}
      />

      {/* Protected dashboard test route */}
      <Route element={<ProtectedRoute />}>
        <Route path={routesRegistry.overview} element={<OverviewPage />} />
      </Route>

      {/* Auth — public only, redirects if logged in */}
      <Route element={<PublicOnlyRoute />}>
        <Route element={<AuthLayout />}>
          <Route path={routesRegistry.login} element={<LoginPage />} />
          <Route path={routesRegistry.signup} element={<SignupPage />} />
          <Route
            path={routesRegistry.forgotPassword}
            element={<ForgotPasswordPage />}
          />
        </Route>
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
```

## 8. Pre-Flight Verification Routine

Before marking a code generation task as complete or preparing a git staging commit, mentally execute this checkpoint check:

1. Is this file in the exact folder dictated by the "Five Questions" rule?
2. Did I create a barrel `index.ts` file for this new sub-component folder?
3. Are all layouts responsive, using spacing intervals derived exclusively from multiples of 4px?
