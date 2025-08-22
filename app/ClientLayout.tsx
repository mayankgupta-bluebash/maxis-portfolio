'use client';

import { usePathname } from 'next/navigation';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Box } from '@mui/material';
import { ModalFlowProvider } from './components/modal/ModalFlowProvider';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isTenantRoute = pathname === '/validate-tenant';

  return (
    <ModalFlowProvider>
      {!isTenantRoute && <Header />}
      <Box pt={!isTenantRoute ? '72px' : 0}>{children}</Box>
      {!isTenantRoute && <Footer />}
    </ModalFlowProvider>
  );
}
