/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { Modal, Container, Typography, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import CloseIconSmall from '@mui/icons-material/Close';

import { Plan } from '@/app/api/signup/types';

interface PlanSelectionModalProps {
  open: boolean;
  onClose: () => void;
  onBack: () => void;
  role: 'builder' | 'consumer';
  onSubmit?: () => Promise<any>;
  isSubmitting?: boolean;
  plans?: Plan[];
  plansLoading?: boolean;
  plansError?: Error | null;
  organizationId?: string | null;
  subdomain?: string;
  createSubscriptionMutation?: {
    mutateAsync: (params: { organizationId: string; planId: string; role: string; subdomain: string }) => Promise<{ checkout_url: string }>;
    isPending: boolean;
  };
}

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
});

const ModalContent = styled(Paper)({
  width: '1220px',
  maxWidth: '95vw',
  maxHeight: '95vh',
  overflow: 'auto',
  backgroundColor: '#080411',
  border: '1px solid #8F75DD',
  borderRadius: '14px',
  position: 'relative',
  '&:focus': {
    outline: 'none',
  },
});

const GradientBackground = styled(Box)({
  position: 'absolute',
  width: '678px',
  height: '385px',
  borderRadius: '592px',
  opacity: 0.75,
  background: 'linear-gradient(180deg, #601EF9 0%, rgba(96, 30, 249, 0.00) 100%)',
  filter: 'blur(100px)',
  left: '257px',
  top: '-155px',
  zIndex: 0,
});

const Header = styled(Box)({
  display: 'flex',
  width: '100%',
  padding: '20px 24px',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid rgba(255, 255, 255, 0.14)',
  background: 'rgba(255, 255, 255, 0.02)',
  backdropFilter: 'blur(16.5px)',
  position: 'relative',
  zIndex: 1,
});

const LogoSvg = styled('svg')({
  width: '109.565px',
  height: '30px',
});

