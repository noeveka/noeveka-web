import { Link } from "react-router";
import { PageHead } from "@/components/seo";

const styles = {
  container: "relative w-full bg-white py-14 sm:py-20 lg:py-24",
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
        description="Review the terms and conditions governing the use of NOEVEKA FZC LLC's website, downloadable frameworks, and services."
        canonicalUrl="/terms"
      />

      <article className={styles.container}>
        <div className={styles.inner}>
          {/* Header */}
          <header className={styles.header}>
            <p className={styles.eyebrow}>LEGAL & TERMS</p>
            <h1 className={styles.title}>Terms and Conditions</h1>
            <p className={styles.meta}>Last updated: 01 October 2026</p>
          </header>

          {/* Terms Body */}
          <div className={styles.content}>
            <p className={styles.p}>
              Welcome to noeveka.com (the &ldquo;Site&rdquo;), operated by{" "}
              <strong>NOEVEKA FZC LLC</strong>, a company registered in Sharjah, United Arab Emirates
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
                The Site is informational. <strong>It does not offer online sales, payments,
                workshop registration or booking, or user accounts.</strong> Any engagement with
                Noeveka is agreed separately in writing.
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
                <li>Break any applicable law or regulation.</li>
                <li>Submit false, misleading or someone else&apos;s information in our forms.</li>
                <li>
                  Attempt to gain unauthorised access to the Site, our systems or other users&apos;
                  data.
                </li>
                <li>Introduce malware or interfere with the Site&apos;s operation or security.</li>
                <li>
                  Use bots, scrapers or automated tools to collect data or overload the Site without our
                  written permission.
                </li>
                <li>
                  Use the Site or its resources to send spam or for any unlawful or harmful purpose.
                </li>
              </ul>
            </section>

            <section>
              <h2 className={styles.h2}>4. Free resources</h2>
              <ul className={styles.list}>
                <li>
                  Resources on the Site (checklists, guides, frameworks and similar) are{" "}
                  <strong>free</strong> at this time.
                </li>
                <li>
                  To download one, you must provide your name and email address and tick the consent
                  checkbox, as described in our Privacy Policy. You must give accurate information.
                </li>
                <li>
                  We grant you a personal, non-exclusive, non-transferable, revocable licence to download
                  and use the resources for your own <strong>internal, non-commercial</strong>{" "}
                  purposes.
                </li>
                <li>
                  You may <strong>not</strong> resell, redistribute publicly, republish, modify, or
                  remove Noeveka&apos;s branding or notices from the resources without our written
                  permission. Sharing a link to the Resources page is welcome.
                </li>
                <li>
                  We may add, change or remove resources, or begin charging for some resources in the
                  future, at any time without notice.
                </li>
              </ul>
            </section>

            <section>
              <h2 className={styles.h2}>5. Intellectual property</h2>
              <p className={styles.p}>
                All content on the Site, including text, graphics, logos, the Noeveka name and marks,
                layout, resources and code, is owned by or licensed to Noeveka and is protected by
                copyright, trademark and other intellectual property laws. Except as expressly allowed
                in these Terms, you may not copy, reproduce, distribute, adapt or create derivative works
                from any of it without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>6. Your submissions</h2>
              <p className={styles.p}>
                If you send us a message through the Contact form, you confirm that you have the right
                to share that information. You keep ownership of what you send, and you allow us to use
                it to respond to you and to handle your enquiry. Please do not send confidential,
                sensitive or proprietary information through the Site&apos;s forms. If you would like to
                share such information, first discuss with us how it can be exchanged under a written
                confidentiality agreement.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>7. No professional advice; no client relationship</h2>
              <p className={styles.p}>
                Content on the Site, including the resources, is provided for{" "}
                <strong>general information only</strong>. It is not professional, legal, financial,
                technical or other advice, and it may not suit your specific circumstances. Contacting
                us, downloading a resource or attending a workshop does not by itself create a consulting
                or client relationship. Any such relationship arises only under a separate written
                agreement.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>8. Workshops and services</h2>
              <p className={styles.p}>
                Descriptions of workshops and services on the Site are for information only. They are
                not an offer capable of acceptance. Details such as content, format and availability may
                change. Registration, pricing and delivery of any workshop or service will be agreed
                with you directly, in writing.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>9. Third-party links and services</h2>
              <p className={styles.p}>
                The Site may link to or rely on third-party sites and services. We do not control and
                are not responsible for their content, policies or availability. Using them is at your
                own risk and subject to their terms.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>10. Disclaimer of warranties</h2>
              <p className={styles.p}>
                The Site and all resources are provided{" "}
                <strong>&ldquo;as is&rdquo; and &ldquo;as available&rdquo;</strong>, without warranties
                of any kind, express or implied, including accuracy, completeness, fitness for a
                particular purpose, or non-infringement, to the fullest extent permitted by law. We do
                not guarantee that the Site will be uninterrupted, error-free or secure.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>11. Limitation of liability</h2>
              <p className={styles.p}>
                To the fullest extent permitted by law, Noeveka and its directors, employees and
                partners will not be liable for any indirect, incidental, special, consequential or
                punitive damages, or for any loss of profits, revenue, data or business, arising from
                your use of, or inability to use, the Site or the resources, or your reliance on their
                content. Where liability cannot be excluded, our total liability for all claims related to
                the Site is limited to <strong>AED 500</strong>. Nothing in these Terms limits
                liability that cannot be limited by law, and this cap does not apply to gross negligence,
                intentional harm or fraud.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>12. Indemnity</h2>
              <p className={styles.p}>
                You agree to indemnify and hold Noeveka harmless from claims, losses and expenses
                (including reasonable legal fees) arising from your breach of these Terms or your misuse
                of the Site.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>13. Suspension and changes</h2>
              <p className={styles.p}>
                We may change, suspend or discontinue any part of the Site, or restrict access, at any
                time without notice. We may update these Terms from time to time; the &ldquo;Last
                updated&rdquo; date shows the latest version. Continued use of the Site after an update
                means you accept the revised Terms.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>14. Governing law and disputes</h2>
              <p className={styles.p}>
                These Terms are governed by the laws of the{" "}
                <strong>United Arab Emirates</strong>. Subject to any dispute-resolution process
                agreed in a separate written contract, the courts of{" "}
                <strong>Sharjah, United Arab Emirates</strong> have exclusive jurisdiction over any
                dispute arising from these Terms or your use of the Site.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>15. General</h2>
              <p className={styles.p}>
                If any part of these Terms is found unenforceable, the rest stays in effect. Our failure
                to enforce a right is not a waiver of it. These Terms and the Privacy Policy are the
                entire agreement between you and us about your use of the Site, unless you have a
                separate written agreement with us.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>16. Contact</h2>
              <p className={styles.p}>
                Questions about these Terms? Email{" "}
                <a href="mailto:connect@noeveka.com" className={styles.link}>
                  connect@noeveka.com
                </a>{" "}
                or use our{" "}
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
