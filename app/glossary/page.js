import ContactForm from '../../components/ContactForm';

const glossaryItems = [
  ['A', 'Allowance', 'A deductible amount that can reduce taxable income.'],
  ['B', 'Bookkeeping', 'Recording daily financial transactions accurately.'],
  ['C', 'Corporation Tax', 'Tax paid by limited companies on profits.'],
  ['D', 'Dividend', 'Profit paid to shareholders after tax obligations.'],
  ['E', 'Expenses', 'Business costs that may qualify for tax relief.'],
  ['F', 'Fiscal Year', 'A 12-month period used for accounting and reporting.'],
  ['G', 'Gross Profit', 'Revenue minus direct costs.'],
  ['H', 'HMRC', 'UK authority responsible for tax collection and customs.'],
  ['I', 'Income Tax', 'Tax charged on earnings above allowances.'],
  ['J', 'Journal Entry', 'A formal accounting record of a transaction.'],
  ['K', 'KPI', 'Key performance indicator used to track results.'],
  ['L', 'Liability', 'Money owed by a business.'],
  ['M', 'Management Accounts', 'Internal periodic reports for decisions.'],
  ['N', 'National Insurance', 'UK contribution for state benefits and pensions.'],
  ['O', 'Overheads', 'Ongoing operating costs not tied to one sale.'],
  ['P', 'PAYE', 'Pay As You Earn payroll deduction system.'],
  ['Q', 'Quarter', 'A three-month reporting period.'],
  ['R', 'RTI', 'Real Time Information payroll submission to HMRC.'],
  ['S', 'Self-Assessment', 'Personal tax return process for qualifying individuals.'],
  ['T', 'Turnover', 'Total sales before costs are deducted.'],
  ['U', 'UTR', 'Unique Taxpayer Reference issued by HMRC.'],
  ['V', 'VAT', 'Value Added Tax on goods and services.'],
  ['W', 'Working Capital', 'Funds available for daily operations.'],
  ['X', 'Xero', 'Popular cloud accounting software.'],
  ['Y', 'Year-End', 'Final date of a company reporting period.'],
  ['Z', 'Zero-Rated', 'VAT category taxed at 0% but reportable.'],
];

export default function GlossaryPage() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="slogan">A-Z Glossary</div>
          <h1>Quick definitions for accounting and tax terms</h1>
          <p>Use this glossary to understand terms you see in payroll, VAT, self-assessment, year-end accounts, and day-to-day business finance.</p>
        </div>
        <figure className="hero-figure">
          <img src="/assets/illustrations/glossary.svg" alt="Illustration of an accounting glossary" />
        </figure>
      </section>

      <section className="alpha-grid">
        {glossaryItems.map(([letter, term, definition]) => (
          <article key={letter} className="alpha-item">
            <strong>{letter} - {term}:</strong> {definition}
          </article>
        ))}
      </section>

      <ContactForm intro="Need support with any term above? Send us a message." />
    </>
  );
}
