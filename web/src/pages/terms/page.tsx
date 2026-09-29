import { Link } from "react-router";
import { PageHead } from "@/components/seo";

const styles = {
  container: "relative w-full bg-white py-14 sm:py-16 lg:py-18",
  inner: "mx-auto max-w-3xl px-4 sm:px-6 lg:px-8",
  header: "mb-10 sm:mb-14 pb-8 border-b border-neutral-100",
  eyebrow: "text-xs font-bold uppercase tracking-wider text-[#f65d01] mb-2",
  title: "text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight leading-tight",
  meta: "mt-3 text-xs sm:text-sm text-neutral-400 font-medium",
  content: "text-[15px] sm:text-base leading-relaxed text-neutral-600",
  h2: "text-xl sm:text-2xl font-bold text-[#1a1a1a] tracking-tight mt-10 mb-3.5 pt-4 border-t border-neutral-100 first:border-0 first:pt-0",
  p: "mb-4 leading-relaxed",
  list: "list-disc pl-5 mb-5 space-y-2",
  quote: "my-4 rounded-r-xl border-l-3 border-[#f65d01] bg-orange-50/40 p-4 text-[14px] italic text-neutral-700",
  link: "font-medium text-[#f65d01] hover:underline",
};

export default function TermsPage() {
  return (
    <>
      <PageHead
        title="Terms & Conditions"
        description="Read Noeveka's terms and conditions governing the use of our website, architectural resources, and advisory content."
        canonicalUrl="/terms"
      />

      <article className={styles.container}>
        <div className={styles.inner}>
          {/* Header */}
          <header className={styles.header}>
            <p className={styles.eyebrow}>LEGAL & TERMS</p>
            <h1 className={styles.title}>Terms and Conditions</h1>
            <p className={styles.meta}>Last updated: September 2026</p>
          </header>

          {/* Terms Body */}
          <div className={styles.content}>
            <p className={styles.p}>
              Welcome to noeveka.com (the &ldquo;Site&rdquo;), operated by <strong>Noeveka</strong>{" "}
              (&ldquo;Noeveka&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By accessing
              or using the Site, you agree to these Terms and Conditions (&ldquo;Terms&rdquo;) and our{" "}
              <Link to="/privacy-policy" className={styles.link}>
                Privacy Policy
              </Link>
              . If you do not agree, please do not use the Site.
            </p>

            <section>
              <h2 className={styles.h2}>1. About the Site</h2>
              <p className={styles.p}>
                The Site provides information about Noeveka and our enterprise data and AI services,
                including informational descriptions of our advisory offerings and workshops, free
                downloadable resources, and a way to contact us.
              </p>
              <p className={styles.p}>
                The Site is informational. <strong>It does not offer online sales, automated payments,
                workshop booking, or user accounts.</strong> Any formal engagement with Noeveka is
                agreed separately in writing.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>2. Eligibility</h2>
              <p className={styles.p}>
                You must be at least 18 years old and able to enter into a binding agreement to use the
                Site.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>3. Use of the Site</h2>
              <p className={styles.p}>You agree to use the Site lawfully and not to:</p>
              <ul className={styles.list}>
                <li>Break any applicable local or international law or regulation.</li>
                <li>Submit false, misleading, or someone else&apos;s information in our forms.</li>
                <li>Attempt to gain unauthorised access to the Site, our systems, or other users&apos; data.</li>
                <li>Introduce malware or interfere with the Site&apos;s operation or security.</li>
                <li>
                  Use bots, scrapers, or automated tools to collect data or overload the Site without
                  our written permission.
                </li>
                <li>Use the Site or its resources to send spam or for any harmful purpose.</li>
              </ul>
            </section>

            <section>
              <h2 className={styles.h2}>4. Free resources</h2>
              <ul className={styles.list}>
                <li>
                  Resources on the Site (checklists, playbooks, frameworks, and architecture guides) are{" "}
                  <strong>free</strong> at this time.
                </li>
                <li>
                  To download a resource, you must provide your name and email address and agree to the
                  consent checkbox as described in our Privacy Policy.
                </li>
                <li>
                  We grant you a personal, non-exclusive, non-transferable, revocable licence to download
                  and use the resources for your own <strong>internal, non-commercial</strong> enterprise
                  purposes.
                </li>
                <li>
                  You may <strong>not</strong> resell, redistribute publicly, republish, modify, or
                  remove Noeveka&apos;s branding or notices from the resources without our written permission.
                  Sharing a link to our Resources page is always welcomed.
                </li>
                <li>
                  We may add, change, or remove resources at any time without prior notice.
                </li>
              </ul>
            </section>

            <section>
              <h2 className={styles.h2}>5. Intellectual property</h2>
              <p className={styles.p}>
                All content on the Site, including text, graphics, logos, the Noeveka name and marks,
                layout, downloadable resources, and code, is owned by or licensed to Noeveka and is
                protected by copyright, trademark, and other intellectual property laws. Except as
                expressly allowed in these Terms, you may not copy, reproduce, distribute, adapt, or
                create derivative works from any content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>6. Your submissions</h2>
              <p className={styles.p}>
                If you send us a message through the Contact form, you confirm that you have the right to
                share that information. You keep ownership of what you send, and allow us to use it to
                respond to you and handle your enquiry. Please do not send sensitive, proprietary, or
                confidential information through website forms; we can discuss exchanging details under
                a formal Mutual NDA.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>7. No professional advice; no client relationship</h2>
              <p className={styles.p}>
                Content on the Site, including playbooks and guides, is provided for{" "}
                <strong>general information only</strong>. It does not constitute formal architectural,
                legal, financial, or engineering advice tailored to your specific infrastructure.
                Contacting us or downloading a resource does not create a consulting or client
                relationship. Any advisory relationship arises only under an executed written Statement
                of Work.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>8. Workshops and services</h2>
              <p className={styles.p}>
                Descriptions of workshops and advisory lines on the Site are informational. They do not
                constitute a binding unilateral offer. Formats, deliverables, and scheduling are
                finalised directly with enterprise teams in writing.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>9. Disclaimer of warranties</h2>
              <p className={styles.p}>
                The Site and all resources are provided <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong>,
                without warranties of any kind, express or implied, including accuracy, completeness,
                fitness for a particular purpose, or non-infringement, to the fullest extent permitted
                by law.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>10. Limitation of liability</h2>
              <p className={styles.p}>
                To the fullest extent permitted by law, Noeveka and its directors, employees, and
                partners will not be liable for any indirect, incidental, special, consequential, or
                punitive damages, or for loss of profits, data, or business opportunities, arising from
                your use of the Site or resources.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>11. Governing law and disputes</h2>
              <p className={styles.p}>
                These Terms are governed by the laws of India. Subject to any agreed alternate dispute
                resolution mechanisms in a master enterprise agreement, the courts having jurisdiction
                over Noeveka&apos;s registered operations will have exclusive jurisdiction over disputes
                arising from these Terms.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>12. Contact</h2>
              <p className={styles.p}>
                Questions about these Terms? Email{" "}
                <a href="mailto:hello@noeveka.com" className={styles.link}>
                  hello@noeveka.com
                </a>{" "}
                or reach out via our{" "}
                <Link to="/contact" className={styles.link}>
                  Contact page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
