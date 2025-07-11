/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { Modal, Container, Typography, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import CloseIconSmall from '@mui/icons-material/Close';

interface PlanSelectionModalProps {
  open: boolean;
  onClose: () => void;
  onBack: () => void;
  role: 'builder' | 'consumer';
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
  position: 'sticky',
  top: 0,
  zIndex: 3,
});

const PlanCard = styled(Paper)(({ featured }: { featured?: boolean }) => ({
  display: 'flex',
  padding: '40px 32px',
  paddingTop: '72px',
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

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Beginners',
    acuCredits: '20',
    users: '1',
    buttonText: 'Choose Plan',
    buttonVariant: 'outlined' as const,
  },
  {
    name: 'Individual',
    price: '$0',
    period: '/month',
    description: 'Beginners',
    acuCredits: '20',
    users: '1',
    buttonText: 'Choose Plan',
    buttonVariant: 'outlined' as const,
  },
  {
    name: 'Starter',
    price: '$19',
    period: '/month',
    description: 'Small Business',
    acuCredits: '50',
    users: '50',
    buttonText: 'Choose Plan',
    buttonVariant: 'contained' as const,
    featured: true,
    gradient: true,
  },
  {
    name: 'Pro',
    price: '$40',
    period: '/month',
    description: 'Beginners',
    acuCredits: '100',
    users: '10',
    buttonText: 'Choose Plan',
    buttonVariant: 'outlined' as const,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '/month',
    description: 'Beginners',
    acuCredits: '#',
    users: '#',
    buttonText: 'Contact Sales',
    buttonVariant: 'outlined' as const,
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

export default function PlanSelectionModal({ open, onClose, onBack, role }: PlanSelectionModalProps) {
  const filteredPlans = role === 'consumer' ? plans.filter((plan) => !['Free', 'Individual'].includes(plan.name)) : plans;
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
          sx={{ py: 10, px: 3, position: 'relative', zIndex: 1, width: filteredPlans.length === 3 ? '75%' : '100%' }}>
          {/* Plan Cards */}
          <Box sx={{ display: 'flex', gap: 3, mb: 10, flexWrap: 'wrap' }}>
            {filteredPlans.map((plan) => (
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
                      mt: plan.name === 'Starter' ? '-38px' : 0,
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
                    variant={plan.buttonVariant}
                    fullWidth
                    sx={{
                      borderRadius: '8px',
                      py: plan.buttonVariant === 'contained' ? 1.5 : 1.75,
                      px: 1,
                      fontSize: '16px',
                      fontWeight: 500,
                      lineHeight: '169%',
                      ...(plan.buttonVariant === 'contained'
                        ? {
                            backgroundColor: '#694BC2',
                            color: '#FFF',
                            '&:hover': {
                              backgroundColor: '#5940B8',
                            },
                          }
                        : {
                            borderColor: plan.name === 'Individual' ? 'rgba(111, 65, 210, 0.50)' : '#7352D5',
                            backgroundColor: plan.name === 'Individual' ? 'rgba(111, 65, 210, 0.10)' : 'transparent',
                            color: '#8F75DD',
                            '&:hover': {
                              backgroundColor: 'rgba(111, 65, 210, 0.15)',
                            },
                          }),
                    }}>
                    {plan.buttonText}
                  </Button>
                </Box>
              </PlanCard>
            ))}
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
                    {filteredPlans.map((plan) =>
                      plan.name === 'Starter' ? <StarterHeaderCell key={plan.name}>{plan.name}</StarterHeaderCell> : <HeaderCell key={plan.name}>{plan.name}</HeaderCell>
                    )}
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
                          {filteredPlans.map((_, valueIndex) =>
                            filteredPlans[valueIndex].name === 'Starter' ? (
                              <StarterFeatureCell
                                key={valueIndex}
                                sx={{ textAlign: 'center' }}>
                                {renderFeatureValue(feature.values[plans.findIndex((p) => p.name === filteredPlans[valueIndex].name)])}
                              </StarterFeatureCell>
                            ) : (
                              <FeatureCell
                                key={valueIndex}
                                sx={{ textAlign: 'center' }}>
                                {renderFeatureValue(feature.values[plans.findIndex((p) => p.name === filteredPlans[valueIndex].name)])}
                              </FeatureCell>
                            )
                          )}
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
