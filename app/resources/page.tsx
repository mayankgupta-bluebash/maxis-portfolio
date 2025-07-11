'use client';
import React, { useState, useEffect } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemButton, ListItemText, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqData } from '../mock';

const ResourcesPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('sign-up');
  const [isFixed, setIsFixed] = useState(true);
  const handleFAQChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedFAQ(isExpanded ? panel : null);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);

    const element = document.getElementById(category);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'instant',
      });
    }
  };

  // Auto-scroll functionality - update active category based on scroll position

  useEffect(() => {
    const handleScroll = () => {
      const sections = faqData.map((section) => section.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveCategory(sections[i]);

          // Check if it's the last section
          if (sections[i] === sections[sections.length - 1]) {
            setIsFixed(false);
          } else {
            setIsFixed(true);
          }

          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const GradientText = styled(Typography)({
    background: 'linear-gradient(249deg, #FFF 0%, #9573DE 53%, #FFF 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  });

  const renderAnswer = (answer: string | string[]) => {
    if (Array.isArray(answer)) {
      return (
        <div>
          {answer.map((line, index) => (
            <div
              key={index}
              style={{ marginBottom: line === '' ? '8px' : '0' }}>
              {line === '' ? <br /> : line}
            </div>
          ))}
        </div>
      );
    }
    return answer;
  };

  return (
    <Box
      sx={{
        display: { xs: 'block', md: 'flex' },
        flexDirection: { md: 'row' },
        minHeight: isFixed ? { xs: 'auto', md: 'calc(100vh - 300px)' } : '100vh',
        position: 'relative',
        background: '#080411',
      }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: '100%', md: '320px' },
          borderRight: { xs: 'none', md: '1px solid rgba(141, 49, 245, 0.20)' },
          borderBottom: { xs: '1px solid rgba(141, 49, 245, 0.20)', md: 'none' },
          p: { xs: 2, md: 3 },
          top: isFixed ? { xs: '0px', md: '60px' } : { xs: '100%', md: '100%' },
          position: { xs: 'static', md: isFixed ? 'fixed' : 'sticky' },
          transition: 'top 0.1s linear',
          left: { xs: '0px', md: '0px' },
          height: { xs: 'auto', md: '100%' },
          overflowX: { xs: 'auto', md: 'visible' },
          overflowY: { xs: 'visible', md: 'auto' },
          zIndex: 1000,
          bgcolor: 'transparent',
          display: 'flex',
          flexDirection: { xs: 'row', md: 'column' },
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: { xs: 2, md: 0 },
        }}>
        <GradientText
          variant='h5'
          sx={{ mb: { xs: 0, md: 3 }, fontSize: { xs: '18px', md: '20px' }, fontWeight: 600, minWidth: 'max-content', mr: { xs: 2, md: 0 } }}>
          Categories
        </GradientText>

        <List sx={{ display: 'flex', flexDirection: { xs: 'row', md: 'column' }, gap: { xs: 1, md: 0 }, p: 0, minWidth: 0 }}>
          {faqData.map((section) => (
            <ListItem
              key={section.id}
              disablePadding
              sx={{ width: { xs: 'auto', md: '100%' } }}>
              <ListItemButton
                selected={activeCategory === section.id}
                onClick={() => handleCategoryClick(section.id)}
                sx={{
                  borderRadius: '4px',
                  mb: { xs: 0, md: 1 },
                  mx: { xs: 0.5, md: 0 },
                  minWidth: 0,
                  '&.Mui-selected': {
                    bgcolor: 'rgba(111, 65, 210, 0.2)',
                    borderLeft: { xs: 'none', md: '3px solid #6F41D2' },
                    borderBottom: { xs: '3px solid #6F41D2', md: 'none' },
                  },
                  '&.Mui-selected:hover': {
                    bgcolor: 'rgba(111, 65, 210, 0.25)',
                  },
                }}>
                <ListItemText
                  primary={section.title}
                  primaryTypographyProps={{
                    color: 'white',
                    fontSize: { xs: '13px', md: '14px' },
                    fontWeight: activeCategory === section.id ? 600 : 400,
                    minWidth: 'max-content',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* FAQ Content */}
      <Box
        sx={{
          flex: 1,
          marginLeft: { xs: 0, md: isFixed ? '320px' : '0px' },
          p: { xs: 2, md: 5 },
          pt: { xs: 3, md: 5 },
        }}>
        {faqData.map((section) => (
          <Box
            key={section.id}
            id={section.id}>
            <Typography
              variant='h4'
              sx={{
                color: 'white',
                fontSize: { xs: '18px', md: '24px' },
                fontWeight: 700,
                mb: 2,
                mt: { xs: 3, md: 4 },
                paddingTop: { xs: '10px', md: '20px' },
              }}>
              {section.title}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {section.faqs.map((faq) => (
                <div key={faq.id}>
                  <StyledAccordion
                    expanded={expandedFAQ === faq.id}
                    onChange={handleFAQChange(faq.id)}
                    sx={{ border: '0.5px solid rgb(95, 85, 162)' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                      sx={{
                        '& .MuiAccordionSummary-content': {
                          alignItems: 'center',
                          gap: 2,
                          flexWrap: 'wrap',
                        },
                      }}>
                      <Typography sx={{ color: 'white', fontSize: { xs: '15px', md: '16px' }, fontWeight: 600 }}>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          color: 'white',
                          fontSize: { xs: '15px', md: '16px' },
                          lineHeight: 1.4,
                          whiteSpace: 'pre-line',
                        }}>
                        {renderAnswer(faq.answer)}
                      </Typography>
                    </AccordionDetails>
                  </StyledAccordion>
                </div>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const StyledAccordion = styled(Accordion)({
  borderRadius: '8px',
  background: 'none',
  backdropFilter: 'blur(7.5px)',
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    minHeight: '60px',
  },
  '& .MuiAccordionDetails-root': {
    paddingLeft: '20px',
    paddingTop: '0px',
  },
});

export default ResourcesPage;
