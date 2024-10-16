import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Block Future',
  description:
    'BlockFuture is a next-generation cryptocurrency platform offering real-time data on top coins, exchanges, and personalized portfolios. Harnessing AI insights and live market data, it provides advanced analytics, candlestick charts, and seamless wallet integration for a complete crypto experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
