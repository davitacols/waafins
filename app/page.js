import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="slogan">Small businesses. Our business.</div>
          <h1>Finance and compliance support built for ambitious businesses</h1>
          <p>We are a dedicated network of finance professionals and accountants committed to relieving our clients of accounting, statutory compliance, and reporting obligations.</p>
          <p>Our proactive, tailored approach helps you optimise resources while staying compliant in an evolving regulatory environment.</p>
        </div>
        <figure className="hero-figure">
          <img src="/assets/illustrations/hero-finance.svg" alt="Illustration of financial dashboards and reporting" />
        </figure>
      </section>

      <section className="split-banner">
        <div>
          <strong>Complimentary business support included</strong>
          <p>We keep you up to date with HMRC's changing tax rules as part of every service.</p>
        </div>
        <span className="badge">HMRC-Ready Workflows</span>
      </section>

      <h2 className="section-title">Who We Help</h2>
      <section className="grid cols-3">
        <article className="card">Business start-ups</article>
        <article className="card">Limited companies</article>
        <article className="card">Contractors</article>
        <article className="card">Landlords</article>
        <article className="card">Partnerships</article>
        <article className="card">Sole traders</article>
      </section>

      <h2 className="section-title">Why Clients Choose WAAFINS</h2>
      <section className="grid cols-2">
        <article className="card">
          <h3>Practical compliance confidence</h3>
          <p>We keep you aligned with changing HMRC and statutory requirements to reduce risk, penalties, and investigations.</p>
        </article>
        <article className="card">
          <h3>Time back for growth</h3>
          <p>You focus on strategy and growth while we handle reporting, payroll, and the compliance layer of operations.</p>
        </article>
        <article className="card">
          <h3>Personalised service</h3>
          <p>Every assignment is managed by experienced professionals who adapt support to your personal and commercial goals.</p>
        </article>
        <article className="card">
          <h3>Reliable systems and standards</h3>
          <p>Our proven accounting software and quality checks keep your records dependable and decision-ready.</p>
        </article>
      </section>

      <ContactForm />
    </>
  );
}
