'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function TermsAndConditionsPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#080411',
        py: 8,
      }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          sx={{
            color: '#FFF',
            fontFamily: 'Inter',
            fontSize: '32px',
            fontWeight: 700,
            mb: 4,
            textAlign: 'center',
          }}>
          Terms & Conditions
        </Typography>

        <Box
          sx={{
            bgcolor: 'rgba(37, 26, 73, 0.50)',
            border: '1px solid #A18BE3',
            borderRadius: '8px',
            p: 4,
          }}>
          <Typography
            sx={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 600,
              mb: 2,
            }}>
            Terms & Conditions:
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              mb: 3,
            }}>
            By logging into this site/system the user is accepting all the terms and conditions specified below.
          </Typography>

          <Typography
            sx={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 600,
              mb: 2,
            }}>
            Terms of Service:
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              mb: 2,
            }}>
            By accessing this site/system, you represent and warrant that:
          </Typography>
          <Box
            component='ul'
            sx={{ pl: 3, mb: 3 }}>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              You are the authorized individual to access the site / application.
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              You have the lawful, right authority and capacity to contract and be bound by these Terms and to perform the obligations as contemplated hereunder;
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              If You are accepting these Terms on behalf of a company, You have the authority to bind such entity to these Terms and, in such event, "You" and "Your" as used in
              these Terms shall refer to such entity.
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              If you are a legal entity and are permitting an employee of the legal entity to use the Site through your account as an employee or an user ("Employee") identified
              through an unique login, you have the authority to bind such employees and users to these Terms and, in such event, "Your" and "Your" as used in these Terms shall
              refer to such entity and its Employees;
            </Typography>
          </Box>

          <Typography
            sx={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 600,
              mb: 2,
            }}>
            Acceptable Use of AI:
          </Typography>
          <Box
            component='ul'
            sx={{ pl: 3, mb: 3 }}>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              The user or employee of such legal entity who uses this system is abiding with all terms specified in the company's acceptable usage policy.
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              You will not use the AI to generate content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or libelous.
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              You will not use the AI to infringe upon the intellectual property rights of others, including but not limited to copyrights and trademarks.
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              You will not use the AI to generate misinformation or to engage in any fraudulent or deceptive activities.
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              You will not input any confidential, sensitive, or personally identifiable information into the AI, unless it has been properly de-identified.
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              Follow the companies acceptable use of AI technology (or) relevant policies.
            </Typography>
          </Box>

          <Typography
            sx={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 600,
              mb: 2,
            }}>
            Acceptable Use:
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              mb: 3,
            }}>
            The user or employee of such legal entity who uses this system is abiding with all terms specified in the company's acceptable usage policy.
          </Typography>

          <Typography
            sx={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 600,
              mb: 2,
            }}>
            Password Protection:
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              mb: 3,
            }}>
            Users are responsible for the proper usage of the system. Password shall be secured safely and follow the company's password policy in managing their passwords
            effectively. Revealing your account user information or passwords to others or allowing use of your account or log-in credentials by others is strictly prohibited and
            may be against to your company's policy.
          </Typography>

          <Typography
            sx={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 600,
              mb: 2,
            }}>
            Misuse:
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              mb: 3,
            }}>
            Only authorized individuals should log-in to the system, any un-authorized access into the system will be treated as violation against to the given access rights and
            disciplinary actions may be taken as per your company's policies.
          </Typography>

          <Typography
            sx={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 600,
              mb: 2,
            }}>
            Data Protection & lawful processing:
          </Typography>
          <Box
            component='ul'
            sx={{ pl: 3, mb: 3 }}>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              You are processing/accessing the data through this site/application lawfully by meeting all the applicable regulations set by regulatory authorities or set by your
              company standards or policies.
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              You agree that you will only perform actions or import, export, modify, delete, change or transmit, or otherwise make available on or through this system or site that
              you have the right and authority to do so.
            </Typography>
          </Box>

          <Typography
            sx={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 600,
              mb: 2,
            }}>
            Accidental loss /intentional damage:
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              mb: 3,
            }}>
            While using the system the user or the company who uses this system are solely responsible for any loss to the data or system which may arise due to un-intentional or
            intentional acts.
          </Typography>

          <Typography
            sx={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 600,
              mb: 2,
            }}>
            Privacy Practices:
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              mb: 2,
            }}>
            The user or employee who accesses this site or system must obey and adhere to the Privacy Policies and practices that their company follows.
          </Typography>
          <Box
            component='ul'
            sx={{ pl: 3, mb: 3 }}>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              You acknowledge that when you interact with the AI, the data you provide, including prompts and inputs, may be processed and stored to improve the AI's performance.
              You agree to these data practices.
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              You agree to not submit any personal, confidential, or sensitive information into the AI.
            </Typography>
          </Box>

          <Typography
            sx={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 600,
              mb: 2,
            }}>
            Intellectual Property Rights:
          </Typography>
          <Box
            component='ul'
            sx={{ pl: 3, mb: 3 }}>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              This site and the workflows provided in or through the system are the intellectual property and copyrighted works of MAXISIT.
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              The AI-generated output is owned by MAXISIT. You may use the output for your business purposes; however, you may not use it to create a competing product.
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              You will not claim any copyright or other intellectual property rights in the AI-generated output.
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              MAXISIT retains all rights to the underlying AI models and the training data used to create them.
            </Typography>
            <Typography
              component='li'
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '14px',
                mb: 1,
              }}>
              You will not reverse engineer, decouple, or otherwise attempt to derive the source code or algorithms of the AI models.
            </Typography>
          </Box>

          <Typography
            sx={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 600,
              mb: 2,
            }}>
            Limitation of Liability or Disclaimer:
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              mb: 3,
            }}>
            In no event shall MAXISIT be liable for any direct, indirect, incidental, special or consequential damages, or damages for loss of profits, revenue, data or data use,
            incurred by the user/ employee or any third party, whether in an action in contract or wrongful, arising from your access to, or use of, the site or any content
            provided on or through the site.
          </Typography>

          <Typography
            sx={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 600,
              mb: 2,
            }}>
            Trademark / Copyright:
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
              mb: 3,
            }}>
            ©Copyright MAXISIT © 2011-2025, All Rights Reserved.
          </Typography>

          <Typography
            sx={{
              color: '#FFF',
              fontSize: '16px',
              fontWeight: 600,
              mb: 2,
            }}>
            About Us:
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '14px',
            }}>
            MAXISIT® is the premier contributor worldwide in improving the way's pharmaceutical and life sciences industry companies, and academia are leveraging information and
            making decisions in how clinical research and development is conducted.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
