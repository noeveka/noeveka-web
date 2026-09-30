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
        description="Learn how NOEVEKA FZC LLC collects, uses, and protects your personal data in accordance with UAE PDPL and international data protection standards."
        canonicalUrl="/privacy-policy"
      />

      <article className={styles.container}>
        <div className={styles.inner}>
          {/* Header */}
          <header className={styles.header}>
            <p className={styles.eyebrow}>LEGAL & PRIVACY</p>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.meta}>Last updated: 01 October 2026</p>
          </header>

          {/* Policy Body */}
          <div className={styles.content}>
            <section>
              <h2 className={styles.h2}>1. Who we are</h2>
              <p className={styles.p}>
                This website, noeveka.com (the &ldquo;Site&rdquo;), is operated by{" "}
                <strong>NOEVEKA FZC LLC</strong>, a company registered in Sharjah, United Arab Emirates
                (&ldquo;Noeveka&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), located
                at Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.
              </p>
              <p className={styles.p}>
                We provide enterprise data and AI advisory, architecture services and workshops. This
                Privacy Policy explains what personal data we collect through the Site, why we collect
                it, how we use and protect it, and what rights you have.
              </p>
              <p className={styles.p}>
                For privacy questions, contact us at{" "}
                <a href="mailto:connect@noeveka.com" className={styles.link}>
                  connect@noeveka.com
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
                  <strong>When you use the Contact form:</strong> your name, email address, and the
                  message you write.
                </li>
              </ul>

              <h3 className={styles.h3}>b) Information collected automatically</h3>
              <ul className={styles.list}>
                <li>
                  <strong>Usage and device data</strong> through Google Analytics 4 (GA4): pages
                  visited, time on site, approximate location (city or country level), browser type,
                  device type, referring website, and similar technical data. This data is collected
                  through cookies or similar technologies.
                </li>
                <li>
                  <strong>Basic technical logs</strong> processed by our hosting provider (Cloudflare),
                  such as IP address and request details, for security and to keep the Site running.
                </li>
              </ul>
              <p className={styles.p}>
                We do <strong>not</strong> ask for payment details, passwords or government IDs. The
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
                        Send you emails about Noeveka, including newsletters, updates and marketing
                        communications
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
                      <td className={styles.td}>
                        Your request / our legitimate interest in responding
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.td}>Understand how the Site is used and improve it</td>
                      <td className={styles.td}>Analytics data</td>
                      <td className={styles.td}>
                        Your consent (where required) / our legitimate interest
                      </td>
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
                When you download a resource, you are asked to tick a checkbox that says:
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
                <a href="mailto:connect@noeveka.com" className={styles.link}>
                  connect@noeveka.com
                </a>
                . Withdrawing consent does not affect the lawfulness of anything we did before you
                withdrew. We may still send you essential non-marketing messages if needed, for
                example a reply to a question you asked.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>5. Who we share your information with</h2>
              <p className={styles.p}>
                We do <strong>not sell</strong> your personal data. We share it only with service
                providers who help us run the Site and our communications, and only as needed for those
                purposes:
              </p>
              <ul className={styles.list}>
                <li>
                  <strong>Resend:</strong> to store your contact details, send our newsletters and
                  marketing emails (Resend Broadcasts and Audiences), and deliver transactional emails
                  such as contact form messages to our inbox and acknowledgement emails to you.
                </li>
                <li>
                  <strong>Cloudflare:</strong> website hosting, security and delivery.
                </li>
                <li>
                  <strong>Sanity:</strong> the content management system we use to manage Site
                  content (it does not receive your form data).
                </li>
                <li>
                  <strong>Google (Google Analytics 4):</strong> website analytics.
                </li>
              </ul>
              <p className={styles.p}>
                These providers act on our instructions and are bound by their own privacy and security
                commitments. Some of them are located outside the United Arab Emirates, so your data may
                be transferred to and processed in other countries, including the United States and the
                European Union. We take reasonable steps to ensure it stays protected when it is.
              </p>
              <p className={styles.p}>
                We may also disclose information if required by law, a court order or a government
                authority, or to protect our rights, safety or property.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>6. Cookies and analytics</h2>
              <p className={styles.p}>
                We use <strong>Google Analytics 4</strong> to understand how visitors use the Site. GA4
                uses cookies and similar technologies to collect the analytics data described in Section
                2.
              </p>
              <ul className={styles.list}>
                <li>
                  We display a cookie consent banner on your first visit. Analytics cookies are only
                  set after you choose &ldquo;Accept&rdquo; or enable the Analytics category; if you
                  choose &ldquo;Reject&rdquo; or take no action, GA4 does not load. You can change your
                  choice at any time using the &ldquo;Manage cookie preferences&rdquo; link in the site
                  footer.
                </li>
                <li>
                  You can block or delete cookies in your browser settings, or install Google&apos;s
                  opt-out browser add-on:{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                </li>
                <li>Blocking cookies will not stop you from using the Site.</li>
              </ul>
              <p className={styles.p}>
                We do not use cookies for advertising or to sell your data.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>7. How long we keep your data</h2>
              <ul className={styles.list}>
                <li>
                  <strong>Email marketing contacts:</strong> until you unsubscribe or ask us to delete
                  your data, or until we stop using that list.
                </li>
                <li>
                  <strong>Contact form messages:</strong> for as long as needed to handle your enquiry
                  and follow up, usually up to 24 months, unless a longer period is needed for legal
                  reasons.
                </li>
                <li>
                  <strong>Analytics data:</strong> 14 months, the longest retention period GA4 offers
                  on a standard (non-360) account.
                </li>
              </ul>
              <p className={styles.p}>
                When data is no longer needed, we delete it or anonymise it.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>8. How we protect your data</h2>
              <p className={styles.p}>
                We use reasonable technical and organisational safeguards. The Site is served over
                HTTPS/SSL, and form data is processed on the server side. Access to our systems and
                email tools is restricted to authorised people. No method of transmission or storage
                over the internet is completely secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>9. Your rights</h2>
              <p className={styles.p}>
                Under the <strong>UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal
                Data</strong> (&ldquo;UAE PDPL&rdquo;) and other applicable laws (and, for visitors in
                the EU/UK, the GDPR), you may have the right to:
              </p>
              <ul className={styles.list}>
                <li>
                  <strong>Be informed</strong> about how your personal data is processed.
                </li>
                <li>
                  <strong>Access</strong> the personal data we hold about you.
                </li>
                <li>
                  <strong>Correct or update</strong> inaccurate or incomplete data.
                </li>
                <li>
                  <strong>Erase</strong> your data, in certain circumstances.
                </li>
                <li>
                  <strong>Restrict or object to</strong> certain processing of your data.
                </li>
                <li>
                  <strong>Withdraw consent</strong> at any time (see Section 4).
                </li>
                <li>
                  <strong>Raise a complaint</strong> with us, and if unresolved, with the{" "}
                  <strong>UAE Data Office</strong> (or your local data protection authority if you are
                  outside the UAE).
                </li>
              </ul>
              <p className={styles.p}>
                To use any of these rights, email{" "}
                <a href="mailto:connect@noeveka.com" className={styles.link}>
                  connect@noeveka.com
                </a>{" "}
                from the address you used with us. We will respond within a reasonable time, and in any
                case within the period required by law.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>10. Data protection contact</h2>
              <p className={styles.p}>
                If you have a concern about how your data is handled, contact:
              </p>
              <ul className={styles.list}>
                <li>
                  <strong>Ajay Kumar</strong>
                </li>
                <li>
                  Email:{" "}
                  <a href="mailto:connect@noeveka.com" className={styles.link}>
                    connect@noeveka.com
                  </a>
                </li>
                <li>
                  Address: Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates
                </li>
              </ul>
            </section>

            <section>
              <h2 className={styles.h2}>11. Children</h2>
              <p className={styles.p}>
                This Site is intended for business professionals and is not directed at anyone under
                18. We do not knowingly collect personal data from children. If you believe a child has
                given us their data, contact us and we will delete it.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>12. Links to other websites</h2>
              <p className={styles.p}>
                The Site may link to third-party websites. We do not control them and are not
                responsible for their privacy practices. Please read their policies.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>13. Changes to this policy</h2>
              <p className={styles.p}>
                We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date
                at the top shows the latest version. If we make material changes, we will take
                reasonable steps to let you know, for example by a notice on the Site.
              </p>
            </section>

            <section>
              <h2 className={styles.h2}>14. Contact us</h2>
              <p className={styles.p}>
                Questions about this policy? Email{" "}
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
