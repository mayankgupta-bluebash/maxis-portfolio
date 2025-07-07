'use client';
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useModalFlow } from '../components/modal/ModalFlowProvider';

gsap.registerPlugin(ScrollTrigger);

// const GradientText = styled(Typography)({
//   background: 'linear-gradient(to right, white, #9573DE, white)',
//   WebkitBackgroundClip: 'text',
//   backgroundClip: 'text',
//   color: 'transparent',
// });

const PricingCard = styled(Box)<{ featured?: boolean }>(({ featured }) => ({
  padding: '32px',
  borderRadius: '16px',
  border: featured ? '1px solid #262626' : '1px solid #3E3E3E',
  background: featured ? '#191133' : 'transparent',
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const FeatureTableRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #3E3E3E',
  minHeight: '72px',
});

const FeatureTableHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  background: 'rgba(25, 17, 51, 0.50)',
  borderBottom: '1px solid #3E3E3E',
  minHeight: '72px',
});

const FeatureCell = styled(Box)({
  padding: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  borderLeft: '1px solid #3E3E3E',
});

const FeatureLabelCell = styled(Box)({
  padding: '24px',
  display: 'flex',
  alignItems: 'center',
  width: '513px',
  flexShrink: 0,
});

const CheckIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 17 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.15 8.9468L14.5175 0.579298C14.7453 0.351465 15.0125 0.237549 15.319 0.237549C15.6255 0.237549 15.8927 0.351465 16.1207 0.579298C16.3486 0.807298 16.4625 1.07772 16.4625 1.39055C16.4625 1.70338 16.3486 1.9738 16.1207 2.2018L6.95175 11.3898C6.72375 11.6176 6.4565 11.7315 6.15 11.7315C5.8435 11.7315 5.57625 11.6176 5.34825 11.3898L1.06025 7.1018C0.832415 6.8738 0.721665 6.60338 0.727998 6.29055C0.734332 5.97772 0.851415 5.7073 1.07925 5.4793C1.30725 5.25147 1.57766 5.13755 1.8905 5.13755C2.20333 5.13755 2.47375 5.25147 2.70175 5.4793L6.15 8.9468Z'
      fill='#46B48B'
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 15 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M7.6 8.59123L2.79575 13.3957C2.58441 13.6069 2.31917 13.7125 2 13.7125C1.68083 13.7125 1.41558 13.6069 1.20425 13.3957C0.993082 13.1844 0.887498 12.9191 0.887498 12.6C0.887498 12.2808 0.993082 12.0156 1.20425 11.8042L6.00875 6.99998L1.20425 2.19573C0.993082 1.98439 0.887498 1.71914 0.887498 1.39998C0.887498 1.08081 0.993082 0.815558 1.20425 0.604225C1.41558 0.393058 1.68083 0.287476 2 0.287476C2.31917 0.287476 2.58441 0.393058 2.79575 0.604225L7.6 5.40873L12.4042 0.604225C12.6156 0.393058 12.8808 0.287476 13.2 0.287476C13.5192 0.287476 13.7844 0.393058 13.9957 0.604225C14.2069 0.815558 14.3125 1.08081 14.3125 1.39998C14.3125 1.71914 14.2069 1.98439 13.9957 2.19573L9.19125 6.99998L13.9957 11.8042C14.2069 12.0156 14.3125 12.2808 14.3125 12.6C14.3125 12.9191 14.2069 13.1844 13.9957 13.3957C13.7844 13.6069 13.5192 13.7125 13.2 13.7125C12.8808 13.7125 12.6156 13.6069 12.4042 13.3957L7.6 8.59123Z'
      fill='#FF6451'
    />
  </svg>
);

