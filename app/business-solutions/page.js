import ContactForm from '../../components/ContactForm';

export default function BusinessSolutionsPage() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="slogan">Business Solutions</div>
          <h1>A complete service stack for accounting and compliance</h1>
          <p>We manage your statutory obligations, reporting cadence, and tax workflows with practical, business-first support.</p>
        </div>
        <figure className="hero-figure">
          <img src="/assets/illustrations/solutions.svg" alt="Illustration of business service checklist" />
        </figure>
      </section>

      <section className="grid">
        <article id="end-of-year-accounts" className="card">
          <h2>End-of-Year Accounts</h2>
          <p>Incorporated companies must prepare and submit annual accounts to Companies House and HMRC. We handle this duty with precision and speed.</p>
        </article>
        <article id="management-accounts" className="card">
          <h2>Management Accounts</h2>
          <p>Monthly reports that track performance, identify KPIs, and support data-backed decisions.</p>
        </article>
        <article id="bookkeeping" className="card">
          <h2>Bookkeeping</h2>
          <p>We maintain accurate transaction records that support compliance, funding readiness, and strategic reporting.</p>
        </article>
        <article id="payroll-services" className="card">
          <h2>Payroll Services</h2>
          <ul className="clean">
            <li>Weekly, fortnightly, monthly, and annual payroll processing</li>
            <li>External returns and internal reporting</li>
            <li>BACS, cash, and cheque payments</li>
            <li>Tax, NI, SSP, SMP, Student Loan, and related calculations</li>
            <li>P11D and Class 1A computations</li>
            <li>End-of-year reconciliation and HMRC e-filing including RTI</li>
          </ul>
        </article>
        <article id="self-assessment-tax-returns" className="card">
          <h2>Self-Assessment Tax Returns</h2>
          <p>For individuals outside PAYE, we prepare and file accurate returns on time.</p>
        </article>
        <article id="corporation-tax" className="card">
          <h2>Corporation Tax</h2>
          <p>We ensure you pay what is due and no more, while remaining fully compliant.</p>
        </article>
        <article id="vat-returns" className="card">
          <h2>VAT Returns</h2>
          <p>Timely and accurate VAT submissions that reduce penalties and protect cash flow.</p>
        </article>
        <article id="business-start-ups" className="card">
          <h2>Business Start-ups</h2>
          <p>From launch setup to ongoing obligations, we guide you through your first compliance milestones.</p>
        </article>
      </section>

      <ContactForm intro="Tell us which service you need and we will respond promptly." />
    </>
  );
}
