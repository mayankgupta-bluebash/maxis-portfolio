'use client';
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import MaxisCore from '../../assets/images/flow_diagram.webp';
import UniversalCircleBg from '../../assets/images/universal.webp';
import './WhyChooseUsSection.css';

gsap.registerPlugin(ScrollTrigger);

const GradientText = styled(Typography)(() => ({
  background: 'linear-gradient(to right, white, #9573DE, white)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}));

export default function WhyChooseUsSection() {
  const router = useRouter();
  const whyChooseTitleRef = useRef(null);
  const whyChooseDiffRef = useRef(null);
  const floatingCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      whyChooseTitleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: whyChooseTitleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      whyChooseDiffRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: whyChooseDiffRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    floatingCardsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.8 + i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <Container
      maxWidth='xl'
      sx={{ my: '120px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Box
          ref={whyChooseTitleRef}
          sx={{ maxWidth: '896px', mb: 8 }}>
          <Box
            sx={{
              display: 'inline-flex',
              borderRadius: '99px',
              border: '1px solid #DAD9DB',
              backgroundColor: 'rgba(37,26,73,0.5)',
              px: 2.5,
              py: 0.6,
              mb: 2,
            }}>
            <Typography
              variant='body2'
              sx={{ color: 'white' }}>
              Why Us?
            </Typography>
          </Box>
          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 500,
              mb: 2,
            }}>
            How Maxis Ai delivers <GradientText sx={{ display: 'inline', fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' } }}>growth</GradientText>
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: '#DEDEDE',
              mb: 4,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            }}>
            Our approach reimagines medical innovation by combining the power of AI-driven automation with deep domain knowledge. Maxis Ai enables researchers to rapidly build
            intelligent agents that extract insights, streamline discovery workflows, and reduce time-to-market—bridging the speed of digital intelligence with the precision
            required in biomedical research.
          </Typography>
          <Button
            variant='contained'
            sx={{
              borderRadius: '12px',
              backgroundColor: '#694BC2',
              borderColor: '#7352D5',
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 1, sm: 1.5, md: 2 },
              color: 'white',
              textTransform: 'none',
              fontWeight: 'medium',
            }}>
            Learn more
          </Button>
        </Box>
        <Image
          src={MaxisCore}
          alt='Maxis Ai Core image'
          width={800}
          height={600}
          className='hideOnMobile'
          style={{
            width: '100%',
            height: 'auto',
            marginBottom: '4px',
            imageRendering: 'crisp-edges',
            objectFit: 'contain',
          }}
          priority
        />
        <Box
          ref={whyChooseDiffRef}
          sx={{ maxWidth: '864px', mb: 8 }}>
          <Box
            sx={{
              display: 'inline-flex',
              borderRadius: '99px',
              border: '1px solid #DAD9DB',
              backgroundColor: 'rgba(37,26,73,0.5)',
              px: 2.5,
              py: 0.6,
              mb: 2,
            }}>
            <Typography
              variant='body2'
              sx={{ color: 'white' }}>
              Why Choose Maxis?
            </Typography>
          </Box>
          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 500,
              mb: 2,
            }}>
            Maxis Ai is Different—Here&apos;s How
          </Typography>
          <Typography
            variant='body1'
            sx={{
              color: '#DEDEDE',
              mb: 4,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            }}>
            We&apos;re not just another AI platform—we&apos;re purpose-built to accelerate accelerate clinical research breakthroughs. From ingesting complex research data to
            deploying intelligent agents in real-world labs, Maxis Ai helps you move faster, think deeper, and innovate smarter.
          </Typography>
          <Button
            variant='contained'
            onClick={() => router.push('/about-us')}
            sx={{
              borderRadius: '12px',
              backgroundColor: '#694BC2',
              borderColor: '#7352D5',
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 1, sm: 1.5, md: 2 },
              color: 'white',
              textTransform: 'none',
              fontWeight: 'medium',
            }}>
            About us
          </Button>
        </Box>
        <Box sx={{ position: 'relative', zIndex: 10, height: { xs: 'auto', md: '240px' }, width: '100%', mb: 8 }}>
          <Paper
            ref={(el) => {
              floatingCardsRef.current[0] = el as HTMLDivElement | null;
            }}
            sx={{
              position: { xs: 'static', md: 'absolute' },
              left: { xs: 0, md: '122px' },
              top: { xs: 0, md: '-30px' },
              height: { xs: 'auto', md: '142px' },
              width: { xs: '100%', md: '280px' },
              borderRadius: '16px',
              border: '1px solid rgba(141,49,245,0.2)',
              backgroundColor: 'rgba(37,26,73,0.5)',
              p: 3,
              backdropFilter: 'blur(5px)',
              mb: { xs: 2, md: 0 },
            }}>
            <GradientText
              variant='h4'
              sx={{ textAlign: 'center', mb: 1 }}>
              Secure
            </GradientText>
            <Typography
              variant='body2'
              sx={{
                textAlign: 'center',
                color: '#F9FAFC',
              }}>
              Enterprise-grade security with SOC2 compliance and advanced encryption
            </Typography>
          </Paper>
          <Paper
            ref={(el) => {
              floatingCardsRef.current[1] = el as HTMLDivElement | null;
            }}
            sx={{
              position: { xs: 'static', md: 'absolute' },
              left: { xs: 0, md: '500px' },
              top: { xs: '160px', md: '160px' },
              height: { xs: 'auto', md: '142px' },
              width: { xs: '100%', md: '280px' },
              borderRadius: '16px',
              border: '1px solid rgba(141,49,245,0.2)',
              backgroundColor: 'rgba(37,26,73,0.5)',
              p: 3,
              backdropFilter: 'blur(5px)',
              mb: { xs: 2, md: 0 },
            }}>
            <GradientText
              variant='h4'
              sx={{ textAlign: 'center', mb: 1 }}>
              Scalable
            </GradientText>
            <Typography
              variant='body2'
              sx={{
                textAlign: 'center',
                color: '#F9FAFC',
              }}>
              From individual projects to enterprise deployments with unlimited growth
            </Typography>
          </Paper>
          <Paper
            ref={(el) => {
              floatingCardsRef.current[2] = el as HTMLDivElement | null;
            }}
            sx={{
              position: { xs: 'static', md: 'absolute' },
              left: { xs: 0, md: '884px' },
              top: { xs: '320px', md: '-18px' },
              height: { xs: 'auto', md: '142px' },
              width: { xs: '100%', md: '280px' },
              borderRadius: '16px',
              border: '1px solid rgba(141,49,245,0.2)',
              backgroundColor: 'rgba(37,26,73,0.5)',
              p: 3,
              backdropFilter: 'blur(5px)',
            }}>
            <GradientText
              variant='h4'
              sx={{ textAlign: 'center', mb: 1 }}>
              Simple
            </GradientText>
            <Typography
              variant='body2'
              sx={{
                textAlign: 'center',
                color: '#F9FAFC',
              }}>
              Intuitive interface that anyone can use without technical expertise
            </Typography>
          </Paper>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 5, // or any number as needed
              display: { xs: 'none', md: 'block' },
            }}>
            <Image
              src={UniversalCircleBg}
              alt='bg-image'
              className='hideOnMobile'
              style={{ zIndex: '-1', height: 900, width: '70vw' }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
