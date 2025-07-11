'use client';
import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  height: '92%',
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
  opacity:0.3,
  zIndex: 0,
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
      if (!el) return;
      // On small screens, animate only opacity and y; on md+ animate x and opacity
      const isSmallScreen = window.matchMedia('(max-width: 900px)').matches;
      const fromVars = isSmallScreen
        ? { y: 40, opacity: 0 }
        : { x: i % 2 === 0 ? -60 : 60, opacity: 0 };
      const toVars = isSmallScreen
        ? { y: 0, opacity: 1, duration: 0.8, delay: 0.2 + i * 0.2, ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        : { x: 0, opacity: 1, duration: 0.8, delay: 0.2 + i * 0.2, ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          };
      gsap.fromTo(el, fromVars, toVars);
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

        // Calculate the full height from start to end
        const startY = startRect.top + window.scrollY - containerRect.top - window.scrollY;
        const endY = endRect.bottom + window.scrollY - containerRect.top - window.scrollY;
        // Add extra padding to ensure the line reaches the bottom of the 4th step
        const fullHeight = endY - startY + 100;

        if (progressEl.style) {
          progressEl.style.height = `${fullHeight}px`;
        }
      };

      // Initial update
      updateProgressLine();

      // Update on resize for responsiveness
      window.addEventListener('resize', updateProgressLine);

      // GSAP scroll animation with better trigger points
      gsap.fromTo(
        timelineProgressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top',
          ease: 'none',
          scrollTrigger: {
            trigger: howItWorksStepsRef.current[0],
            start: 'top 80%',
            endTrigger: howItWorksStepsRef.current[3],
            end: 'bottom 0%',
            scrub: 1,
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
      sx={{ pt: { xs: 4, md: 8 }, px: { xs: 1, sm: 2, md: 0 } }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, md: 6 },
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 2, md: 4 },
            textAlign: 'center',
          }}>
          <Box
            sx={{
              display: 'flex',
              borderRadius: '99px',
              border: '1px solid #DAD9DB',
              backgroundColor: 'rgba(37,26,73,0.5)',
              px: { xs: 1.5, md: 2.5 },
              py: 0.6,
              mb: { xs: 2, md: 0 },
            }}>
            <Typography
              variant='body2'
              sx={{ color: 'white', fontSize: { xs: '0.95rem', md: '1rem' } }}>
              How it works
            </Typography>
          </Box>
          <Typography
            ref={howItWorksTitleRef}
            variant='h2'
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              fontWeight: 500,
              color: 'white',
            }}>
            Bring Your Ideas to Life— No Code Required
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 4, md: '96px' },
            backgroundColor: '#080411',
            px: { xs: 1, sm: 2, md: '128px' },
            py: { xs: 4, md: 8 },
            borderRadius: { xs: 2, md: 4 },
          }}>
          <TimelineLine ref={timelineLineRef} sx={{ display: { xs: 'none', md: 'block' } }} />
          <TimelineProgressLine
            ref={timelineProgressRef}
            style={{ height: '0px' }}
            sx={{
              display: { xs: 'none', md: 'block' },
              opacity: { xs: 0.3, md: 1 },
              zIndex: { xs: 0, md: 1 },
            }}
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
              gap: { xs: 2, md: 4 },
              pl: { xs: 0, md: '507px' },
              mb: { xs: 2, md: 0 },
            }}>
            <TimelineDot sx={{ top: { xs: 0, md: '8px' }, display: { xs: 'none', md: 'block' } }} />
            <Box sx={{ width: { xs: '100%', md: '505px' } }}>
              <Typography
                variant='h4'
                sx={{ color: '#7352D5', mb: 1, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                01
              </Typography>
              <Typography
                variant='h3'
                sx={{ color: 'white', mb: 2, fontSize: { xs: '1.3rem', md: '2rem' } }}>
                Design Your Agent
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: '#DEDEDE', fontSize: { xs: '1rem', md: '1.15rem' } }}>
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
              gap: { xs: 2, md: 4 },
              pr: { xs: 0, md: '497px' },
              textAlign: { xs: 'left', md: 'right' },
              mb: { xs: 2, md: 0 },
              backdropFilter: { xs: 'blur(6px)', md: 'none' },
            }}>
            <Box
              sx={{
                width: { xs: '100%', md: '507px' },
                order: { xs: 2, md: 1 },
              }}>
              <Typography
                variant='h4'
                sx={{ color: '#7352D5', mb: 1, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                02
              </Typography>
              <Typography
                variant='h3'
                sx={{ color: 'white', mb: 2, fontSize: { xs: '1.3rem', md: '2rem' } }}>
                Connect Your Knowledge
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: '#DEDEDE', fontSize: { xs: '1rem', md: '1.15rem' } }}>
                Integrate internal documents, URLs, and APIs. Let your agent learn what matters most.
              </Typography>
            </Box>
            <TimelineDot
              sx={{
                order: { xs: 1, md: 2 },
                left: { xs: '50%', md: '50%' },
                position: { xs: 'absolute', md: 'absolute' },
                top: { xs: 0, md: '8px' },
                transform: { xs: 'translateX(-50%)', md: 'translateX(-50%)' },
                display: { xs: 'none', md: 'block' },
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
              gap: { xs: 2, md: 4 },
              pl: { xs: 0, md: '507px' },
              mb: { xs: 2, md: 0 },
            }}>
            <TimelineDot sx={{ top: { xs: 0, md: '8px' }, display: { xs: 'none', md: 'block' } }} />
            <Box sx={{ width: { xs: '100%', md: '490px' } }}>
              <Typography
                variant='h4'
                sx={{ color: '#7352D5', mb: 1, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                03
              </Typography>
              <Typography
                variant='h3'
                sx={{ color: 'white', mb: 2, fontSize: { xs: '1.3rem', md: '2rem' } }}>
                Test and Fine-Tune
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: '#DEDEDE', fontSize: { xs: '1rem', md: '1.15rem' } }}>
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
              gap: { xs: 2, md: 4 },
              pr: { xs: 0, md: '507px' },
              textAlign: { xs: 'left', md: 'right' },
              mb: { xs: 2, md: 0 },
              backdropFilter: { xs: 'blur(6px)', md: 'none' },
            }}>
            <Box
              sx={{
                width: { xs: '100%', md: '471px' },
                order: { xs: 2, md: 1 },
              }}>
              <Typography
                variant='h4'
                sx={{ color: '#7352D5', mb: 1, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                04
              </Typography>
              <Typography
                variant='h3'
                sx={{ color: 'white', mb: 2, fontSize: { xs: '1.3rem', md: '2rem' } }}>
                Publish Agentic Assets
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: '#DEDEDE', fontSize: { xs: '1rem', md: '1.15rem' } }}>
                Verify and Publish agentic assets to Marketplace
              </Typography>
            </Box>
            <TimelineDot
              sx={{
                order: { xs: 1, md: 2 },
                left: { xs: '50%', md: '50%' },
                position: { xs: 'absolute', md: 'absolute' },
                top: { xs: 0, md: '8px' },
                transform: { xs: 'translateX(-50%)', md: 'translateX(-50%)' },
                display: { xs: 'none', md: 'block' },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
