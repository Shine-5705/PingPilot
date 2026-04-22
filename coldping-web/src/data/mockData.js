export const metrics = [
  { label: 'Total contacts', value: '1,284', delta: '+12.4%' },
  { label: 'Messages sent', value: '842', delta: '+18.1%' },
  { label: 'Replies', value: '137', delta: '+6.8%' },
  { label: 'Response rate', value: '16.3%', delta: '+1.2%' },
]

export const campaigns = [
  {
    id: 'cmp-106',
    name: 'Google HR Internship Push',
    company: 'Google',
    roleFilter: 'HR | Recruiter',
    contacts: 56,
    sent: 31,
    replies: 8,
    status: 'Active',
    updatedAt: '2h ago',
  },
  {
    id: 'cmp-104',
    name: 'Meta Research Outreach',
    company: 'Meta',
    roleFilter: 'Research Manager',
    contacts: 24,
    sent: 24,
    replies: 5,
    status: 'Running',
    updatedAt: '1d ago',
  },
  {
    id: 'cmp-099',
    name: 'Amazon Referral Drive',
    company: 'Amazon',
    roleFilter: 'Talent Acquisition',
    contacts: 49,
    sent: 49,
    replies: 11,
    status: 'Completed',
    updatedAt: '4d ago',
  },
]

export const activityFeed = [
  'Generated 22 personalized emails for Google campaign.',
  'Updated status to Replied for Priya Raman.',
  'Added custom template: Research collaboration ask.',
  'Imported new resume version for spring internship outreach.',
]

export const contacts = [
  {
    id: 'p1',
    name: 'Aarav Sharma',
    role: 'Senior Technical Recruiter',
    company: 'Google',
    linkedin: 'https://www.linkedin.com/in/aarav-sharma/',
    email: 'aarav.sharma@google.com',
    status: 'Not Contacted',
    score: 92,
    reason:
      'Leads university recruiting for software internships across APAC.',
    emailMessage:
      'Hi Aarav,\n\nI am a computer science student focused on distributed systems and ML infra. I admired Google\'s internship programs and wanted to ask if you can guide me on the best path for Summer 2027 applications.\n\nI have built a candidate outreach assistant using Crustdata APIs and can share my portfolio if useful.\n\nBest regards,\nShine',
    linkedinMessage:
      'Hi Aarav, I am exploring internship opportunities at Google and would love your guidance on the best application path. Open to connecting?',
  },
  {
    id: 'p2',
    name: 'Nina Thomas',
    role: 'HR Business Partner',
    company: 'Google',
    linkedin: 'https://www.linkedin.com/in/ninathomas/',
    email: 'nina.thomas@google.com',
    status: 'Contacted',
    score: 88,
    reason: 'Supports early-career hiring for product and engineering teams.',
    emailMessage:
      'Hi Nina,\n\nI am reaching out regarding internship opportunities at Google. I am currently building AI products and would appreciate your advice on where my profile best aligns in early-career roles.\n\nThanks for your time,\nShine',
    linkedinMessage:
      'Hi Nina, I am interested in Google internships and would appreciate quick guidance on role alignment for my profile.',
  },
  {
    id: 'p3',
    name: 'Rohan Iyer',
    role: 'Talent Sourcer',
    company: 'Google',
    linkedin: 'https://www.linkedin.com/in/rohaniyer/',
    email: 'rohan.iyer@google.com',
    status: 'Replied',
    score: 84,
    reason: 'Frequently hires intern and new-grad candidates for cloud teams.',
    emailMessage:
      'Hi Rohan,\n\nI noticed your work with Google Cloud hiring and wanted to ask for guidance on internship tracks related to developer tools. I can share my resume and projects for context.\n\nRegards,\nShine',
    linkedinMessage:
      'Hi Rohan, I saw your hiring focus in cloud teams. I would value your guidance on internship opportunities.',
  },
  {
    id: 'p4',
    name: 'Meera Kulkarni',
    role: 'University Programs Recruiter',
    company: 'Google',
    linkedin: 'https://www.linkedin.com/in/meera-kulkarni/',
    email: 'meera.kulkarni@google.com',
    status: 'Follow-up Needed',
    score: 90,
    reason: 'Owns intern intake and offer process for university programs.',
    emailMessage:
      'Hi Meera,\n\nI am looking for internship opportunities and would appreciate your guidance on timelines and best-fit teams. I have attached relevant work and research context in my profile.\n\nThank you,\nShine',
    linkedinMessage:
      'Hi Meera, I am interested in Google university programs and would love guidance on internship cycles.',
  },
  {
    id: 'p5',
    name: 'Karthik Menon',
    role: 'Staff Recruiter, AI',
    company: 'Google',
    linkedin: 'https://www.linkedin.com/in/karthik-menon/',
    email: 'karthik.menon@google.com',
    status: 'Not Contacted',
    score: 81,
    reason: 'Recruits for AI research and infra teams where your profile fits.',
    emailMessage:
      'Hi Karthik,\n\nI am interested in AI-focused internship opportunities at Google. My recent work includes LLM tooling and data infrastructure, and I would love advice on teams to target.\n\nBest,\nShine',
    linkedinMessage:
      'Hi Karthik, I am exploring AI internships at Google and would appreciate your guidance on team alignment.',
  },
  {
    id: 'p6',
    name: 'Simran Bedi',
    role: 'Talent Acquisition Partner',
    company: 'Google',
    linkedin: 'https://www.linkedin.com/in/simran-bedi/',
    email: 'simran.bedi@google.com',
    status: 'Contacted',
    score: 77,
    reason: 'Works across hiring initiatives and referral pathways in engineering.',
    emailMessage:
      'Hi Simran,\n\nI am currently applying for internship roles and wanted to ask for your guidance on standing out in Google engineering applications.\n\nThank you,\nShine',
    linkedinMessage:
      'Hi Simran, I am applying to Google internships and would appreciate advice on improving my candidacy.',
  },
]

export const templates = [
  {
    id: 't1',
    title: 'Internship ask',
    body:
      'Hi {first_name}, I am exploring internship opportunities at {company}. Based on your role in {department}, I would value your guidance on where my profile could fit best.',
  },
  {
    id: 't2',
    title: 'Referral ask',
    body:
      'Hi {first_name}, I admire your work at {company}. If you find my background relevant, I would be grateful for a referral to suitable roles.',
  },
  {
    id: 't3',
    title: 'Networking',
    body:
      'Hi {first_name}, I am building in this domain and would appreciate a short conversation to learn from your experience at {company}.',
  },
]
