export const faqData = [
  {
    id: 'sign-up',
    title: 'Sign-Up',
    faqs: [
      {
        id: 'signup1',
        question: 'Do I need to verify my email before accessing the platform?',
        answer:
          'Yes. As part of Sign-up, you will receive a One-Time Password (OTP) sent to your email. You must enter the OTP on the platform to verify your email and activate your account.',
      },
      {
        id: 'signup2',
        question: 'What information is required during sign-up?',
        answer: [
          'During sign-up, you will need to provide the following details:',
          '• Select Role (Builder or Consumer)',
          '• First Name',
          '• Last Name',
          '• Email Address',
          '• Username',
          '• Password',
          '',
          'Once you submit the sign-up form, an OTP will be sent to your email for verification.',
          '',
          'After successfully verifying your email with the OTP:',
          '• You will be prompted to select a subscription plan.',
          '• For paid plans, you will then be asked to enter your payment information to complete.',
        ],
      },
      {
        id: 'signup3',
        question: 'I didn’t receive my OTP email. What should I do?',
        answer:
          'Please check your spam or junk folder first. If it’s not there, you can click on “Resend OTP” on the verification screen to get a new one. If you still face issues, contact support.',
      },
      {
        id: 'signup4',
        question: 'When do I pay for a subscription plan?',
        answer: 'You’ll be prompted to select a plan after verifying your email. Payment is processed before access to paid features is granted.',
      },
    ],
  },
  {
    id: 'builders',
    title: 'Builders',
    faqs: [
      {
        id: 'builder1',
        question: 'What is a “Builder” in this platform?',
        answer: 'A Builder is someone who creates and manages studies or projects, builds AI applications, ingests data, and can publish apps to the marketplace.',
      },
      {
        id: 'builder2',
        question: 'What features are available to Builders?',
        answer: [
          'Depending on the plan, Builders can:',
          '• View assigned studies or projects in their database',
          '• Create/manage studies and projects',
          '• Upload documents into repository',
          '• Ingest data into studies and/or Projects',
          '• Build and test agentic assets (agents, orchestration, apps)',
          '• Publish agentic assets (agents, orchestration, apps)',
          '• Access a private workspace',
          '• Create additional workspaces',
          '• Share workspaces (Starter and Pro plans only)',
          '• Access Marketplace and hire published agentic assets (agents, orchestration, apps) from other builders',
          '• Use hired agentic assets (agents, orchestration, apps)',
          '• Manage plans and payments (limited to users who Sign up only)',
          '• View Audit Trail (limited to users who Sign up only)',
          '• Create/invite other users (limited to users who Sign up only in Starter and Pro Plans)',
        ],
      },
    ],
  },
  {
    id: 'consumers',
    title: 'Consumers',
    faqs: [
      {
        id: 'consumer1',
        question: 'Who is a Consumer on the platform?',
        answer:
          'A Consumer is someone who explores published agentic assets (agents, orchestration, apps) from Marketplace, hires the required assets and uses the apps created by Builders. They don’t build or publish apps themselves.',
      },
      {
        id: 'consumer2',
        question: 'What can a Consumer do?',
        answer: [
          'Depending on the plan, Consumers can:',
          '• View assigned studies or projects in their database',
          '• Create/manage studies and projects',
          '• Upload documents into repository',
          '• Ingest data into studies and/or Projects',
          '• Access Marketplace and hire published agentic assets (agents, orchestration, apps) from other builders',
          '• Use hired agentic assets (agents, orchestration, apps)',
          '• Manage plans and payments (limited to users who Sign up only)',
          '• View Audit Trail (limited to users who Sign up only)',
          '• Create/invite other users (limited to users who Sign up only in Starter and Pro Plans)',
        ],
      },
      {
        id: 'consumer3',
        question: 'Can Consumers build or publish apps?',
        answer: 'No. Consumers can only view and hire published agentic assets (agents, orchestration, apps). To build, manage, or publish apps, you need to sign up as a Builder.',
      },
    ],
  },
  {
    id: 'users-roles',
    title: 'Users & Role Assignment',
    faqs: [
      {
        id: 'role1',
        question: 'Can Builders or Consumers invite other users to use the system from their plan?',
        answer:
          'Users signed up to Starter and Pro Plans can invite users to access the system under their plan. The number of users allowed to be added depends on the plan. Builders on Free and Individual plans cannot invite other users to use their plan.',
      },
      {
        id: 'role2',
        question: 'Can Builders or Consumers assign different roles to users they invite?',
        answer:
          'Users signed up to Starter and Pro Plans can create and assign different roles to the users they invited to access the system under their plan. A person signed up with a Builder Starter or Pro Plan can create roles that will give users Consumer access and vice versa.',
      },
      {
        id: 'role3',
        question: 'Who can manage Users and Roles?',
        answer:
          'Only users signed up under Starter or Pro Plans as Builders or Consumers can manage Users and Roles. Invited users cannot manage Users or Roles. Users under Free/Individual plans cannot manage Users or Roles.',
      },
    ],
  },
  {
    id: 'projects-studies',
    title: 'Projects & Studies',
    faqs: [
      {
        id: 'projects1',
        question: 'What is the difference between Projects and Studies?',
        answer:
          'A Study represents a specific clinical trial and captures associated data. A Project is any entity not specific to clinical trials and can be used to ingest and manage other types of data.',
      },
      {
        id: 'projects2',
        question: 'Who can manage Projects?',
        answer:
          'All Builders under any plan can manage their Projects. Builders or Consumers under Starter or Pro Plans can assign Projects to invited users with appropriate permissions.',
      },
      {
        id: 'projects3',
        question: 'Who can manage Studies?',
        answer:
          'Only Builders or Consumers under Starter or Pro Plans can manage Studies. Invited users may also manage Studies if granted permissions. Users under Free/Individual plans cannot manage Studies.',
      },
    ],
  },
  {
    id: 'plans-billing',
    title: 'Plans & Billing',
    faqs: [
      {
        id: 'billing1',
        question: 'Who can Manage Plans and Payments?',
        answer:
          'Users signed up as Builders or Consumers under Starter or Pro Plans can manage their own Plans and Payments. Users on Free/Individual plans can also manage their own billing. Invited users cannot view or manage Plans and Payments.',
      },
    ],
  },
  {
    id: 'agent-building',
    title: 'Agent Building & Capabilities',
    faqs: [
      {
        id: 'agent1',
        question: 'What level of technical expertise is required to work with AI agents?',
        answer: 'The platform supports all levels from no-code users to developers. Prebuilt agents, templates, and training tools make it easy for everyone.',
      },
      {
        id: 'agent2',
        question: 'Which LLM models can I use in MaxisAI to build agents?',
        answer: 'You can use models such as OpenAI GPT-4, Anthropic Claude, Google Gemini, Mistral, and in-house LLMs depending on availability and licensing.',
      },
      {
        id: 'agent3',
        question: 'Can MaxisAI support in-house LLMs?',
        answer: 'Yes. We support integration with in-house or private LLMs upon request, and custom deployment assistance is available.',
      },
      {
        id: 'agent4',
        question: 'Do I need a developer to create agents or can I do it myself?',
        answer: 'With MaxisAI’s no-code/low-code Agent Studio, business users can build agents independently—no developer needed.',
      },
      {
        id: 'agent5',
        question: 'What types of databases are used to build agents?',
        answer: [
          '• Vector databases (e.g., Pinecone, FAISS, Chroma)',
          '• Relational databases (e.g., PostgreSQL, MySQL)',
          '• NoSQL databases (e.g., MongoDB, Firestore)',
          '• LangSmith or logging tools for tracking and debugging agent runs',
        ],
      },
      {
        id: 'agent6',
        question: 'How can a life sciences company without an in-house IT team use your system?',
        answer:
          'MaxisAI offers a fully managed platform with ready-to-use templates, onboarding support, and a dedicated customer success team to help non-technical teams deploy agents easily.',
      },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Regulatory Support',
    faqs: [
      {
        id: 'compliance1',
        question: 'How do AI agents ensure compliance with regulatory requirements?',
        answer: [
          'Our AI agents include:',
          '• Full audit trails',
          '• 21 CFR Part 11 alignment',
          '• Configurable human oversight',
          '• Data masking and privacy controls',
          '• Version control',
          '• Documentation for regulatory submissions',
          '• GxP and ALCOA+ data integrity support',
        ],
      },
      {
        id: 'compliance2',
        question: 'How does the platform maintain 21 CFR Part 11 compliance?',
        answer: [
          '• Secure electronic signatures',
          '• Role-based access',
          '• Audit trails',
          '• Record protection and version control',
          '• System validation documentation',
          '• Accurate timestamping',
        ],
      },
      {
        id: 'compliance3',
        question: 'Can the platform be validated for regulated clinical trials?',
        answer: [
          'Yes, with:',
          '• Validation-ready architecture',
          '• GAMP 5 configuration',
          '• Platform test protocols',
          '• IQ/OQ/PQ templates',
          '• Risk-based validation',
          '• Change impact assessments',
          '• Periodic review and revalidation support',
        ],
      },
    ],
  },
];
