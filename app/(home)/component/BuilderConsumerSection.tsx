'use client';
import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import gsap from 'gsap';

const GradientText = styled(Typography)(() => ({
  background: 'linear-gradient(to right, white, #9573DE, white)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}));

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

export default function BuilderConsumerSection() {
  const buildersSectionRef = useRef(null);
  const buildersCardRef = useRef(null);
  const consumersCardRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      buildersSectionRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: buildersSectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      buildersCardRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: buildersCardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      consumersCardRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: consumersCardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      cardsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: {
          amount: 0.6,
          grid: [6, 6],
          from: 'start',
        },
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  return (
    <Container
      maxWidth='xl'
      sx={{ py: 8 }}>
      <Box
        ref={buildersSectionRef}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center' }}>
        <Box sx={{ maxWidth: '896px' }}>
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
              Perks
            </Typography>
          </Box>
          <Typography
            variant='h2'
            sx={{ fontSize: { xs: '40px', md: '56px' }, fontWeight: 500, mb: 2 }}>
            Want to know what you&apos;ll get?
          </Typography>
          <Typography
            variant='body1'
            sx={{ color: '#DEDEDE', mb: 4 }}>
            Whether you&apos;re here to build intelligent agents or to use AI tools without coding, our platform is built for both.
          </Typography>
          <Button
            variant='contained'
            sx={{ borderRadius: '12px', backgroundColor: '#694BC2', borderColor: '#7352D5', px: 4, py: 2, color: 'white', textTransform: 'none', fontWeight: 'medium' }}>
            Learn more
          </Button>
        </Box>
        <Grid
          container
          spacing={4}
          sx={{ mt: 4 }}>
          <Grid size={6}>
            <FeatureCard
              ref={(el) => {
                cardsRef.current[0] = el as HTMLDivElement | null;
              }}
              sx={{ p: 6, alignItems: 'center', textAlign: 'center' }}>
              <IconWrapper
                sx={{
                  width: '150px',
                  height: '150px',
                  borderWidth: '2px',
                  mx: 'auto',
                }}>
                <svg
                  width='76'
                  height='80'
                  viewBox='0 0 76 80'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M13.0834 79.9069V63.1121C9.12504 59.501 6.05212 55.3625 3.86462 50.6965C1.67712 46.0298 0.583374 41.1736 0.583374 36.1277C0.583374 26.2979 4.02678 17.9427 10.9136 11.0621C17.7997 4.18086 26.1618 0.740234 36 0.740234C44.0931 0.740234 51.3299 3.15898 57.7105 7.99648C64.0917 12.8333 68.2358 19.1086 70.1427 26.8225L75.2427 47.0434C75.4858 47.9906 75.315 48.8437 74.7302 49.6027C74.1448 50.3611 73.3448 50.7402 72.3303 50.7402H63.0834V65.5642C63.0834 67.1961 62.4896 68.6055 61.3021 69.7923C60.1153 70.9798 58.7059 71.5736 57.074 71.5736H46.4167V79.9069H41.6886V66.8454H57.074C57.4476 66.8454 57.7546 66.7253 57.9948 66.485C58.2351 66.2448 58.3552 65.9378 58.3552 65.5642V46.0121H70.0709L65.5834 27.9434C63.9431 21.2878 60.3507 15.8781 54.8063 11.7142C49.2611 7.5503 42.9924 5.46836 36 5.46836C27.4743 5.46836 20.2282 8.42114 14.2615 14.3267C8.29483 20.2322 5.3115 27.4368 5.3115 35.9402C5.3115 40.3534 6.21185 44.5302 8.01254 48.4704C9.81393 52.41 12.3535 55.9031 15.6313 58.9496L17.8115 61.0204V79.9069H13.0834ZM33.4521 50.884H38.4198L38.6521 46.8215C39.6723 46.6562 40.641 46.3097 41.5584 45.7819C42.4757 45.2541 43.2646 44.6152 43.925 43.8652L47.699 45.3236L50.0542 41.3257L47.2094 39.0652C47.6372 37.9243 47.8511 36.7482 47.8511 35.5371C47.8511 34.3267 47.6372 33.1552 47.2094 32.0225L50.0542 29.7631L47.699 25.7642L43.925 27.2225C43.2396 26.5017 42.4337 25.8875 41.5073 25.3798C40.5816 24.8722 39.6299 24.5142 38.6521 24.3059L38.4198 20.2038H33.4521L33.2198 24.3059C32.2157 24.5142 31.2504 24.8722 30.324 25.3798C29.3983 25.8875 28.5927 26.5017 27.9073 27.2225L24.1334 25.7642L21.8177 29.7631L24.6615 32.0225C24.208 33.1635 23.9813 34.3395 23.9813 35.5506C23.9813 36.7618 24.208 37.9333 24.6615 39.0652L21.8177 41.3257L24.1334 45.3236L27.9073 43.8652C28.5677 44.6152 29.3563 45.2541 30.273 45.7819C31.1903 46.3097 32.1726 46.6562 33.2198 46.8215L33.4521 50.884ZM35.9459 43.3361C33.7653 43.3361 31.923 42.5816 30.4188 41.0725C28.9153 39.5628 28.1636 37.7298 28.1636 35.5736C28.1636 33.393 28.9122 31.551 30.4094 30.0475C31.9066 28.5434 33.7389 27.7913 35.9063 27.7913C38.0737 27.7913 39.9157 28.5399 41.4323 30.0371C42.9497 31.5343 43.7084 33.3666 43.7084 35.534C43.7084 37.7013 42.9539 39.5437 41.4448 41.0611C39.9351 42.5777 38.1021 43.3361 35.9459 43.3361Z'
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
              <Box sx={{ maxWidth: '512px', mx: 'auto' }}>
                <Box sx={{ mb: 4 }}>
                  <GradientText
                    variant='h3'
                    sx={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      mb: 1,
                    }}>
                    For Builders
                  </GradientText>
                  <Typography
                    variant='h4'
                    sx={{
                      fontSize: '20px',
                      fontWeight: 'normal',
                      color: '#F9FAFC',
                    }}>
                    Create and monetize your own intelligent agents
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    mb: 4,
                    textAlign: 'left',
                  }}>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Visual agent builder with drag-and-drop
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Pre-built components and integrations
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Marketplace to sell your agents
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Revenue sharing and analytics
                  </Typography>
                </Box>
                <Button
                  variant='contained'
                  // endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderRadius: '12px',
                    backgroundColor: '#694BC2',
                    borderColor: '#7352D5',
                    px: 4,
                    py: 2,
                    color: 'white',
                    textTransform: 'none',
                    fontWeight: 'medium',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}>
                  Start Building
                </Button>
              </Box>
            </FeatureCard>
          </Grid>
          <Grid size={6}>
            <FeatureCard
              ref={(el) => {
                cardsRef.current[1] = el as HTMLDivElement | null;
              }}
              sx={{ p: 6, alignItems: 'flex-start', textAlign: 'left' }}>
              <IconWrapper
                sx={{
                  width: '150px',
                  height: '150px',
                  borderWidth: '2px',
                }}>
                <svg
                  width='83'
                  height='80'
                  viewBox='0 0 83 80'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M48.1729 31.3717L32.4114 15.6113L35.8094 12.254L48.1729 24.6811L72.3479 0.611328L75.6406 3.84049L48.1729 31.3717ZM19.3667 65.2499L51.7864 74.8655L77.4198 66.8603C77.4732 65.3381 77.0087 64.1481 76.026 63.2905C75.0427 62.4336 73.9021 62.0051 72.6042 62.0051H51.675C50.4299 62.0051 49.1823 61.9249 47.9323 61.7645C46.6823 61.604 45.443 61.3103 44.2146 60.8832L34.575 57.9426L36.1937 53.1113L45.625 56.4447C46.5493 56.8023 47.551 57.037 48.6302 57.1488C49.7087 57.2613 50.9104 57.3044 52.2354 57.278H56.5062C56.5062 55.7391 56.0736 54.4582 55.2083 53.4353C54.343 52.4124 53.2694 51.6499 51.9875 51.1478L29.0385 42.502C28.9316 42.4749 28.8514 42.4547 28.7979 42.4415C28.7444 42.4283 28.6778 42.4217 28.5979 42.4217H19.3667V65.2499ZM0.416656 75.9072V37.6947H28.4531C28.8003 37.6947 29.1517 37.7294 29.5073 37.7988C29.8621 37.8683 30.2132 37.9589 30.5604 38.0707L53.55 46.653C55.7076 47.4377 57.5597 48.7464 59.1062 50.579C60.6528 52.411 61.426 54.644 61.426 57.278H72.6042C75.6653 57.278 78.1479 58.3488 80.0521 60.4905C81.9562 62.6329 82.9083 65.1676 82.9083 68.0947V70.402L52.2271 79.8009L19.3667 70.2499V75.9072H0.416656ZM5.14478 71.179H14.5354V42.4217H5.14478V71.179Z'
                    fill='url(#paint0_linear_20586_48266)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear_20586_48266'
                      x1='10.8917'
                      y1='0.611329'
                      x2='69.2418'
                      y2='82.0865'
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
              <Box sx={{ maxWidth: '512px' }}>
                <Box sx={{ mb: 4 }}>
                  <GradientText
                    variant='h3'
                    sx={{
                      fontSize: '32px',
                      fontWeight: 'bold',
                      mb: 1,
                    }}>
                    For Consumers
                  </GradientText>
                  <Typography
                    variant='h4'
                    sx={{
                      fontSize: '20px',
                      fontWeight: 'normal',
                      color: '#F9FAFC',
                    }}>
                    Run agents to automate business workflows
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    mb: 4,
                  }}>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Browse marketplace of ready-to-use agents
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Pre-built components and integrations
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Marketplace to sell your agents
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: '#F9FAFC' }}>
                    • Revenue sharing and analytics
                  </Typography>
                </Box>
                <Button
                  variant='contained'
                  // endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderRadius: '12px',
                    backgroundColor: '#694BC2',
                    borderColor: '#7352D5',
                    px: 4,
                    py: 2,
                    color: 'white',
                    textTransform: 'none',
                    fontWeight: 'medium',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}>
                  Browse Marketplace
                </Button>
              </Box>
            </FeatureCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
