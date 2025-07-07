'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Button, Card, CardContent, TextField, InputAdornment, Chip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useModalFlow } from '../components/modal/ModalFlowProvider';
import SearchIcon from '@mui/icons-material/Search';
import BookIcon from '@mui/icons-material/MenuBook';
import CodeIcon from '@mui/icons-material/Code';
import VideocamIcon from '@mui/icons-material/Videocam';
import ForumIcon from '@mui/icons-material/Forum';
import SchoolIcon from '@mui/icons-material/School';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import QuizIcon from '@mui/icons-material/Quiz';
import DownloadIcon from '@mui/icons-material/Download';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

gsap.registerPlugin(ScrollTrigger);

const GradientText = styled(Typography)({
  background: 'linear-gradient(249deg, #FFF 0%, #9573DE 53%, #FFF 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
});

const HeroBadge = styled(Box)({
  display: 'inline-flex',
  padding: '6px 20px',
  borderRadius: '99px',
  border: '1px solid #DAD9DB',
  background: 'rgba(37, 26, 73, 0.50)',
  marginBottom: '32px',
  width: 'fit-content',
});

const ResourceCard = styled(Card)({
  borderRadius: '16px',
  border: '1px solid rgba(141, 49, 245, 0.20)',
  background: 'rgba(37, 26, 73, 0.50)',
  boxShadow: '0px 10px 15px -3px rgba(0, 41, 41, 0.04), 0px 4px 6px -4px rgba(0, 41, 41, 0.04)',
  transition: 'all 0.3s ease',
  height: '100%',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0px 20px 30px -5px rgba(96, 30, 249, 0.25)',
    borderColor: 'rgba(141, 49, 245, 0.40)',
  },
});

const CategoryCard = styled(Card)({
  borderRadius: '24px',
  border: '1px solid rgba(141, 49, 245, 0.20)',
  background: 'rgba(37, 26, 73, 0.50)',
  padding: '32px',
  textAlign: 'center',
  height: '100%',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0px 20px 30px -5px rgba(96, 30, 249, 0.25)',
    borderColor: 'rgba(141, 49, 245, 0.40)',
  },
});

const SearchField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(37, 26, 73, 0.50)',
    border: '1px solid #3E3E3E',
    borderRadius: '12px',
    color: '#F9FAFC',
    fontSize: '16px',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#8B8698',
    fontSize: '16px',
    '&.Mui-focused': {
      color: '#8B8698',
    },
  },
  '& .MuiOutlinedInput-input': {
    padding: '16px',
    color: '#F9FAFC',
    fontSize: '16px',
    '&::placeholder': {
      color: '#8B8698',
      opacity: 1,
    },
  },
});