const SectionHeader = styled(Box)({
  padding: '24px',
  background: '#110B22',
  borderBottom: '1px solid #3E3E3E',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const PricingPage: React.FC = () => {
  const { open } = useModalFlow();
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started',
      features: ['1 Agent Credit', '10 Users', 'Basic'],
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Individual',
      price: '$0',
      period: '/month',
      description: 'For individual developers',
      features: ['2 Agent Credits', '10 Users', 'Basic'],
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'For small teams',
      features: ['7 Agent Credits', '50 Users', 'Basic'],
      cta: 'Most Popular',
      featured: true,
    },
    {
      name: 'Pro',
      price: '$40',
      period: '/month',
      description: 'For growing businesses',
      features: ['10 Agent Credits', '100 Users', 'Advanced'],
      cta: 'Get Started',
      featured: false,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited Agent Credits', 'Unlimited Users', 'Advanced'],
      cta: 'Contact Sales',
      featured: false,
    },
  ];

  const featureCategories = [
    {
      name: 'Features',
      features: [
        {
          name: 'Custom Agent Creation?',
          values: [true, true, true, true, true],
        },
        {
          name: 'Create and Publish Agentic Assets to Marketplace',
          values: [true, true, true, true, true],
        },
        {
          name: 'Agentic Asset Verification',
          values: ['$100', '$100', '$100', '$100', '$100'],
        },
        {
          name: 'Number of Agents',
          values: ['1', '2', '7', '10', 'Unlimited'],
        },
        {
          name: 'Concurrent AI Agents interactions?',
          values: [false, '2', '5', '7', 'Custom'],
        },
        {
          name: 'Concurrent Agentic Orchestration Runs?',
          values: [false, '1', '3', '5', 'Custom'],
        },
        {
          name: 'Agentic Apps',
          values: [false, '1', '3', '5', 'Unlimited'],
        },
        {
          name: 'Agentic Orchestration',
          values: [true, true, true, true, true],
        },
        {
          name: 'Agentic Asset Monetization',
          values: [true, true, true, true, true],
        },
        {
          name: 'Agentic Explainability',
          values: ['Basic', 'Basic', 'Basic', 'Advanced', 'Advanced'],
        },
        {
          name: 'Agentic Observability',
          values: ['Basic', 'Basic', 'Basic', 'Advanced', 'Advanced'],
        },
        {
          name: 'Access to Marketplace',
          values: [true, true, true, true, true],
        },
        {
          name: 'Roles and Privileges',
          values: [false, false, true, true, true],
        },
        {
          name: 'Team Collaboration',
          values: [false, false, true, true, true],
        },
      ],
    },
    {
      name: 'Cloud Infrastructure',
      features: [
        {
          name: 'Team Collaboration',
          values: [false, '1', '1', '2', 'Unlimited'],
        },
        {
          name: 'Team Collaboration',
          values: ['50 MB', '100 MB', '1 GB', '10 GB', 'On demand'],
        },
        {
          name: 'GPU Compute?',
          values: [true, true, true, true, true],
        },
        {
          name: 'Dedicated Infrastructure?',
          values: [false, false, false, false, true],
        },
      ],
    },
    {
      name: 'LLM Inference',
      features: [
        {
          name: 'Open Source LLM support',
          values: [true, true, true, true, true],
        },
        {
          name: 'Premium LLM Support',
          values: ['BYOK', 'BYOK', 'BYOK', 'BYOK', 'BYOK'],
        },
        {
          name: 'Fine-tuned LLM Support',
          values: [false, false, false, false, true],
        },
      ],
    },
    {
      name: 'Support',
      features: [
        {
          name: 'Chat Support?',
          values: [true, true, true, true, true],
        },
        {
          name: 'Maxis AI Forum?',
          values: [true, true, true, true, true],
        },
        {
          name: 'Feature Requests Priority?',
          values: [false, false, 'LOW', 'MEDIUM', 'HIGH'],
        },
        {
          name: 'Dedicated Support?',
          values: [false, false, false, true, true],
        },
        {
          name: 'Embedded Maxis AI Expert?',
          values: [false, false, false, false, true],
        },
        {
          name: 'Private Workshops with Founders/Builders?',
          values: [false, false, false, false, true],
        },
        {
          name: '24/7 On Call Support?',
          values: [false, false, false, false, true],
        },
      ],
    },
    {
      name: 'Security',
      features: [
        {
          name: 'SOC2 Type 2 & GDPR Compliance',
          values: [true, true, true, true, true],
        },
        {
          name: 'SCIM/SAML Support?',
          values: [false, false, false, false, true],
        },
        {
          name: 'Fine-grained Permission Control?',
          values: [false, false, false, true, true],
        },
        {
          name: 'Admin Dashboard?',
          values: [false, false, false, false, true],
        },
        {
          name: 'Custom data retention rules',
          values: [false, false, false, false, true],
        },
        {
          name: 'Regular Security Reports?',
          values: [false, false, false, false, true],
        },
        {
          name: 'Regular Audit Trail Reports?',
          values: [false, false, false, true, true],
        },
      ],
    },
  ];

  const pricingCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const featureTableRef = useRef(null);

  useEffect(() => {
    // Hero section animations with improved timing
    gsap.fromTo(
      heroTitleRef.current,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: heroTitleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      heroSubtitleRef.current,
      { y: 60, opacity: 0, scale: 0.98 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: heroSubtitleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Pricing cards staggered animation
    gsap.fromTo(
      pricingCardsRef.current,
      { y: 100, opacity: 0, scale: 0.8, rotationY: 15 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: pricingCardsRef.current[0],
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Feature table animation with enhanced entrance
    gsap.fromTo(
      featureTableRef.current,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        delay: 0.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: featureTableRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Hover animations for pricing cards
    pricingCardsRef.current.forEach((card) => {
      if (card) {
        // Hover effect with smoother animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -15,
            scale: 1.03,
            rotationY: 2,
            duration: 0.4,
            ease: 'power2.out',
            boxShadow: '0 25px 50px rgba(96, 30, 249, 0.25)',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.5,
            ease: 'power3.out',
            boxShadow: '0 0 0 rgba(96, 30, 249, 0)',
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <CheckIcon />;
    }
    if (value === false) {
      return <CloseIcon />;
    }
    return (
      <Typography
        variant='body2'
        sx={{ color: '#878787', textAlign: 'center' }}>
        {value}
      </Typography>
    );
  };

  return (
    <Box
      component='main'
      sx={{
        background: '#080411',
        minHeight: '100vh',
        position: 'relative',
      }}>
      {/* Gradient Background */}
      <Box
        sx={{
          position: 'absolute',
          top: '-56px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '384px',
          borderRadius: '592px',
          opacity: 0.75,
          background: 'linear-gradient(180deg, #601EF9 0%, rgba(96, 30, 249, 0.00) 100%)',
          filter: 'blur(100px)',
          zIndex: 0,
        }}
      />

      {/* Hero Section */}
      <Container
        maxWidth='xl'
        sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: '80px', md: '120px' },
            pb: { xs: '40px', md: '60px' },
            textAlign: 'center',
          }}>
          <Typography
            ref={heroTitleRef}
            variant='h1'
            sx={{
              fontSize: { xs: '48px', md: '64px' },
              fontWeight: 500,
              lineHeight: { xs: '56px', md: '72px' },
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 2,
              maxWidth: '730px',
            }}>
            The Fastest Way to Grow Your Business
          </Typography>
          <Typography
            ref={heroSubtitleRef}
            variant='body1'
            sx={{
              fontSize: '22px',
              lineHeight: '32px',
              color: '#F9FAFC',
              maxWidth: '678px',
              mb: 5,
            }}>
            From individual builders to enterprise organizations, we have the right plan to power your AI automation journey.
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(5, 1fr)',
            },
            gap: 3,
            mb: 8,
          }}>
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              featured={plan.featured}
              ref={(el: HTMLDivElement | null) => {
                pricingCardsRef.current[index] = el;
              }}
              sx={{
                cursor: 'pointer',
                transform: 'perspective(1000px)',
                '&:hover': {
                  // CSS hover effects removed to avoid conflicts with GSAP
                },
              }}>
              {plan.featured && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: -1,
                    left: -1,
                    right: -1,
                    height: '2px',
                    background: 'linear-gradient(90deg, #601EF9, #9573DE)',
                    borderRadius: '16px 16px 0 0',
                  }}
                />
              )}

              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Typography
                  variant='h6'
                  sx={{ color: '#FFF', mb: 1 }}>
                  {plan.name}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'center',
                    mb: 1,
                  }}>
                  <Typography
                    variant='h3'
                    sx={{
                      fontSize: '48px',
                      fontWeight: 500,
                      color: '#FFF',
                    }}>
                    {plan.price}
                  </Typography>
                  {plan.period && (
                    <Typography
                      variant='body2'
                      sx={{ color: '#878787', ml: 1 }}>
                      {plan.period}
                    </Typography>
                  )}
                </Box>
                <Typography
                  variant='body2'
                  sx={{ color: '#878787' }}>
                  {plan.description}
                </Typography>
              </Box>

              <Box sx={{ mb: 4, flexGrow: 1 }}>
                {plan.features.map((feature, featureIndex) => (
                  <Box
                    key={featureIndex}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}>
                    <CheckIcon />
                    <Typography
                      variant='body2'
                      sx={{ color: '#878787', ml: 2 }}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Button
                fullWidth
                variant={plan.featured ? 'contained' : 'outlined'}
                sx={{
                  borderRadius: '12px',
                  py: 1.5,
                  ...(plan.featured
                    ? {
                        background: '#601EF9',
                        color: '#FFF',
                        '&:hover': {
                          background: '#4A17C7',
                        },
                      }
                    : {
                        borderColor: '#3E3E3E',
                        color: '#FFF',
                        '&:hover': {
                          borderColor: '#601EF9',
                        },
                      }),
                }}
                onClick={() => open('chooseRole')}>
                {plan.cta}
              </Button>
            </PricingCard>
          ))}
        </Box>

        {/* Feature Comparison Table */}
        <Box
          ref={featureTableRef}
          sx={{ mb: 8 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '48px', md: '60px' },
                fontWeight: 500,
                color: '#FFF',
                mb: 2,
              }}>
              Detailed Feature Comparison
            </Typography>
            <Typography
              variant='body1'
              sx={{
                fontSize: '16px',
                lineHeight: '24px',
                color: '#878787',
              }}>
              Compare all features across our plans to find the perfect fit for your needs.
            </Typography>
          </Box>

          <Box
            sx={{
              border: '1px solid #3E3E3E',
              borderRadius: '10px',
              overflow: 'hidden',
            }}>
            {/* Table Header */}
            <FeatureTableHeader>
              <FeatureLabelCell>
                <Typography
                  variant='h6'
                  sx={{ color: '#FFF', fontWeight: 600 }}>
                  Features
                </Typography>
              </FeatureLabelCell>
              {plans.map((plan) => (
                <FeatureCell
                  key={plan.name}
                  sx={{
                    background: plan.featured ? '#191133' : 'rgba(25, 17, 51, 0.50)',
                    borderLeft: plan.featured ? '1px solid #262626' : '1px solid #3E3E3E',
                  }}>
                  <Typography
                    variant='h6'
                    sx={{ color: '#FFF', fontWeight: 600 }}>
                    {plan.name}
                  </Typography>
                </FeatureCell>
              ))}
            </FeatureTableHeader>

            {/* Feature Rows */}
            {featureCategories.map((category, categoryIndex) => (
              <React.Fragment key={category.name}>
                {categoryIndex > 0 && (
                  <SectionHeader>
                    <Typography
                      variant='h6'
                      sx={{ color: '#FFF', fontWeight: 600 }}>
                      {category.name}
                    </Typography>
                  </SectionHeader>
                )}

                {category.features.map((feature, featureIndex) => (
                  <FeatureTableRow key={`${categoryIndex}-${featureIndex}`}>
                    <FeatureLabelCell>
                      <Typography
                        variant='body1'
                        sx={{ color: '#878787' }}>
                        {feature.name}
                      </Typography>
                    </FeatureLabelCell>
                    {feature.values.map((value, valueIndex) => {
                      const isStarterColumn = valueIndex === 2; // Starter plan
                      return (
                        <FeatureCell
                          key={valueIndex}
                          sx={{
                            background: isStarterColumn ? 'rgba(25, 17, 51, 0.50)' : 'transparent',
                          }}>
                          {renderFeatureValue(value)}
                        </FeatureCell>
                      );
                    })}
                  </FeatureTableRow>
                ))}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PricingPage;
