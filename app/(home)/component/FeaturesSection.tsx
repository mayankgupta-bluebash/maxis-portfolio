/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Box, Container, Paper, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import Grid from '@mui/material/Grid';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import StartIcon from '../../assets/images/star.webp';
import CircleIcon from '../../assets/images/circle.webp';
import FilterIcon from '../../assets/images/filter_icon.webp';
import CrossedCircleIcon from '../../assets/images/crossed_circle.webp';
import TriangleIcon from '../../assets/images/triangle.webp';

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = styled(Paper)(({ theme }) => ({
  borderRadius: '24px',
  border: '1px solid rgba(141,49,245,0.2)',
  background: 'rgba(37,26,73,0.5)',
  padding: theme.spacing(4),
  backdropFilter: 'blur(5px)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '24px',
  border: '1px solid rgba(141,49,245,0.2)',
  padding: theme.spacing(1),
  width: '56px',
  height: '56px',
}));

export default function FeaturesSection() {
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    featuresRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <Container maxWidth='xl'>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          textAlign: 'center',
          mb: 8,
        }}>
        <Box
          sx={{
            display: 'inline-flex',
            borderRadius: '99px',
            border: '1px solid #DAD9DB',
            backgroundColor: 'rgba(37,26,73,0.5)',
            px: 2,
            py: 0.6,
            mb: 4,
          }}>
          <Typography
            variant='body2'
            sx={{ color: 'white' }}>
            Features
          </Typography>
        </Box>

        <Box
          my={3}
          ml={4}
          sx={{ display: 'flex', gap: 2 }}>
          <Box width={100} height={100} display="flex" alignItems="center" justifyContent="center">
            <Image
              src={StartIcon}
              height={80}
              width={80}
              alt='Features-Icons'
              objectFit='contain'
            />
          </Box>
          <Box width={100} height={100} display="flex" alignItems="center" justifyContent="center">
            <Image
              src={CircleIcon}
              height={90}
              width={90}
              alt='Features-Icons'
              objectFit='contain'
            />
          </Box>
          <Box width={100} height={100} display="flex" alignItems="center" justifyContent="center">
            <Image
              src={FilterIcon}
              height={100}
              width={100}
              alt='Features-Icons'
              objectFit='contain'
            />
          </Box>
          <Box width={100} height={100} display="flex" alignItems="center" justifyContent="center">
            <Image
              src={CrossedCircleIcon}
              height={90}
              width={90}
              alt='Features-Icons'
              objectFit='contain'
            />
          </Box>
          <Box width={100} height={100} display="flex" alignItems="center" justifyContent="center">
            <Image
              src={TriangleIcon}
              height={80}
              width={80}
              alt='Features-Icons'
              objectFit='contain'
            />
          </Box>
        </Box>

        <Typography
          variant='h2'
          sx={{
            fontSize: { xs: '32px', md: '40px' },
            fontWeight: 500,
            color: '#ffffff',
            mb: 4,
          }}>
          Build Powerful AI Agents—Your Way, Without the Complexity
        </Typography>

        <Typography
          variant='body1'
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            lineHeight: { xs: '24px', md: '30px' },
            color: '#DEDEDE',
            maxWidth: '800px',
            mx: 'auto',
          }}>
          Build, launch, and scale AI agents using essential features made for creators.
        </Typography>
      </Box>

      <Container
        maxWidth='xl'
        sx={{ width: '100%' }}>
        <Grid
          container
          spacing={2}>
          <Grid size={{ md: 6 }}>
            <FeatureCard ref={(el: any) => (featuresRef.current[0] = el)}>
              <IconWrapper>
                <svg
                  width='41'
                  height='41'
                  viewBox='0 0 41 41'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M37.6551 40.074L10.9551 13.374L5.30505 19.024L15.1551 28.874L13.0051 31.024L1.00505 19.024L8.80505 11.224L0.0550537 2.47397L2.20505 0.323975L39.8051 37.924L37.6551 40.074ZM33.1051 26.924L30.9551 24.774L36.7051 19.024L26.8551 9.17397L29.0051 7.02397L41.0051 19.024L33.1051 26.924Z'
                    fill='url(#paint0_linear_20477_25838)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_20477_25838'
                      x1='5.25501'
                      y1='0.323975'
                      x2='34.6478'
                      y2='40.9121'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#8E76FF' />
                      <stop
                        offset='1'
                        stopColor='#C1B0F1'
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </IconWrapper>
              <Typography
                variant='h3'
                sx={{
                  fontSize: '24px',
                  fontWeight: 500,
                  color: 'white',
                }}>
                No-Code Agent Builder
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: '#F9FAFC' }}>
                Visually design AI agents with our intuitive drag-and-drop interface.
              </Typography>
            </FeatureCard>
          </Grid>

          <Grid size={{ md: 6 }}>
            <FeatureCard
              ref={(el) => {
                featuresRef.current[1] = el;
              }}>
              <IconWrapper>
                <svg
                  width='39'
                  height='41'
                  viewBox='0 0 39 41'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M9.45501 24.674C10.4217 25.6407 11.605 26.124 13.005 26.124C14.405 26.124 15.5883 25.6407 16.555 24.674L24.555 16.674C25.5217 15.7074 26.005 14.524 26.005 13.124C26.005 11.724 25.5217 10.5407 24.555 9.57402C23.5883 8.60736 22.405 8.12402 21.005 8.12402C19.605 8.12402 18.4217 8.60736 17.455 9.57402C16.2217 9.14069 15.005 9.04069 13.805 9.27402C12.605 9.50736 11.5883 10.0407 10.755 10.874C9.92167 11.7074 9.38834 12.724 9.15501 13.924C8.92167 15.124 9.02167 16.3407 9.45501 17.574C8.48834 18.5407 8.00501 19.724 8.00501 21.124C8.00501 22.524 8.48834 23.7074 9.45501 24.674ZM6.00501 40.124V31.524C4.10501 29.7907 2.63001 27.7657 1.58001 25.449C0.530005 23.1324 0.00500488 20.6907 0.00500488 18.124C0.00500488 13.124 1.75501 8.87402 5.25501 5.37402C8.75501 1.87402 13.005 0.124023 18.005 0.124023C22.1717 0.124023 25.8633 1.34902 29.08 3.79902C32.2967 6.24902 34.3883 9.44069 35.355 13.374L38.105 24.274C38.2383 24.7407 38.155 25.1657 37.855 25.549C37.555 25.9324 37.155 26.124 36.655 26.124H32.005V33.124C32.005 33.949 31.7113 34.6552 31.124 35.2425C30.5363 35.8302 29.83 36.124 29.005 36.124H24.005V40.124H21.005V33.124H29.005V23.124H34.705L32.455 14.124C31.655 10.8907 29.905 8.24902 27.205 6.19902C24.505 4.14902 21.4383 3.12402 18.005 3.12402C13.8383 3.12402 10.2967 4.56569 7.38001 7.44902C4.46334 10.3324 3.00501 13.8497 3.00501 18.001C3.00501 20.1484 3.44367 22.1882 4.32101 24.1205C5.19867 26.0532 6.44334 27.771 8.05501 29.274L9.00501 30.174V40.124H6.00501Z'
                    fill='url(#paint0_linear_20477_25849)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_20477_25849'
                      x1='4.85088'
                      y1='0.124024'
                      x2='35.0639'
                      y2='38.7609'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#8E76FF' />
                      <stop
                        offset='1'
                        stopColor='#C1B0F1'
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </IconWrapper>
              <Typography
                variant='h3'
                sx={{
                  fontSize: '24px',
                  fontWeight: 500,
                  color: 'white',
                }}>
                Smart Automation
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: '#F9FAFC' }}>
                Automate complex tasks and workflows with intelligent decision-making.
              </Typography>
            </FeatureCard>
          </Grid>

          <Grid size={{ md: 4, xs: 6 }}>
            <FeatureCard ref={(el: any) => (featuresRef.current[2] = el)}>
              <IconWrapper>
                <svg
                  width='39'
                  height='40'
                  viewBox='0 0 39 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M11.805 39.7141H3.00501C2.20501 39.7141 1.50501 39.4141 0.905005 38.8141C0.305005 38.2141 0.00500488 37.5141 0.00500488 36.7141V27.9141C1.47167 27.7474 2.73001 27.1724 3.78001 26.1891C4.83001 25.2058 5.35501 23.9974 5.35501 22.5641C5.35501 21.1308 4.83001 19.9224 3.78001 18.9391C2.73001 17.9558 1.47167 17.3808 0.00500488 17.2141V8.41411C0.00500488 7.61411 0.305005 6.91411 0.905005 6.31411C1.50501 5.71411 2.20501 5.41411 3.00501 5.41411H11.855C12.2217 4.08078 12.88 2.96411 13.83 2.06411C14.78 1.16411 15.9217 0.714111 17.255 0.714111C18.5883 0.714111 19.73 1.16411 20.68 2.06411C21.63 2.96411 22.2883 4.08078 22.655 5.41411H31.305C32.105 5.41411 32.805 5.71411 33.405 6.31411C34.005 6.91411 34.305 7.61411 34.305 8.41411V17.0641C35.6383 17.4308 36.73 18.1224 37.58 19.1391C38.43 20.1558 38.855 21.3308 38.855 22.6641C38.855 23.9974 38.43 25.1141 37.58 26.0141C36.73 26.9141 35.6383 27.5474 34.305 27.9141V36.7141C34.305 37.5141 34.005 38.2141 33.405 38.8141C32.805 39.4141 32.105 39.7141 31.305 39.7141H22.505C22.3383 38.1141 21.7467 36.8224 20.73 35.8391C19.7133 34.8558 18.5217 34.3641 17.155 34.3641C15.7883 34.3641 14.5967 34.8558 13.58 35.8391C12.5633 36.8224 11.9717 38.1141 11.805 39.7141ZM3.00501 36.7141H9.50501C10.3383 34.6808 11.5032 33.2808 12.9995 32.5141C14.4958 31.7474 15.8792 31.3641 17.1495 31.3641C18.4198 31.3641 19.805 31.7474 21.305 32.5141C22.805 33.2808 23.9717 34.6808 24.805 36.7141H31.305V24.9641H33.555C34.2217 24.9641 34.7717 24.7474 35.205 24.3141C35.6383 23.8808 35.855 23.3308 35.855 22.6641C35.855 21.9974 35.6383 21.4474 35.205 21.0141C34.7717 20.5808 34.2217 20.3641 33.555 20.3641H31.305V8.41411H19.555V6.01411C19.555 5.34745 19.3383 4.79744 18.905 4.36411C18.4717 3.93078 17.9217 3.71411 17.255 3.71411C16.5883 3.71411 16.0383 3.93078 15.605 4.36411C15.1717 4.79744 14.955 5.34745 14.955 6.01411V8.41411H3.00501V14.9141C4.61001 15.5081 5.903 16.5029 6.884 17.8986C7.86467 19.2939 8.35501 20.8528 8.35501 22.5751C8.35501 24.2678 7.86334 25.8141 6.88001 27.2141C5.89667 28.6141 4.60501 29.6141 3.00501 30.2141V36.7141Z'
                    fill='url(#paint0_linear_20477_25870)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_20477_25870'
                      x1='4.9383'
                      y1='0.714112'
                      x2='34.0654'
                      y2='39.6065'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#8E76FF' />
                      <stop
                        offset='1'
                        stopColor='#C1B0F1'
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </IconWrapper>
              <Typography
                variant='h3'
                sx={{
                  fontSize: '24px',
                  fontWeight: 500,
                  color: 'white',
                }}>
                Pre-built Components
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: '#F9FAFC' }}>
                Accelerate development with a library of pre-built actions, triggers, and integrations.
              </Typography>
            </FeatureCard>
          </Grid>

          <Grid size={{ md: 4, xs: 6 }}>
            <FeatureCard ref={(el: any) => (featuresRef.current[3] = el)}>
              <IconWrapper>
                <svg
                  width='41'
                  height='41'
                  viewBox='0 0 41 41'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M19.215 35.0641H21.965V32.4641C23.9984 32.2308 25.5817 31.6058 26.715 30.5891C27.8484 29.5724 28.415 28.2141 28.415 26.5141C28.415 24.8141 27.9317 23.4308 26.965 22.3641C25.9984 21.2974 24.365 20.2808 22.065 19.3141C20.1317 18.5141 18.7317 17.7974 17.865 17.1641C16.9984 16.5308 16.565 15.6808 16.565 14.6141C16.565 13.5808 16.94 12.7641 17.69 12.1641C18.44 11.5641 19.465 11.2641 20.765 11.2641C21.765 11.2641 22.6317 11.4974 23.365 11.9641C24.0984 12.4308 24.715 13.1308 25.215 14.0641L27.615 12.9141C27.0484 11.7474 26.2984 10.8308 25.365 10.1641C24.4317 9.49744 23.3317 9.09744 22.065 8.96411V6.41411H19.315V8.96411C17.615 9.19744 16.2734 9.82244 15.29 10.8391C14.3067 11.8558 13.815 13.1141 13.815 14.6141C13.815 16.2474 14.315 17.5474 15.315 18.5141C16.315 19.4808 17.815 20.3808 19.815 21.2141C22.0484 22.1474 23.5817 22.9891 24.415 23.7391C25.2484 24.4891 25.665 25.4141 25.665 26.5141C25.665 27.5808 25.2234 28.4391 24.34 29.0891C23.4567 29.7391 22.3484 30.0641 21.015 30.0641C19.715 30.0641 18.5567 29.6974 17.54 28.9641C16.5234 28.2308 15.815 27.2308 15.415 25.9641L12.865 26.8141C13.565 28.3474 14.4234 29.5558 15.44 30.4391C16.4567 31.3224 17.715 31.9641 19.215 32.3641V35.0641ZM20.665 40.7141C17.9317 40.7141 15.3484 40.1891 12.915 39.1391C10.4817 38.0891 8.35671 36.6558 6.54004 34.8391C4.72337 33.0224 3.29004 30.8974 2.24004 28.4641C1.19004 26.0308 0.665039 23.4474 0.665039 20.7141C0.665039 17.9474 1.19004 15.3474 2.24004 12.9141C3.29004 10.4808 4.72337 8.36411 6.54004 6.56411C8.35671 4.76411 10.4817 3.33911 12.915 2.28911C15.3484 1.23911 17.9317 0.714111 20.665 0.714111C23.4317 0.714111 26.0317 1.23911 28.465 2.28911C30.8984 3.33911 33.015 4.76411 34.815 6.56411C36.615 8.36411 38.04 10.4808 39.09 12.9141C40.14 15.3474 40.665 17.9474 40.665 20.7141C40.665 23.4474 40.14 26.0308 39.09 28.4641C38.04 30.8974 36.615 33.0224 34.815 34.8391C33.015 36.6558 30.8984 38.0891 28.465 39.1391C26.0317 40.1891 23.4317 40.7141 20.665 40.7141ZM20.665 37.7141C25.3984 37.7141 29.415 36.0558 32.715 32.7391C36.015 29.4224 37.665 25.4141 37.665 20.7141C37.665 15.9808 36.015 11.9641 32.715 8.66411C29.415 5.36411 25.3984 3.71411 20.665 3.71411C15.965 3.71411 11.9567 5.36411 8.64004 8.66411C5.32337 11.9641 3.66504 15.9808 3.66504 20.7141C3.66504 25.4141 5.32337 29.4224 8.64004 32.7391C11.9567 36.0558 15.965 37.7141 20.665 37.7141Z'
                    fill='url(#paint0_linear_20477_25876)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_20477_25876'
                      x1='5.74437'
                      y1='0.714112'
                      x2='35.5857'
                      y2='40.7141'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#8E76FF' />
                      <stop
                        offset='1'
                        stopColor='#C1B0F1'
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </IconWrapper>
              <Typography
                variant='h3'
                sx={{
                  fontSize: '24px',
                  fontWeight: 500,
                  color: 'white',
                }}>
                Monetization Options
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: '#F9FAFC' }}>
                Monetize your AI agents by selling them on our marketplace.
              </Typography>
            </FeatureCard>
          </Grid>

          <Grid size={{ md: 4, xs: 6 }}>
            <FeatureCard ref={(el: any) => (featuresRef.current[4] = el)}>
              <IconWrapper>
                <svg
                  width='37'
                  height='37'
                  viewBox='0 0 37 37'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M0.335022 36.7141V32.9141L3.33502 29.9141V36.7141H0.335022ZM8.58502 36.7141V24.9141L11.585 21.9141V36.7141H8.58502ZM16.835 36.7141V21.9141L19.835 24.9641V36.7141H16.835ZM25.085 36.7141V24.9641L28.085 21.9641V36.7141H25.085ZM33.335 36.7141V16.9141L36.335 13.9141V36.7141H33.335ZM0.335022 24.9141V20.6641L14.335 6.76411L22.335 14.7641L36.335 0.714111V4.96411L22.335 19.0141L14.335 11.0141L0.335022 24.9141Z'
                    fill='url(#paint0_linear_20586_48245)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_20586_48245'
                      x1='10.0775'
                      y1='0.740235'
                      x2='70.0174'
                      y2='76.6194'
                      gradientUnits='userSpaceOnUse'>
                      <stop stopColor='#8E76FF' />
                      <stop
                        offset='1'
                        stopColor='#C1B0F1'
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </IconWrapper>
              <Typography
                variant='h3'
                sx={{
                  fontSize: '24px',
                  fontWeight: 500,
                  color: 'white',
                }}>
                Scalable Infrastructure
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: '#F9FAFC' }}>
                Run your AI agents on our secure and scalable cloud infrastructure.
              </Typography>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
