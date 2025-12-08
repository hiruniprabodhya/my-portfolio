import { Code, BadgeCheck, Medal } from 'lucide-react';

export const certificatesData = [
  {
    image: 'img/pkt-certificate.jpg',
    title: 'CCNA Reading (200-301)',
    issuer: 'University of Moratuwa',
    color: 'from-primary to-blue-500',
    link: 'https://www.linkedin.com/posts/hiruniprabodhya_getting-started-with-cisco-packet-tracer-ugcPost-7403668614207225858-QTXQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQXFk0BwzhzhEd5LzxnHNHbjFzBoTL409I',
  },
  {
    image: '/placeholder.svg',
    title: 'UI/UX for Beginners',
    issuer: 'Great Learning Academy',
    color: 'from-accent to-teal-500',
    link: '#',
  },
  {
    image: '/placeholder.svg',
    title: 'Windows Networking',
    issuer: 'Udemy',
    color: 'from-purple-500 to-pink-500',
    link: '#',
  },
];

export const badgesData = [
  {
    icon: BadgeCheck,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    color: 'from-orange-400 to-yellow-500',
    link: '#',
  },
  {
    icon: Medal,
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    color: 'from-blue-400 to-cyan-500',
    link: '#',
  },
  {
    icon: Code,
    title: 'CodeQuest Initial Round',
    issuer: 'IEEE UCSC',
    color: 'from-red-500 to-pink-600',
    link: '#',
  },
];