const ResourcesPage: React.FC = () => {
  const { open } = useModalFlow();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Animation refs
  const heroBadgeRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const searchSectionRef = useRef<HTMLDivElement>(null);
  const categorySectionRef = useRef<HTMLDivElement>(null);
  const categoryCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const resourcesSectionRef = useRef<HTMLDivElement>(null);
  const resourceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const communitySectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animations
    gsap.fromTo(
      heroBadgeRef.current,
      { y: 40, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroBadgeRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      heroTitleRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: heroTitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      heroSubtitleRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroSubtitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Search section animation
    gsap.fromTo(
      searchSectionRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: searchSectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Category section animation
    gsap.fromTo(
      categorySectionRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: categorySectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Category cards staggered animation
    gsap.fromTo(
      categoryCardsRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: categoryCardsRef.current[0],
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Resources section animation
    gsap.fromTo(
      resourcesSectionRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: resourcesSectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Resource cards staggered animation
    gsap.fromTo(
      resourceCardsRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: resourceCardsRef.current[0],
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Community section animation
    gsap.fromTo(
      communitySectionRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: communitySectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const categories = [
    {
      id: 'documentation',
      title: 'Documentation',
      description: 'Complete guides and API references',
      icon: <BookIcon sx={{ fontSize: 40, color: '#9573DE' }} />,
      count: 24,
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      description: 'Step-by-step learning materials',
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#9573DE' }} />,
      count: 18,
    },
    {
      id: 'code-examples',
      title: 'Code Examples',
      description: 'Ready-to-use code snippets',
      icon: <CodeIcon sx={{ fontSize: 40, color: '#9573DE' }} />,
      count: 32,
    },
    {
      id: 'videos',
      title: 'Video Content',
      description: 'Visual learning resources',
      icon: <VideocamIcon sx={{ fontSize: 40, color: '#9573DE' }} />,
      count: 12,
    },
    {
      id: 'tools',
      title: 'Tools & SDKs',
      description: 'Development tools and libraries',
      icon: <WorkspacesIcon sx={{ fontSize: 40, color: '#9573DE' }} />,
      count: 8,
    },
    {
      id: 'community',
      title: 'Community',
      description: 'Forums, discussions, and support',
      icon: <ForumIcon sx={{ fontSize: 40, color: '#9573DE' }} />,
      count: 156,
    },
  ];

  const resources = [
    {
      id: 1,
      title: 'Getting Started with Maxis AI',
      description: 'Complete guide to building your first AI agent with our platform',
      category: 'documentation',
      type: 'Guide',
      readTime: '15 min read',
      icon: <RocketLaunchIcon sx={{ color: '#9573DE' }} />,
      tags: ['Beginner', 'Setup', 'AI Agents'],
    },
    {
      id: 2,
      title: 'API Reference Documentation',
      description: 'Comprehensive API documentation with examples and best practices',
      category: 'documentation',
      type: 'Reference',
      readTime: '30 min read',
      icon: <CodeIcon sx={{ color: '#9573DE' }} />,
      tags: ['API', 'Reference', 'Development'],
    },
    {
      id: 3,
      title: 'Building Custom AI Agents',
      description: 'Learn how to create and deploy custom AI agents for your business needs',
      category: 'tutorials',
      type: 'Tutorial',
      readTime: '45 min read',
      icon: <SchoolIcon sx={{ color: '#9573DE' }} />,
      tags: ['Advanced', 'Custom Agents', 'Deployment'],
    },
    {
      id: 4,
      title: 'Agent Integration Examples',
      description: 'Real-world examples of integrating AI agents into existing workflows',
      category: 'code-examples',
      type: 'Code',
      readTime: '20 min read',
      icon: <CodeIcon sx={{ color: '#9573DE' }} />,
      tags: ['Integration', 'Examples', 'Workflow'],
    },
    {
      id: 5,
      title: 'Platform Overview Video Series',
      description: 'Complete video walkthrough of the Maxis AI platform features',
      category: 'videos',
      type: 'Video',
      readTime: '2 hours',
      icon: <PlayCircleOutlineIcon sx={{ color: '#9573DE' }} />,
      tags: ['Overview', 'Features', 'Video'],
    },
    {
      id: 6,
      title: 'Advanced Agent Orchestration',
      description: 'Master complex agent workflows and multi-agent coordination',
      category: 'tutorials',
      type: 'Tutorial',
      readTime: '60 min read',
      icon: <WorkspacesIcon sx={{ color: '#9573DE' }} />,
      tags: ['Advanced', 'Orchestration', 'Multi-Agent'],
    },
    {
      id: 7,
      title: 'Python SDK Documentation',
      description: 'Complete documentation for our Python SDK with code examples',
      category: 'tools',
      type: 'SDK',
      readTime: '25 min read',
      icon: <DownloadIcon sx={{ color: '#9573DE' }} />,
      tags: ['Python', 'SDK', 'Library'],
    },
    {
      id: 8,
      title: 'Security Best Practices',
      description: 'Essential security guidelines for enterprise AI agent deployment',
      category: 'documentation',
      type: 'Guide',
      readTime: '35 min read',
      icon: <BookIcon sx={{ color: '#9573DE' }} />,
      tags: ['Security', 'Enterprise', 'Best Practices'],
    },
    {
      id: 9,
      title: 'Troubleshooting Common Issues',
      description: 'Solutions to frequently encountered problems and their fixes',
      category: 'documentation',
      type: 'FAQ',
      readTime: '20 min read',
      icon: <QuizIcon sx={{ color: '#9573DE' }} />,
      tags: ['Troubleshooting', 'FAQ', 'Support'],
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box sx={{ background: '#080411', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Container
        maxWidth='xl'
        sx={{ py: 10 }}>
        <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
          <HeroBadge ref={heroBadgeRef}>
            <GradientText
              variant='body2'
              sx={{ fontSize: '15px', fontWeight: 400 }}>
              Knowledge Hub
            </GradientText>
          </HeroBadge>

          <GradientText
            ref={heroTitleRef}
            variant='h1'
            sx={{
              fontSize: { xs: '48px', md: '64px' },
              fontWeight: 500,
              lineHeight: { xs: '56px', md: '72px' },
              mb: 3,
            }}>
            Everything You Need to Build with AI
          </GradientText>

          <Typography
            ref={heroSubtitleRef}
            variant='h5'
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: { xs: '18px', md: '20px' },
              fontWeight: 400,
              lineHeight: '30px',
              mb: 6,
            }}>
            Comprehensive documentation, tutorials, examples, and community resources to help you succeed with Maxis AI.
          </Typography>

          {/* Search Section */}
          <Box
            ref={searchSectionRef}
            sx={{ maxWidth: '600px', mx: 'auto', mb: 2 }}>
            <SearchField
              fullWidth
              placeholder='Search documentation, tutorials, examples...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon sx={{ color: '#8B8698' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Categories Section */}
      <Container
        maxWidth='xl'
        sx={{ py: 8 }}>
        <Box
          ref={categorySectionRef}
          sx={{ maxWidth: '1280px', mx: 'auto' }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant='h2'
              sx={{
                fontSize: { xs: '36px', md: '48px' },
                fontWeight: 500,
                color: '#FFF',
                mb: 2,
              }}>
              Explore by Category
            </Typography>
            <Typography
              variant='body1'
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '18px',
                maxWidth: '600px',
                mx: 'auto',
              }}>
              Find exactly what you're looking for with our organized resource categories
            </Typography>
          </Box>

          <Grid
            container
            spacing={3}>
            {categories.map((category, index) => (
              <Grid
                key={category.id}
                size={{ xs: 12, sm: 6, md: 4 }}>
                <CategoryCard
                  ref={(el: HTMLDivElement | null) => {
                    categoryCardsRef.current[index] = el;
                  }}
                  onClick={() => setSelectedCategory(category.id)}>
                  <Box sx={{ mb: 3 }}>{category.icon}</Box>
                  <Typography
                    variant='h6'
                    sx={{
                      color: '#FFF',
                      fontSize: '20px',
                      fontWeight: 600,
                      mb: 2,
                    }}>
                    {category.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '14px',
                      mb: 3,
                    }}>
                    {category.description}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{
                      color: '#9573DE',
                      fontSize: '14px',
                      fontWeight: 500,
                    }}>
                    {category.count} resources
                  </Typography>
                </CategoryCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Resources Section */}
      <Container
        maxWidth='xl'
        sx={{ py: 8 }}>
        <Box
          ref={resourcesSectionRef}
          sx={{ maxWidth: '1280px', mx: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
            <Box>
              <Typography
                variant='h2'
                sx={{
                  fontSize: { xs: '36px', md: '48px' },
                  fontWeight: 500,
                  color: '#FFF',
                  mb: 1,
                }}>
                {selectedCategory === 'all' ? 'All Resources' : categories.find((c) => c.id === selectedCategory)?.title}
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '16px',
                }}>
                {filteredResources.length} resources found
              </Typography>
            </Box>
            {selectedCategory !== 'all' && (
              <Button
                variant='outlined'
                onClick={() => setSelectedCategory('all')}
                sx={{
                  borderColor: '#3E3E3E',
                  color: '#FFF',
                  borderRadius: '8px',
                  '&:hover': {
                    borderColor: '#9573DE',
                  },
                }}>
                View All
              </Button>
            )}
          </Box>

          <Grid
            container
            spacing={3}>
            {filteredResources.map((resource, index) => (
              <Grid
                key={resource.id}
                size={{ xs: 12, md: 6, lg: 4 }}>
                <ResourceCard
                  ref={(el: HTMLDivElement | null) => {
                    resourceCardsRef.current[index] = el;
                  }}>
                  <CardContent sx={{ p: 3, pb: '24px !important' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {resource.icon}
                      <Box sx={{ ml: 2 }}>
                        <Typography
                          variant='caption'
                          sx={{
                            color: '#9573DE',
                            fontSize: '12px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                          }}>
                          {resource.type}
                        </Typography>
                        <Typography
                          variant='caption'
                          sx={{
                            color: 'rgba(255, 255, 255, 0.5)',
                            fontSize: '12px',
                            ml: 2,
                          }}>
                          {resource.readTime}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant='h6'
                      sx={{
                        color: '#FFF',
                        fontSize: '18px',
                        fontWeight: 600,
                        mb: 2,
                        lineHeight: 1.3,
                      }}>
                      {resource.title}
                    </Typography>

                    <Typography
                      variant='body2'
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '14px',
                        lineHeight: 1.5,
                        mb: 3,
                        minHeight: '42px',
                      }}>
                      {resource.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {resource.tags.slice(0, 3).map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size='small'
                          sx={{
                            backgroundColor: 'rgba(149, 115, 222, 0.1)',
                            color: '#9573DE',
                            fontSize: '11px',
                            height: '24px',
                            border: '1px solid rgba(149, 115, 222, 0.2)',
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Button
                        size='small'
                        sx={{
                          color: '#9573DE',
                          fontSize: '14px',
                          fontWeight: 500,
                          textTransform: 'none',
                          p: 0,
                          minWidth: 'auto',
                          '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#FFF',
                          },
                        }}
                        endIcon={<KeyboardArrowRightIcon />}>
                        Learn More
                      </Button>
                    </Box>
                  </CardContent>
                </ResourceCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Community & Support Section */}
      <Container
        maxWidth='xl'
        sx={{ py: 8 }}>
        <Box
          ref={communitySectionRef}
          sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: '36px', md: '48px' },
              fontWeight: 500,
              color: '#FFF',
              mb: 3,
            }}>
            Join Our Community
          </Typography>

          <Typography
            variant='body1'
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '18px',
              lineHeight: '28px',
              mb: 6,
            }}>
            Connect with other developers, share your projects, get help, and stay updated with the latest from Maxis AI.
          </Typography>

          <Grid
            container
            spacing={3}>
            <Grid size={{ xs: 12, md: 4 }}>
              <CategoryCard>
                <ForumIcon sx={{ fontSize: 48, color: '#9573DE', mb: 2 }} />
                <Typography
                  variant='h6'
                  sx={{ color: '#FFF', mb: 2 }}>
                  Developer Forum
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
                  Ask questions, share knowledge, and connect with the community
                </Typography>
                <Button
                  variant='outlined'
                  sx={{
                    borderColor: '#9573DE',
                    color: '#9573DE',
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#9573DE',
                      color: '#FFF',
                    },
                  }}>
                  Visit Forum
                </Button>
              </CategoryCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CategoryCard>
                <CodeIcon sx={{ fontSize: 48, color: '#9573DE', mb: 2 }} />
                <Typography
                  variant='h6'
                  sx={{ color: '#FFF', mb: 2 }}>
                  GitHub Repository
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
                  Access open-source code, contribute, and report issues
                </Typography>
                <Button
                  variant='outlined'
                  sx={{
                    borderColor: '#9573DE',
                    color: '#9573DE',
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: '#9573DE',
                      color: '#FFF',
                    },
                  }}>
                  View on GitHub
                </Button>
              </CategoryCard>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <CategoryCard>
                <QuizIcon sx={{ fontSize: 48, color: '#9573DE', mb: 2 }} />
                <Typography
                  variant='h6'
                  sx={{ color: '#FFF', mb: 2 }}>
                  Support Center
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
                  Get help from our support team and access troubleshooting guides
                </Typography>
                <Button
                  variant='contained'
                  onClick={() => open('chooseRole')}
                  sx={{
                    background: '#6F41D2',
                    borderRadius: '8px',
                    '&:hover': {
                      background: '#5A2FA8',
                    },
                  }}>
                  Get Support
                </Button>
              </CategoryCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ResourcesPage;
