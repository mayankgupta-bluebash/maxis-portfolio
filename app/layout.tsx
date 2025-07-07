import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Box } from '@mui/material';
import { ModalFlowProvider } from './components/modal/ModalFlowProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Maxis - Portfolio',
  description: 'Maxis IT Solutions Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.variable} style={{ background: '#080411', minHeight: '100vh' }}>
        <ModalFlowProvider>
          <Header />
          <Box pt='72px'>{children}</Box>
          <Footer />
        </ModalFlowProvider>
      </body>
    </html>
  );
}
