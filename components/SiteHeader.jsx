'use client';

import Link from 'next/link';
import { useState } from 'react';

const serviceLinks = [
  ['End-of-Year Accounts', '/business-solutions#end-of-year-accounts'],
  ['Management Accounts', '/business-solutions#management-accounts'],
  ['Bookkeeping', '/business-solutions#bookkeeping'],
  ['Payroll Services', '/business-solutions#payroll-services'],
  ['Self-Assessment Tax Returns', '/business-solutions#self-assessment-tax-returns'],
  ['Corporation Tax', '/business-solutions#corporation-tax'],
  ['VAT Returns', '/business-solutions#vat-returns'],
  ['Business Start-ups', '/business-solutions#business-start-ups'],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="logo" href="/">WAAFINS</Link>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}>
          Menu
        </button>
        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li className="dropdown">
              <Link href="/business-solutions">Business Solutions</Link>
              <div className="dropdown-content" aria-label="Business solutions list">
                {serviceLinks.map(([label, href]) => (
                  <Link key={href} href={href}>{label}</Link>
                ))}
              </div>
            </li>
            <li><Link href="/glossary">A-Z Glossary</Link></li>
            <li><Link href="/resources">Resources</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
