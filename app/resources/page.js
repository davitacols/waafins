import ContactForm from '../../components/ContactForm';

const links = [
  ['Who needs to do a self-assessment?', 'https://www.gov.uk/self-assessment-tax-returns/who-must-send-a-tax-return'],
  ['Register for self-assessment if self-employed', 'https://www.gov.uk/register-for-self-assessment/self-employed'],
  ['Do I need to register for VAT?', 'https://www.gov.uk/vat-registration/when-to-register'],
  ['Employing staff and PAYE', 'https://www.gov.uk/paye-for-employers'],
  ['Corporation tax guidance', 'https://www.gov.uk/corporation-tax'],
  ['Importance of record keeping', 'https://www.gov.uk/running-a-limited-company/company-and-accounting-records'],
];

export default function ResourcesPage() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="slogan">Resources</div>
          <h1>Official HMRC and GOV.UK guidance</h1>
          <p>Use these trusted links for registration, filing duties, PAYE, corporation tax, and statutory record keeping guidance.</p>
        </div>
        <figure className="hero-figure">
          <img src="/assets/illustrations/resources.svg" alt="Illustration of official resource documents" />
        </figure>
      </section>

      <section className="grid">
        {links.map(([title, href]) => (
          <article className="card" key={href}>
            <h2>{title}</h2>
            <p className="resource-link"><a href={href} target="_blank" rel="noopener noreferrer">{href}</a></p>
          </article>
        ))}
      </section>

      <ContactForm intro="Need help interpreting any resource? Send us a message." />
    </>
  );
}