const PlanCard = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'featured',
})<{ featured?: boolean }>(({ featured }) => ({
  display: 'flex',
  padding: '40px 32px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px',
  flex: '1 0 0',
  borderRadius: '14px',
  border: '1px solid #8F75DD',
  background: 'rgba(37, 26, 73, 0.50)',
  backdropFilter: 'blur(77px)',
  position: 'relative',
  ...(featured && {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '40px',
      background: 'rgba(141, 49, 245, 0.20)',
      borderRadius: '14px 14px 0 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
}));

const PriceGradient = styled(Typography)({
  background: 'linear-gradient(143deg, #8E76FF 5.43%, #C1B0F1 94.57%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '30px',
  fontWeight: 600,
  lineHeight: '73%',
});

const FeatureTable = styled(TableContainer)({
  width: '1060px',
  maxWidth: '100%',
  borderRadius: '8.288px',
  border: '0.829px solid #262626',
  backgroundColor: 'transparent',
});

const HeaderCell = styled(TableCell)({
  padding: '19.891px',
  background: 'rgba(25, 17, 51, 0.50)',
  border: '0.829px solid #262626',
  color: '#FFF',
  fontSize: '14.918px',
  fontWeight: 600,
  lineHeight: '150%',
  textAlign: 'center',
});

const FeatureCell = styled(TableCell)({
  padding: '19.891px',
  border: '0.829px solid #262626',
  color: '#999',
  fontSize: '13.26px',
  fontWeight: 500,
  lineHeight: '150%',
});

const StarterHeaderCell = styled(HeaderCell)({
  background: '#191133',
});

const StarterFeatureCell = styled(FeatureCell)({
  background: 'rgba(25, 17, 51, 0.50)',
});

const CategoryHeader = styled(TableCell)({
  padding: '19.891px',
  background: '#110B22',
  border: '0.829px solid #262626',
  color: '#FFF',
  fontSize: '14.918px',
  fontWeight: 600,
  lineHeight: '150%',
});

// Use API plans instead of static plans

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
        name: 'Cloud Storage',
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
        name: 'Maxis Ai AI Forum?',
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
        name: 'Embedded Maxis Ai AI Expert?',
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

const renderFeatureValue = (value: any) => {
  if (value === true) {
    return <CheckIcon sx={{ color: '#46B48B', fontSize: '19.891px' }} />;
  }
  if (value === false) {
    return <CloseIconSmall sx={{ color: '#999', fontSize: '19.891px' }} />;
  }
  return <Typography sx={{ color: '#999', fontSize: '13.26px', textAlign: 'center' }}>{value}</Typography>;
};

export default function PlanSelectionModal({
  open,
  onClose,
  onBack,
  role,
  plans = [],
  plansLoading = false,
  plansError = null,
  organizationId,
  subdomain,
  createSubscriptionMutation,
}: PlanSelectionModalProps) {
  // Track which plan is currently being processed
  const [processingPlanId, setProcessingPlanId] = useState<string | null>(null);
  return (
    <StyledModal
      open={open}
      onClose={onClose}>
      <ModalContent>
        <GradientBackground />

        {/* Header */}
        <Header>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              position: 'sticky',
              top: 0,
              zIndex: 5,
            }}>
            <IconButton
              onClick={onBack}
              sx={{ color: '#FFF', p: 0 }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '20px',
                fontWeight: 500,
                lineHeight: '36px',
              }}>
              Choose Plan
            </Typography>
          </Box>
          <IconButton
            onClick={onClose}
            sx={{ color: '#FFF', p: 0, position: 'relative', zIndex: 1 }}>
            <CloseIcon />
          </IconButton>
        </Header>

        {/* Content */}
        <Container
          maxWidth={false}
          sx={{ py: 10, px: 3, position: 'relative', zIndex: 1 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
            <LogoSvg
              viewBox='0 0 110 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_20692_75462)'>
                <mask
                  id='mask0_20692_75462'
                  style={{ maskType: 'luminance' }}
                  maskUnits='userSpaceOnUse'
                  x='0'
                  y='-4'
                  width='126'
                  height='34'>
                  <path
                    d='M125.435 -3.91309H0.217407V30H125.435V-3.91309Z'
                    fill='white'
                  />
                </mask>
                <g mask='url(#mask0_20692_75462)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M17.1412 10.9629L6.46787 0.562988H3.76215H0.217407V30.002H6.43535V15.2201V9.70155L16.7769 20.292L25.3623 12.0864V7.65829V6.72542V3.24345L17.1412 10.9629Z'
                    fill='#F1EEFB'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M48.3257 18.5835H34.7192V12.0335H48.3257V7.15875H33.1061L26.9728 30.0018H26.9728V6.72519C26.9728 5.02356 27.402 3.414 28.5663 2.20517C29.698 1.02918 31.1419 0.556152 32.7029 0.556152H46.4201L54.5047 10.0166V29.9952H48.3257V18.5704V18.5835Z'
                    fill='#8F75DD'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M103.091 23.452V18.5772H89.3023C87.7673 18.5772 86.3234 18.1502 85.1722 17.0334C83.9559 15.8508 83.5721 14.1624 83.5721 12.4608V6.72542C83.5721 5.03039 83.9754 3.39456 85.1461 2.18572C86.2844 1.00974 87.7478 0.562988 89.3088 0.562988H107.996V7.15906H89.712V12.0338H103.501C105.088 12.0338 106.571 12.4937 107.728 13.7025C108.873 14.9048 109.322 16.4618 109.322 18.1502V23.8856C109.322 25.5609 108.952 27.2296 107.793 28.4253C106.636 29.621 105.074 30.002 103.507 30.002H83.9689V23.452H103.104H103.091Z'
                    fill='#F1EEFB'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M75.8231 19.5562V0.562988H81.9565V27.0851L75.8231 19.5562Z'
                    fill='#8F75DD'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M70.6075 15.7785L82.2044 30.002H73.7685L66.1522 21.0935L70.6075 15.7785ZM66.4773 8.54521L73.6905 0.562988H74.2173V9.24168L70.6726 13.2098L66.4773 8.54521Z'
                    fill='#F1EEFB'
                  />
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M60.808 14.8456L48.6063 0.562988H57.0616L69.543 14.4514L56.5153 30.002H56.1186V20.5416L60.808 14.8456Z'
                    fill='#F1EEFB'
                  />
                </g>
              </g>
              <defs>
                <clipPath id='clip0_20692_75462'>
                  <rect
                    width='109.565'
                    height='30'
                    fill='white'
                    transform='translate(0.217407)'
                  />
                </clipPath>
              </defs>
            </LogoSvg>
          </Box>

          {/* Plan Cards */}
          <Box sx={{ display: 'flex', gap: 3, mb: 10, flexWrap: 'wrap' }}>
            {plansLoading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '200px' }}>
                <Typography sx={{ color: '#FFF' }}>Loading plans...</Typography>
              </Box>
            ) : plansError ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '200px' }}>
                <Typography sx={{ color: '#FF6451' }}>Error loading plans: {plansError.message}</Typography>
              </Box>
            ) : plans.length === 0 ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '200px' }}>
                <Typography sx={{ color: '#FFF' }}>No plans available from API</Typography>
              </Box>
            ) : (
              <>
                {plans.map((plan) => (
                  <PlanCard
                    key={plan.name}
                    featured={plan.featured}>
                    {plan.featured && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '40px',
                          background: 'rgba(141, 49, 245, 0.20)',
                          borderRadius: '14px 14px 0 0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Typography sx={{ color: '#F9FAFC', fontSize: '14px' }}>Most Popular</Typography>
                      </Box>
                    )}

                    <Box sx={{ width: '100%', pt: plan.featured ? 5 : 0 }}>
                      {/* Plan Name */}
                      <Typography
                        sx={{
                          color: '#F9FAFC',
                          fontSize: '20px',
                          fontWeight: 500,
                          lineHeight: '150%',
                          textAlign: 'center',
                          mb: 3,
                        }}>
                        {plan.name}
                      </Typography>

                      {/* Divider */}
                      <Box
                        sx={{
                          width: '100%',
                          height: '1px',
                          background: '#523A97',
                          mb: 3,
                        }}
                      />

                      {/* Price */}
                      <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
                        {plan.gradient ? (
                          <PriceGradient>{plan.price}</PriceGradient>
                        ) : (
                          <Typography
                            sx={{
                              color: '#F9FAFC',
                              fontSize: '30px',
                              fontWeight: 600,
                              lineHeight: '73%',
                            }}>
                            {plan.price}
                          </Typography>
                        )}
                        <Typography
                          sx={{
                            color: '#DEDEDE',
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: '73%',
                            ml: 0.5,
                          }}>
                          {plan.period}
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          color: '#DEDEDE',
                          fontSize: '16px',
                          lineHeight: '150%',
                          mb: 3,
                        }}>
                        {plan.description}
                      </Typography>

                      {/* Divider */}
                      <Box
                        sx={{
                          width: '100%',
                          height: '1px',
                          background: '#523A97',
                          mb: 3,
                        }}
                      />

                      {/* Features */}
                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 2,
                          }}>
                          <Typography
                            sx={{
                              color: 'rgba(255, 255, 255, 0.70)',
                              fontSize: '16px',
                            }}>
                            ACU Credits
                          </Typography>
                          <Typography
                            sx={{
                              color: '#8F75DD',
                              fontSize: '16px',
                              fontWeight: 600,
                            }}>
                            {plan.acuCredits}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Typography
                            sx={{
                              color: 'rgba(255, 255, 255, 0.70)',
                              fontSize: '16px',
                            }}>
                            Users
                          </Typography>
                          <Typography
                            sx={{
                              color: '#8F75DD',
                              fontSize: '16px',
                              fontWeight: 600,
                            }}>
                            {plan.users}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Divider */}
                      <Box
                        sx={{
                          width: '100%',
                          height: '1px',
                          background: '#8F75DD',
                          mb: 3,
                        }}
                      />

                      {/* Button */}
                      <Button
                        onClick={async () => {
                          if (organizationId && createSubscriptionMutation && plan.id) {
                            try {
                              setProcessingPlanId(plan.id);
                              await createSubscriptionMutation.mutateAsync({
                                organizationId,
                                planId: plan.id,
                                role,
                                subdomain: subdomain || '',
                              });
                            } catch (error) {
                              console.error('Failed to create subscription:', error);
                            } finally {
                              setProcessingPlanId(null);
                            }
                          }
                        }}
                        disabled={!organizationId || processingPlanId === plan.id}
                        variant={plan.buttonVariant}
                        fullWidth
                        sx={{
                          borderRadius: '8px',
                          py: plan.buttonVariant === 'contained' ? 1.5 : 1.75,
                          px: 1,
                          fontSize: '16px',
                          fontWeight: 500,
                          lineHeight: '169%',
                          backgroundColor: '#694BC2',
                          color: '#FFF',
                          '&:hover': {
                            backgroundColor: '#5940B8',
                          },
                        }}>
                        {processingPlanId === plan.id ? 'Processing...' : plan.buttonText}
                      </Button>
                    </Box>
                  </PlanCard>
                ))}
              </>
            )}
          </Box>

          {/* Feature Comparison Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 7.5,
            }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                sx={{
                  color: '#FFF',
                  fontSize: '32px',
                  fontWeight: 500,
                  mb: 1.25,
                }}>
                Detailed Feature Comparison
              </Typography>
              <Typography
                sx={{
                  color: '#999',
                  fontSize: '16px',
                  lineHeight: '150%',
                }}>
                Compare all features across our plans to find the perfect fit for your needs.
              </Typography>
            </Box>

            {/* Feature Comparison Table */}
            <FeatureTable>
              <Table>
                <TableHead>
                  <TableRow>
                    <HeaderCell sx={{ width: '425.16px', textAlign: 'left' }}>Features</HeaderCell>
                    <HeaderCell>Free</HeaderCell>
                    <HeaderCell>Individual</HeaderCell>
                    <StarterHeaderCell>Starter</StarterHeaderCell>
                    <HeaderCell>Pro</HeaderCell>
                    <HeaderCell>Enterprise</HeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {featureCategories.map((category) => (
                    <React.Fragment key={category.name}>
                      {/* Category Header */}
                      <TableRow>
                        <CategoryHeader colSpan={6}>{category.name}</CategoryHeader>
                      </TableRow>

                      {/* Category Features */}
                      {category.features.map((feature) => (
                        <TableRow key={feature.name}>
                          <FeatureCell sx={{ textAlign: 'left' }}>{feature.name}</FeatureCell>
                          {feature.values.map((value, valueIndex) => (
                            <React.Fragment key={valueIndex}>
                              {valueIndex === 2 ? (
                                <StarterFeatureCell sx={{ textAlign: 'center' }}>{renderFeatureValue(value)}</StarterFeatureCell>
                              ) : (
                                <FeatureCell sx={{ textAlign: 'center' }}>{renderFeatureValue(value)}</FeatureCell>
                              )}
                            </React.Fragment>
                          ))}
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </FeatureTable>
          </Box>
        </Container>
      </ModalContent>
    </StyledModal>
  );
}
