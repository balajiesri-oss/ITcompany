import {
  Bot,
  Brush,
  CheckCircle2,
  Cloud,
  Code2,
  DatabaseZap,
  Globe2,
  LifeBuoy,
  Rocket,
  ServerCog,
  ShoppingCart,
  Smartphone
} from 'lucide-react';

export const navItems = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Services', '/services'],
  ['Portfolio', '/portfolio'],
  ['Pricing', '/pricing'],
  ['Testimonials', '/testimonials'],
  ['Contact Us', '/contact']
];

export const services = [
  { title: 'Website Development', icon: Globe2, text: 'Conversion-focused corporate websites, landing pages, and CMS experiences.' },
  { title: 'E-commerce Development', icon: ShoppingCart, text: 'Secure stores with checkout, catalog, inventory, analytics, and automation.' },
  { title: 'Web Application Development', icon: Code2, text: 'Custom portals, SaaS platforms, dashboards, and workflow systems.' },
  { title: 'Mobile App Development', icon: Smartphone, text: 'Native-feeling iOS and Android apps with fast, reliable user journeys.' },
  { title: 'AI Chatbot Development', icon: Bot, text: 'Lead generation, support, FAQ, and internal knowledge assistants.' },
  { title: 'Cloud Solutions', icon: Cloud, text: 'Cloud-native architecture, migrations, backup, monitoring, and scaling.' },
  { title: 'DevOps Services', icon: ServerCog, text: 'CI/CD, containers, infrastructure automation, observability, and uptime.' },
  { title: 'UI/UX Design', icon: Brush, text: 'Research-led interfaces, design systems, prototypes, and usability improvements.' },
  { title: 'Software Maintenance', icon: LifeBuoy, text: 'Performance, security, feature updates, refactoring, and long-term support.' }
];

export const projects = [
  {
    title: 'FinEdge Banking Portal',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    result: 'Reduced loan application time by 42% and improved customer completion rates.'
  },
  {
    title: 'Shoply Commerce Suite',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    tech: ['Vite', 'Express', 'Stripe', 'Redis'],
    result: 'Launched a scalable store handling 18,000 monthly orders.'
  },
  {
    title: 'CareSync Mobile App',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    tech: ['React Native', 'Firebase', 'Node.js'],
    result: 'Enabled appointment booking and cut support calls by 31%.'
  },
  {
    title: 'OpsFlow DevOps Platform',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    tech: ['Docker', 'Kubernetes', 'GitHub Actions'],
    result: 'Deployment frequency improved from weekly to multiple times per day.'
  },
  {
    title: 'NovaAssist AI Support',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    tech: ['OpenAI', 'LangChain', 'PostgreSQL'],
    result: 'Automated 64% of repetitive support queries with lead handoff.'
  },
  {
    title: 'CloudPulse Analytics',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    tech: ['Next.js', 'Python', 'GCP', 'BigQuery'],
    result: 'Unified reporting across teams and saved 20 hours weekly.'
  }
];

export const pricing = [
  {
    name: 'Starter Package',
    price: '₹10,000+',
    description: 'Best for launch-ready business websites.',
    features: ['5-page responsive website', 'Contact form', 'Basic SEO setup', 'WhatsApp integration', '7 days support']
  },
  {
    name: 'Business Package',
    price: '₹25,000+',
    description: 'For growing teams that need richer workflows.',
    featured: true,
    features: ['Custom UI/UX design', 'CMS or admin panel', 'Payment or API integration', 'Analytics setup', '30 days support']
  },
  {
    name: 'Enterprise Package',
    price: 'Custom Pricing',
    description: 'For complex apps, cloud, AI, and DevOps delivery.',
    features: ['Discovery workshop', 'Scalable architecture', 'AI chatbot or automation', 'Cloud and DevOps', 'Dedicated support SLA']
  }
];

export const testimonials = [
  { name: 'Aarav Mehta', company: 'FinEdge Capital', rating: '5.0', text: 'TechNova turned a complex workflow into a clean, fast portal our team actually enjoys using.' },
  { name: 'Priya Shah', company: 'Shoply Retail', rating: '4.9', text: 'Their e-commerce build was polished, stable, and launched ahead of our campaign deadline.' },
  { name: 'Nikhil Rao', company: 'CareSync Health', rating: '5.0', text: 'The chatbot and mobile app reduced repetitive support work from the first week.' }
];

export const faqs = [
  ['How quickly can you start?', 'Most projects begin within 3-5 business days after discovery and scope confirmation.'],
  ['Do you provide maintenance?', 'Yes. We offer monthly maintenance, performance monitoring, security updates, and feature support.'],
  ['Can you build AI chatbots?', 'Yes. We build website chatbots for FAQs, lead capture, support, internal knowledge, and consultation scheduling.'],
  ['Do you deploy to Vercel or Render?', 'Yes. We can deploy frontend apps to Vercel and backend APIs to Render with PostgreSQL.']
];

export const blogPosts = [
  { title: 'How AI Chatbots Improve Lead Quality', date: 'June 12, 2026', tag: 'AI' },
  { title: 'Choosing the Right Cloud Setup for Startups', date: 'May 28, 2026', tag: 'Cloud' },
  { title: 'Website Performance Wins That Compound', date: 'May 16, 2026', tag: 'Web' }
];

export const stats = [
  ['120+', 'Projects shipped'],
  ['98%', 'Client satisfaction'],
  ['35%', 'Average process savings'],
  ['24/7', 'Monitoring ready']
];

export const whyChooseUs = [
  { icon: Rocket, title: 'Outcome-driven delivery', text: 'We plan around launch outcomes, adoption, and measurable business impact.' },
  { icon: DatabaseZap, title: 'Full-stack expertise', text: 'Strategy, design, code, cloud, DevOps, and maintenance from one team.' },
  { icon: CheckCircle2, title: 'Reliable execution', text: 'Clear milestones, clean communication, secure builds, and post-launch support.' }
];
