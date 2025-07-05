'use client';
import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlackHole from '../../assets/images/blackhole.png';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const TimelineDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  top: theme.spacing(1),
  height: theme.spacing(1.5),
  width: theme.spacing(1.5),
  borderRadius: '50%',
  backgroundColor: '#7352D5',
  transform: 'translateX(-50%)',
}));

const TimelineLine = styled(Box)(() => ({
  position: 'absolute',
  left: '50%',
  top: 0,
  height: '800px',
  width: '1px',
  borderLeft: '1px dashed rgba(255,255,255,0.2)',
  transform: 'translateX(-1px)',
}));

// New: solid purple progress line
const TimelineProgressLine = styled(Box)(() => ({
  position: 'absolute',
  left: '50%',
  top: 0,
  width: '1px',
  backgroundColor: '#7352D5',
  zIndex: 1,
  transform: 'translateX(-1px)',
  pointerEvents: 'none',
}));

export default function HowItWorkSection() {
  const howItWorksTitleRef = useRef(null);
  const howItWorksImgRef = useRef(null);
  const howItWorksStepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineLineRef = useRef(null);
  const timelineProgressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      howItWorksTitleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: howItWorksTitleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      howItWorksImgRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: howItWorksImgRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    howItWorksStepsRef.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { x: i % 2 === 0 ? -60 : 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2 + i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
    if (timelineProgressRef.current && howItWorksStepsRef.current[0] && howItWorksStepsRef.current[3]) {
      const updateProgressLine = () => {
        const startEl = howItWorksStepsRef.current[0];
        const endEl = howItWorksStepsRef.current[3];
        const progressEl = timelineProgressRef.current;
        if (!startEl || !endEl || !progressEl) return;
        const startRect = startEl.getBoundingClientRect();
        const endRect = endEl.getBoundingClientRect();
        const containerRect = progressEl.parentElement?.getBoundingClientRect();
        if (!containerRect) return;
        // Calculate the distance between the first and last step
        const startY = startRect.top + window.scrollY - containerRect.top - window.scrollY;
        const endY = endRect.top + window.scrollY - containerRect.top - window.scrollY;
        const fullHeight = endY - startY + endRect.height / 2;
        if (progressEl.style) progressEl.style.height = `${fullHeight}px`;
      };
      // Initial update
      updateProgressLine();
      // Update on resize for responsiveness
      window.addEventListener('resize', updateProgressLine);
      // GSAP scroll animation
      gsap.fromTo(
        timelineProgressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top',
          ease: 'none',
          scrollTrigger: {
            trigger: howItWorksStepsRef.current[0],
            start: 'top center',
            endTrigger: howItWorksStepsRef.current[3],
            end: 'bottom center',
            scrub: true,
            onUpdate: () => {
              updateProgressLine();
            },
          },
        }
      );
      // Cleanup
      return () => {
        window.removeEventListener('resize', updateProgressLine);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);
  return (
    <Container
      maxWidth='lg'
      sx={{ pt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            textAlign: 'center',
          }}>
          <Box
            sx={{
              display: 'flex',
              borderRadius: '99px',
              border: '1px solid #DAD9DB',
              backgroundColor: 'rgba(37,26,73,0.5)',
              px: 2.5,
              py: 0.6,
            }}>
            <Typography
              variant='body2'
              sx={{ color: 'white' }}>
              How it works
            </Typography>
          </Box>
          <Typography
            ref={howItWorksTitleRef}
            variant='h2'
            sx={{
              fontSize: { xs: '40px', md: '56px' },
              fontWeight: 500,
              color: 'white',
            }}>
            Bring Your Ideas to Life— No Code Required
          </Typography>

          <Box
            ref={howItWorksImgRef}
            sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Image
              src={BlackHole}
              alt='Logo'
              width={116}
              height={40}
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: '48px', md: '96px' },
            backgroundColor: '#080411',
            px: { xs: 4, md: '128px' },
            py: 8,
          }}>
          <TimelineLine ref={timelineLineRef} />
          <TimelineProgressLine
            ref={timelineProgressRef}
            style={{ height: '80px' }}
          />
          {/* Step 1 */}
          <Box
            ref={(el) => {
              howItWorksStepsRef.current[0] = el as HTMLDivElement | null;
            }}
            sx={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 4,
              pl: { xs: 0, md: '507px' },
            }}>
            <TimelineDot />
            <Box sx={{ width: { xs: '100%', md: '505px' } }}>
              <Typography
                variant='h4'
                sx={{ color: '#7352D5', mb: 1 }}>
                01
              </Typography>
              <Typography
                variant='h3'
                sx={{ color: 'white', mb: 2 }}>
                Design Your Agent
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: '#DEDEDE' }}>
                Use our intuitive visual builder to craft custom workflows, prompts, and personalities.
              </Typography>
            </Box>
          </Box>
          {/* Step 2 */}
          <Box
            ref={(el) => {
              howItWorksStepsRef.current[1] = el as HTMLDivElement | null;
            }}
            sx={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 4,
              pr: { xs: 0, md: '497px' },
              textAlign: { xs: 'left', md: 'right' },
            }}>
            <Box
              sx={{
                width: { xs: '100%', md: '507px' },
                order: { xs: 2, md: 1 },
              }}>
              <Typography
                variant='h4'
                sx={{ color: '#7352D5', mb: 1 }}>
                02
              </Typography>
              <Typography
                variant='h3'
                sx={{ color: 'white', mb: 2 }}>
                Connect Your Knowledge
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: '#DEDEDE' }}>
                Integrate internal documents, URLs, and APIs. Let your agent learn what matters most.
              </Typography>
            </Box>
            <TimelineDot
              sx={{
                order: { xs: 1, md: 2 },
                left: { xs: 0, md: '50%' },
                position: { xs: 'relative', md: 'absolute' },
              }}
            />
          </Box>
          {/* Step 3 */}
          <Box
            ref={(el) => {
              howItWorksStepsRef.current[2] = el as HTMLDivElement | null;
            }}
            sx={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 4,
              pl: { xs: 0, md: '507px' },
            }}>
            <TimelineDot />
            <Box sx={{ width: { xs: '100%', md: '490px' } }}>
              <Typography
                variant='h4'
                sx={{ color: '#7352D5', mb: 1 }}>
                03
              </Typography>
              <Typography
                variant='h3'
                sx={{ color: 'white', mb: 2 }}>
                Test and Fine-Tune
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: '#DEDEDE' }}>
                Run real-time simulations and optimize your logic with our agent debugger.
              </Typography>
            </Box>
          </Box>
          {/* Step 4 */}
          <Box
            ref={(el) => {
              howItWorksStepsRef.current[3] = el as HTMLDivElement | null;
            }}
            sx={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 4,
              pr: { xs: 0, md: '507px' },
              textAlign: { xs: 'left', md: 'right' },
            }}>
            <Box
              sx={{
                width: { xs: '100%', md: '471px' },
                order: { xs: 2, md: 1 },
              }}>
              <Typography
                variant='h4'
                sx={{ color: '#7352D5', mb: 1 }}>
                04
              </Typography>
              <Typography
                variant='h3'
                sx={{ color: 'white', mb: 2 }}>
                Publish and Deploy Anywhere
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: '#DEDEDE' }}>
                With one click, publish your agent to the Maxis Marketplace or integrate it into your website, chat app, or internal system.
              </Typography>
            </Box>
            <TimelineDot
              sx={{
                order: { xs: 1, md: 2 },
                left: { xs: 0, md: '50%' },
                position: { xs: 'relative', md: 'absolute' },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
