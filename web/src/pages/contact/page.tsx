import ContactForm from "@/components/contact/contact-form";
import { PageHead } from "@/components/seo";
import { CONTACT_CONFIG } from "@/config/contact.config";
import { SEO_CONFIG } from "@/config/seo.config";
import { motion } from "framer-motion";
import { LucideIcon } from "@/components/lucide-icons";

const CONTACT_METHODS = [
  {
    icon: "mail",
    label: "Email us",
    value: "hello@noeveka.com",
    href: "mailto:hello@noeveka.com",
    desc: "Reply within 1–2 business days",
  },
  {
    icon: "message-square",
    label: "Book a call",
    value: "Free 30-min strategy session",
    href: "#form",
    desc: "No sales pitch — just honest advice",
  },
];

export default function ContactPage() {
  const { hero } = CONTACT_CONFIG;

  return (
    <>
      <PageHead
        title={SEO_CONFIG.pages.contact.title}
        description={SEO_CONFIG.pages.contact.description}
      />

      {/* ─────────────────────────────────────────────────────
          HERO — minimal, clean, light
      ───────────────────────────────────────────────────── */}
      <section
        className="relative flex justify-center overflow-hidden"
        style={{ background: "var(--color-bg-page)" }}
      >
        {/* Dot-grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-stroke-default) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Orange glow — bottom right */}
        <div
          className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(246,93,1,0.09) 0%, transparent 70%)",
          }}
        />

        {/* Left accent bar */}
        <div
          className="pointer-events-none absolute top-0 left-0 h-full w-1.5"
          style={{
            background:
              "linear-gradient(to bottom, var(--color-brand) 0%, rgba(246,93,1,0.15) 60%, transparent 100%)",
          }}
        />

        <div className="lp-container lp-px relative z-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

            {/* Left: heading */}
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="mb-5 inline-flex items-center gap-2"
              >
                <div
                  className="h-px w-8"
                  style={{ background: "var(--color-brand)" }}
                />
                <span
                  className="text-[11px] font-extrabold tracking-[0.25em] uppercase"
                  style={{ color: "var(--color-brand)" }}
                >
                  {hero.eyebrow}
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.07, ease: "easeOut" }}
                className="mb-5 text-[2.6rem] leading-[1.05] font-extrabold tracking-tight sm:text-[3.2rem] lg:text-[3.8rem]"
                style={{ color: "var(--color-text-primary)" }}
              >
                {hero.heading}{" "}
                <span
                  className="relative inline-block"
                  style={{ color: "var(--color-brand)" }}
                >
                  {hero.headingHighlight}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                    className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full"
                    style={{ background: "var(--color-brand)" }}
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
                className="max-w-[440px] text-[16px] leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {hero.subtext}
              </motion.p>
            </div>

            {/* Right: contact method cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              {CONTACT_METHODS.map(({ icon, label, value, href, desc }, i) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-5 rounded-2xl p-5 transition-all duration-200"
                  style={{
                    background: "var(--color-bg-surface)",
                    border: "1.5px solid var(--color-stroke-default)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(246,93,1,0.4)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(246,93,1,0.08)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "var(--color-stroke-default)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors"
                    style={{
                      background: i === 0 ? "var(--color-brand-tint)" : "var(--color-bg-subtle)",
                      border: i === 0
                        ? "1.5px solid rgba(246,93,1,0.2)"
                        : "1.5px solid var(--color-stroke-default)",
                    }}
                  >
                    <LucideIcon
                      name={icon}
                      className="h-5 w-5"
                      style={{ color: "var(--color-brand)" }}
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-[11px] font-bold tracking-[0.16em] uppercase"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-[14.5px] font-extrabold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {value}
                    </span>
                    <span
                      className="text-[12px]"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {desc}
                    </span>
                  </div>
                  <LucideIcon
                    name="arrow-right"
                    className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ color: "var(--color-brand)" }}
                  />
                </a>
              ))}

              {/* "What to expect" micro block */}
              <div
                className="rounded-2xl px-5 py-4"
                style={{
                  background: "var(--color-brand-tint)",
                  border: "1.5px solid rgba(246,93,1,0.18)",
                }}
              >
                <p
                  className="text-[12px] font-semibold"
                  style={{ color: "var(--color-brand)" }}
                >
                  ✳ No automated sales sequences. A real reply from Ajay or the team.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "var(--color-stroke-default)" }}
        />
      </section>

      {/* ─────────────────────────────────────────────────────
          FORM SECTION
      ───────────────────────────────────────────────────── */}
      <section
        id="form"
        className="flex justify-center"
        style={{
          background: "var(--color-bg-subtle)",
        }}
      >
        <div className="lp-container lp-px py-16 lg:py-24">
          {/* Section label */}
          <div className="mb-10 flex items-center gap-3">
            <div
              className="h-px w-10"
              style={{ background: "var(--color-brand)" }}
            />
            <span
              className="text-[11px] font-extrabold tracking-[0.25em] uppercase"
              style={{ color: "var(--color-brand)" }}
            >
              Send a message
            </span>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
