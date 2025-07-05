import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'maxis',
  description: 'maxis',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
