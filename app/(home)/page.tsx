import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './component/HeroSection';
import FeaturesSection from './component/FeaturesSection';
import HowItWorkSection from './component/HowItWorkSection';
import WhyChooseUsSection from './component/WhyChooseUsSection';
import BuilderConsumerSection from './component/BuilderConsumerSection';

export default function Home() {
  return (
    <Box component='main' sx={{ background: '#080411', minHeight: '100vh' }}>
      <HeroSection />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          px: { xs: 4, md: 10 },
        }}>
        <FeaturesSection />
        <HowItWorkSection />
        <BuilderConsumerSection />
        <WhyChooseUsSection />
      </Box>
    </Box>
  );
}
