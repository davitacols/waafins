import './globals.css';
import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'WAAFINS',
  description: 'Small businesses. Our business.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="container">{children}</main>
        <footer>WAAFINS | Small businesses. Our business.</footer>
      </body>
    </html>
  );
}
