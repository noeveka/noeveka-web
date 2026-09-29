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
  h3: "text-base sm:text-lg font-bold text-[#1a1a1a] mt-6 mb-2",
  p: "mb-4 leading-relaxed",
  list: "list-disc pl-5 mb-5 space-y-2",
  tableWrapper: "my-6 overflow-x-auto rounded-xl border border-neutral-200/80 shadow-xs",
  table: "w-full text-left text-xs sm:text-sm border-collapse",
  th: "bg-neutral-50 px-4 py-3 font-bold text-[#1a1a1a] border-b border-neutral-200/80",
  td: "px-4 py-3 text-neutral-600 border-b border-neutral-100 align-top",
  quote: "my-4 rounded-r-xl border-l-3 border-[#f65d01] bg-orange-50/40 p-4 text-[14px] italic text-neutral-700",
  link: "font-medium text-[#f65d01] hover:underline",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHead
        title="Privacy Policy"
        description="Learn how Noeveka collects, uses, and protects your personal data in accordance with applicable data protection laws."
        canonicalUrl="/privacy-policy"
      />

      <article className={styles.container}>
        <div className={styles.inner}>
          {/* Header */}
          <header className={styles.header}>
            <p className={styles.eyebrow}>LEGAL & PRIVACY</p>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.meta}>Last updated: September 2026</p>
          </header>

          {/* Policy Body */}
          <div className={styles.content}>
            <section>
              <h2 className={styles.h2}>1. Who we are</h2>
              <p className={styles.p}>
                This website, noeveka.com (the &ldquo;Site&rdquo;), is operated by{" "}
                <strong>Noeveka</strong> (&ldquo;Noeveka&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
                &ldquo;our&rdquo;), located in India and serving global enterprise teams.
              </p>
              <p className={styles.p}>
                We provide enterprise data and AI advisory, architecture services, and workshops.
                This Privacy Policy explains what personal data we collect through the Site, why we
                collect it, how we use and protect it, and what rights you have.
              </p>
              <p className={styles.p}>
                For privacy questions, contact us at{" "}
                <a href="mailto:privacy@noeveka.com" className={styles.link}>
                  privacy@noeveka.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>2. What information we collect</h2>
              <p className={styles.p}>
                We keep data collection to a minimum. We collect only the following:
              </p>

              <h3 className={styles.h3}>a) Information you give us</h3>
              <ul className={styles.list}>
                <li>
                  <strong>When you download a resource:</strong> your name and email address, and a
                  record of your consent to receive emails from us.
                </li>
                <li>
                  <strong>When you use the Contact form:</strong> your name, email address, phone number
                  (optional), and the message you write.
                </li>
              </ul>

              <h3 className={styles.h3}>b) Information collected automatically</h3>
              <ul className={styles.list}>
                <li>
                  <strong>Usage and device data</strong> through Google Analytics 4 (GA4): pages
                  visited, time on site, approximate location (city or country level), browser type,
                  device type, referring website, and similar technical data.
                </li>
                <li>
                  <strong>Basic technical logs</strong> processed by our hosting provider
                  (Cloudflare/Vercel), such as IP address and request details, for security and to keep
                  the Site running reliably.
                </li>
              </ul>
              <p className={styles.p}>
                We do <strong>not</strong> ask for payment details, passwords, or government IDs. The
                Site has no user accounts. We do not knowingly collect sensitive personal data.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>3. How and why we use your information</h2>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={styles.th}>Purpose</th>
                      <th className={styles.th}>Data used</th>
                      <th className={styles.th}>Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styles.td}>Give you access to the resource you requested</td>
                      <td className={styles.td}>Name, email</td>
                      <td className={styles.td}>Your consent / to fulfil your request</td>
                    </tr>
                    <tr>
                      <td className={styles.td}>
                        Send you emails about Noeveka, including newsletters, architecture updates, and insights
                      </td>
                      <td className={styles.td}>Name, email</td>
                      <td className={styles.td}>
                        Your explicit consent (the checkbox you tick on the download form)
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.td}>
                        Reply to your enquiry and send an acknowledgement email
                      </td>
                      <td className={styles.td}>Name, email, message</td>
                      <td className={styles.td}>Your request / our legitimate interest in responding</td>
                    </tr>
                    <tr>
                      <td className={styles.td}>Understand how the Site is used and improve it</td>
                      <td className={styles.td}>Analytics data</td>
                      <td className={styles.td}>Our legitimate interest</td>
                    </tr>
                    <tr>
                      <td className={styles.td}>Keep the Site secure and prevent abuse</td>
                      <td className={styles.td}>Technical logs</td>
                      <td className={styles.td}>Our legitimate interest</td>
                    </tr>
                    <tr>
                      <td className={styles.td}>Comply with legal obligations</td>
                      <td className={styles.td}>As required</td>
                      <td className={styles.td}>Legal obligation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className={styles.h2}>4. Consent and marketing emails</h2>
              <p className={styles.p}>
                When you download a resource, you are asked to tick a checkbox that states:
              </p>
              <div className={styles.quote}>
                &ldquo;I agree to receive emails from Noeveka, including marketing communications.
                Unsubscribe anytime.&rdquo;
              </div>
              <p className={styles.p}>
                This box is <strong>never pre-ticked</strong>. We only add you to our mailing list if
                you tick it and submit the form.
              </p>
              <p className={styles.p}>
                You can <strong>withdraw your consent and unsubscribe at any time</strong> by clicking
                the &ldquo;unsubscribe&rdquo; link at the bottom of any marketing email, or by
                writing to{" "}
                <a href="mailto:privacy@noeveka.com" className={styles.link}>
                  privacy@noeveka.com
                </a>
                . Withdrawing consent does not affect the lawfulness of processing carried out before
                withdrawal.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>5. Who we share your information with</h2>
              <p className={styles.p}>
                We do <strong>not sell</strong> your personal data. We share it only with trusted service
                providers who help us run the Site and our communications:
              </p>
              <ul className={styles.list}>
                <li>
                  <strong>Resend / Email platform:</strong> to deliver transactional messages, such as
                  resource download links and enquiry notifications.
                </li>
                <li>
                  <strong>Hosting & CDN (Cloudflare/Vercel):</strong> website hosting, security, and edge
                  delivery.
                </li>
                <li>
                  <strong>Sanity CMS:</strong> content management system for Site content (does not
                  receive visitor form submissions).
                </li>
                <li>
                  <strong>Google (Google Analytics 4):</strong> aggregated website usage analytics.
                </li>
              </ul>
              <p className={styles.p}>
                These providers act on our instructions and are bound by appropriate confidentiality and
                security commitments. We may also disclose information if required by law, a court
                order, or a government authority.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>6. Cookies and analytics</h2>
              <p className={styles.p}>
                We use Google Analytics 4 to understand how visitors use the Site. GA4 uses cookies and
                similar technologies to collect aggregated analytics data. You can block or delete
                cookies in your browser settings, or install Google&apos;s opt-out browser add-on. Blocking
                cookies will not stop you from using the Site. We do not use cookies for advertising or
                cross-site tracking.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>7. How long we keep your data</h2>
              <ul className={styles.list}>
                <li>
                  <strong>Email marketing contacts:</strong> until you unsubscribe or ask us to delete
                  your data.
                </li>
                <li>
                  <strong>Contact form messages:</strong> for as long as needed to handle your enquiry
                  and follow up, typically up to 24 months.
                </li>
                <li>
                  <strong>Analytics data:</strong> according to standard GA4 retention settings (14
                  months).
                </li>
              </ul>
            </section>

            <section>
              <h2 className={styles.h2}>8. How we protect your data</h2>
              <p className={styles.p}>
                We use appropriate technical and organisational safeguards. The Site is served
                strictly over HTTPS/SSL, and form data is processed server-side. Access to our tools is
                restricted to authorised personnel.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>9. Your rights</h2>
              <p className={styles.p}>
                Under India&apos;s <strong>Digital Personal Data Protection Act, 2023</strong> and other
                applicable international frameworks (such as GDPR for EU/UK visitors), you have the
                right to:
              </p>
              <ul className={styles.list}>
                <li>Access the personal data we hold about you.</li>
                <li>Correct or update inaccurate or incomplete data.</li>
                <li>Request erasure of your data.</li>
                <li>Withdraw consent at any time.</li>
                <li>Raise a grievance with us or file a complaint with the Data Protection Board.</li>
              </ul>
              <p className={styles.p}>
                To exercise any of these rights, email{" "}
                <a href="mailto:privacy@noeveka.com" className={styles.link}>
                  privacy@noeveka.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>10. Grievance officer</h2>
              <p className={styles.p}>
                If you have a concern about how your data is handled, you may reach our Grievance
                Officer:
              </p>
              <ul className={styles.list}>
                <li>
                  <strong>Officer:</strong> Ajay Kumar
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@noeveka.com" className={styles.link}>
                    privacy@noeveka.com
                  </a>
                </li>
                <li>
                  <strong>Address:</strong> India · Serving Global Enterprise Teams
                </li>
              </ul>
            </section>

            <section>
              <h2 className={styles.h2}>11. Children</h2>
              <p className={styles.p}>
                This Site is intended for business professionals and is not directed at anyone under 18.
                We do not knowingly collect personal data from children.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>12. Changes to this policy</h2>
              <p className={styles.p}>
                We may update this Privacy Policy periodically. The &ldquo;Last updated&rdquo; date at the top
                reflects the current version. Continued use of the Site represents your acceptance of the
                updated terms.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>13. Contact us</h2>
              <p className={styles.p}>
                Questions about this policy? Email{" "}
                <a href="mailto:privacy@noeveka.com" className={styles.link}>
                  privacy@noeveka.com
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
