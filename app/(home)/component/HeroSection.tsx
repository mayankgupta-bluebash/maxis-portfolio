'use client';
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import { useModalFlow } from '../../components/modal/ModalFlowProvider';
import HeroBrainImage from '../../assets/images/ai_brain.webp';
import Image from 'next/image';
const GradientText = styled(Typography)({
  background: 'linear-gradient(to right, white, #9573DE, white)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
});

const HeroSection: React.FC = () => {
  const { open } = useModalFlow();
  const heroHeadingRef = useRef<HTMLDivElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const heroBtnRef = useRef<HTMLButtonElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(heroHeadingRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
    gsap.fromTo(heroDescRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power3.out' });
    gsap.fromTo(heroBtnRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, delay: 1, ease: 'back.out(1.7)' });
    gsap.fromTo(heroImgRef.current, { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.7, ease: 'power3.out' });
  }, []);

  return (
    <Box
      component='section'
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '120px',
      }}>
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: '40px', md: '60px' },
          px: { xs: 4, md: 10 },
          pt: { xs: '64px', md: '96px' },
        }}>
        <Grid
          container
          spacing={5}
          alignItems='center'
          justifyContent='center'>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Badge */}
              <Box
                width='fit-content'
                display='inline-flex'
                borderRadius='99px'
                border='1px solid #DAD9DB'
                bgcolor='rgba(37,26,73,0.5)'
                px={2.5}
                py={0.6}
                mb={2}>
                <GradientText variant='body2'>Meet the Future: AI Agents</GradientText>
              </Box>
              {/* Hero Heading */}
              <Box
                sx={{ mb: 5 }}
                ref={heroHeadingRef}>
                <Typography
                  variant='h1'
                  sx={{
                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '4.75rem' },
                    fontWeight: 500,
                    lineHeight: { xs: '2.8rem', sm: '3.2rem', md: '5.5rem' },
                    color: '#F9FAFC',
                  }}>
                  Build the Next
                </Typography>
                <GradientText
                  variant='h1'
                  sx={{
                    fontSize: { xs: '2.2rem', sm: '2.8rem', md: '4.75rem' },
                    fontWeight: 500,
                    lineHeight: { xs: '2.8rem', sm: '3.2rem', md: '5.5rem' },
                  }}>
                  Generation of AI Agents
                </GradientText>
              </Box>
              {/* Description */}
              <Typography
                ref={heroDescRef}
                variant='body1'
                sx={{
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                  lineHeight: { xs: '1.5rem', sm: '1.7rem', md: '1.9rem' },
                  color: '#DEDEDE',
                  pb: 4,
                }}>
                Empower your business with intelligent automation. Create, deploy, and manage AI agents with ease.
              </Typography>
              {/* CTA Button */}
              <Button
                ref={heroBtnRef}
                variant='outlined'
                sx={{
                  maxWidth: { xs: '100%', sm: '80%', md: '620px' },
                  borderRadius: '12px',
                  borderColor: '#7352D5',
                  backgroundColor: '#080411',
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 1, sm: 1.5, md: 2 },
                  color: 'white',
                  alignSelf: { xs: 'stretch', sm: 'flex-start' },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                }}
                onClick={() => open('chooseRole')}>
                Get started
              </Button>
            </Box>
          </Grid>
          {/* Hero Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              ref={heroImgRef}
              sx={{
                position: 'relative',
                height: { xs: '220px', sm: '300px', md: '512px' },
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: { xs: 4, md: 0 },
              }}>
              <Image
                src={HeroBrainImage}
                alt='AI Brain Visualization'
                height={448}
                width={543}
                style={{ objectFit: 'cover', width: '100%', height: '108%' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
