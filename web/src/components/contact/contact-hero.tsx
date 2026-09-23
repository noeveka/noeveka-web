import { CONTACT_CONFIG } from "@/config/contact.config";
import { motion } from "framer-motion";

export interface ContactHeroProps {
  data?: {
    heading?: string;
    subtext?: string;
  };
}

export default function ContactHero({ data }: ContactHeroProps) {
  const heading = data?.heading ?? CONTACT_CONFIG.hero.heading;
  const subtext = data?.subtext ?? CONTACT_CONFIG.hero.subtext;

  return (
    <section className="relative flex justify-center overflow-hidden pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16">
      {/* Background Subtle Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-stroke-default) 1px, transparent 1px),
                            linear-gradient(to bottom, var(--color-stroke-default) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 60%, transparent 100%)",
        }}
      />

      {/* Subtle brand warm ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, var(--color-brand) 0%, transparent 70%)",
        }}
      />

      <div className="lp-container lp-px relative z-10 mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.15]"
          style={{ color: "var(--color-text-primary)" }}
        >
          {heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed px-2"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {subtext}
        </motion.p>
      </div>
    </section>
  );
}
