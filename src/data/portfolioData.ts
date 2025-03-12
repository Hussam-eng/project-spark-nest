
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  details: {
    challenge: string;
    solution: string;
    technologies: string[];
    highlights: string[];
  };
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

// Skills data
export const skills: Skill[] = [
  // Frontend
  { name: 'C#', category: 'backend' },
  { name: '.NET Core', category: 'backend' },
  { name: 'ASP.NET MVC', category: 'backend' },
  { name: 'Entity Framework', category: 'backend' },
  { name: 'LINQ', category: 'backend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Angular', category: 'frontend' },
  { name: 'Blazor', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  
  // Database
  { name: 'SQL Server', category: 'database' },
  { name: 'Azure SQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Redis', category: 'database' },
  
  // DevOps
  { name: 'Azure DevOps', category: 'devops' },
  { name: 'Docker', category: 'devops' },
  { name: 'Git', category: 'devops' },
  { name: 'CI/CD', category: 'devops' },
  
  // Tools
  { name: 'Visual Studio', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Postman', category: 'tools' },
  { name: 'Swagger', category: 'tools' },
];

// Projects data
export const projects: Project[] = [
  {
    id: 'healthcare-portal',
    title: 'Healthcare Patient Portal',
    description: 'A comprehensive patient management system built with .NET Core and React.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['C#', '.NET Core', 'React', 'SQL Server', 'Azure'],
    demoUrl: '#',
    githubUrl: '#',
    details: {
      challenge: 'Develop a secure, scalable patient portal allowing appointment scheduling, medical record access, and communication with healthcare providers.',
      solution: 'Built a .NET Core API with Entity Framework Core backend, coupled with a responsive React frontend. Implemented role-based authorization and HIPAA-compliant data security measures.',
      technologies: ['C#', '.NET Core 6.0', 'Entity Framework Core', 'React', 'Redux', 'SQL Server', 'Azure App Service', 'Azure Key Vault'],
      highlights: [
        'Reduced appointment scheduling time by 68% by implementing an intelligent scheduling algorithm',
        'Improved patient satisfaction scores by 42% through streamlined UI/UX',
        'Implemented end-to-end encryption for all patient data',
        'Integrated with existing EMR systems through custom middleware',
      ]
    }
  },
  {
    id: 'e-commerce',
    title: 'E-Commerce Platform',
    description: 'A scalable e-commerce solution with microservices architecture.',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['C#', '.NET 6', 'Microservices', 'Docker', 'SQL Server', 'RabbitMQ'],
    demoUrl: '#',
    githubUrl: '#',
    details: {
      challenge: 'Create a high-performance e-commerce platform capable of handling high transaction volumes with separate services for inventory, orders, payments, and user management.',
      solution: 'Designed a microservices architecture using .NET 6 with each service having its own database. Implemented message queuing with RabbitMQ for inter-service communication and Docker for containerization.',
      technologies: ['C#', '.NET 6', 'ASP.NET Web API', 'Entity Framework Core', 'SQL Server', 'Redis', 'Docker', 'RabbitMQ', 'Angular', 'Azure'],
      highlights: [
        'Processed 10,000+ concurrent orders during peak traffic periods',
        'Achieved 99.99% uptime through robust microservices architecture',
        'Implemented CQRS pattern for improved read/write performance',
        'Developed a comprehensive monitoring system using Application Insights'
      ]
    }
  },
  {
    id: 'finance-dashboard',
    title: 'Financial Analytics Dashboard',
    description: 'Real-time financial data visualization platform for investment analysts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['C#', 'ASP.NET Core', 'Blazor', 'SignalR', 'SQL Server', 'Chart.js'],
    demoUrl: '#',
    githubUrl: '#',
    details: {
      challenge: 'Develop a real-time dashboard to visualize complex financial data sets, with customizable widgets and real-time updates for investment professionals.',
      solution: 'Created a Blazor WebAssembly application with SignalR for real-time updates. Implemented a modular widget system allowing users to customize their dashboard layout and data displays.',
      technologies: ['C#', 'ASP.NET Core', 'Blazor WebAssembly', 'SignalR', 'SQL Server', 'Entity Framework Core', 'Chart.js', 'Azure'],
      highlights: [
        'Achieved sub-second data refresh rates for real-time market data',
        'Implemented drag-and-drop dashboard customization',
        'Created 20+ financial visualization widgets',
        'Developed data export functionality supporting multiple formats'
      ]
    }
  }
];

// Experience data
export const experiences: Experience[] = [
  {
    company: 'FinTech Solutions',
    position: 'Senior .NET Developer',
    period: 'Jan 2022 - Present',
    description: 'Leading development of financial software solutions using .NET Core and Azure.',
    achievements: [
      'Designed and implemented a microservices architecture that reduced system response time by 40%',
      'Led a team of 5 developers to deliver a trading platform that processes $10M+ in daily transactions',
      'Optimized database queries resulting in 60% faster report generation',
      'Implemented CI/CD pipelines that reduced deployment time from days to hours'
    ]
  },
  {
    company: 'HealthCare Systems Inc.',
    position: '.NET Developer',
    period: 'Mar 2019 - Dec 2021',
    description: 'Developed healthcare management applications using .NET framework and SQL Server.',
    achievements: [
      'Built a patient management system used by 500+ healthcare professionals',
      'Implemented secure data exchange protocols compliant with HIPAA regulations',
      'Reduced application load time by 50% through code optimization',
      'Developed RESTful APIs consumed by mobile and web applications'
    ]
  },
  {
    company: 'Tech Innovations LLC',
    position: 'Junior .NET Developer',
    period: 'Jun 2017 - Feb 2019',
    description: 'Worked on various web applications using ASP.NET MVC and Entity Framework.',
    achievements: [
      'Contributed to the development of 10+ web applications for enterprise clients',
      'Refactored legacy code, improving maintainability and reducing bugs by 30%',
      'Implemented responsive designs using Bootstrap and modern CSS techniques',
      'Collaborated with UI/UX designers to improve user experience'
    ]
  }
];

// Contact information
export const contactInfo = {
  email: 'developer@example.com',
  phone: '+1 (555) 123-4567',
  github: 'github.com/dotnet-developer',
  linkedin: 'linkedin.com/in/dotnet-developer'
};
