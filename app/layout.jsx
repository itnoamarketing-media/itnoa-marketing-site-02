import './globals.css';

export const metadata = {
  title: 'ITNOA Marketing | California Marketing Agency',
  description: 'Premium marketing agency for high-value local businesses that need attention, positioning, content, and growth.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
