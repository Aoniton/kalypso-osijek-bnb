import { Users, Clock, TrendingUp, MessageSquare } from 'lucide-react';

export const caseStudies = [
  {
    title: 'AI-Powered Lead Generation',
    company: 'TechFlow Solutions',
    description: 'Implemented AI outreach automation to streamline lead generation and follow-up processes.',
    metrics: [
      {
        before: '100 leads/month',
        after: '500+ leads/month',
        label: 'Lead Generation',
        icon: Users
      },
      {
        before: '4 hours/day',
        after: '30 mins/day',
        label: 'Time Spent',
        icon: Clock
      }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=50&h=50'
  },
  {
    title: 'Customer Support Automation',
    company: 'GlobalTech Inc',
    description: 'Deployed AI chatbots for 24/7 customer support, reducing response times and increasing satisfaction.',
    metrics: [
      {
        before: '24hr response',
        after: 'Instant',
        label: 'Response Time',
        icon: MessageSquare
      },
      {
        before: '70% satisfied',
        after: '95% satisfied',
        label: 'Customer Satisfaction',
        icon: TrendingUp
      }
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=400',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=50&h=50'
  }
];

export const testimonials = [
  {
    quote: "The Monk AI transformed our outreach strategy and doubled our leads within 2 months! Their AI solutions are truly game-changing.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "InnovateX",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    quote: "Implementing their AI customer support system has dramatically improved our response times and customer satisfaction.",
    author: "Michael Rodriguez",
    role: "Customer Success Manager",
    company: "TechFlow",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  }
];