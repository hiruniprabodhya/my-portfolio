import { Package, Globe } from 'lucide-react';

export const projectsData = [
  {
    title: 'Smart Postal Delivery Management System',
    type: 'Group Project',
    description:
      'Web-based solution with parcel tracking using QR/barcodes, real-time status updates, role-based access control, and admin analytics dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Railway'],
    icon: Package,
    image: '/img/group-project.png',
    gradient: 'from-primary via-blue-500 to-cyan-500',
    githubLink: 'https://github.com/hiruniprabodhya/smart-postal-managment-system',
    liveLink: 'https://smart-postal-managment-system.vercel.app',
  },
  {
    title: 'Portfolio Website',
    type: 'Personal Project',
    description:
      'Responsive portfolio website showcasing skills and projects with smooth navigation and adaptive layouts across all devices.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: Globe,
    image: '/img/portfolio-project.png',
    gradient: 'from-accent via-teal-500 to-emerald-500',
    githubLink: 'https://github.com/hiruniprabodhya/my-portfolio',
    liveLink: 'https://www.hiruniprabodhya.me',
  },
  {
    title: 'E-Commerce Platform',
    type: 'Personal Project',
    description:
      'A full-featured e-commerce platform with product management, shopping cart, and secure checkout integration.',
    technologies: ['React', 'Redux', 'Firebase'],
    icon: Globe,
    image: '/img/project-img.png',
    gradient: 'from-purple-500 via-pink-500 to-red-500',
    githubLink: 'https://github.com/yourusername/ecommerce',
    liveLink: '',
  },
  {
    title: 'Task Management App',
    type: 'Personal Project',
    description:
      'Productivity application for managing daily tasks with drag-and-drop functionality and progress tracking.',
    technologies: ['Vue.js', 'Firebase', 'Tailwind'],
    icon: Package,
    image: '/img/project-img.png',
    gradient: 'from-green-400 via-emerald-500 to-teal-600',
    githubLink: 'https://github.com/yourusername/task-manager',
    liveLink: '',
  },
  {
    title: 'Weather Dashboard',
    type: 'Personal Project',
    description:
      'Real-time weather dashboard providing current conditions and forecasts for multiple cities using OpenWeatherMap API.',
    technologies: ['React', 'TypeScript', 'API Integration'],
    icon: Globe,
    image: '/img/project-img.png',
    gradient: 'from-blue-400 via-indigo-500 to-violet-600',
    githubLink: 'https://github.com/yourusername/weather-app',
    liveLink: '',
  },

];
