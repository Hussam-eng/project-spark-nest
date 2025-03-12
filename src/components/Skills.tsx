
import React from 'react';
import { skills } from '@/data/portfolioData';
import AnimatedSection from './AnimatedSection';

const Skills: React.FC = () => {
  // Group skills by category
  const categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    devops: 'DevOps',
    tools: 'Tools'
  };
  
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Technical Proficiency
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With a strong foundation in .NET development and a comprehensive toolkit of technologies,
              I build scalable, maintainable applications for diverse business needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <AnimatedSection key={category} delay={0.1 * categoryIndex}>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {category === 'frontend' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path>
                      </svg>
                    )}
                    {category === 'backend' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line>
                      </svg>
                    )}
                    {category === 'database' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                      </svg>
                    )}
                    {category === 'devops' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M12 3v19"></path><path d="M5 8h14"></path><path d="M15 5h-2.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3H9"></path>
                      </svg>
                    )}
                    {category === 'tools' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M3 22v-3a8 8 0 0 1 16 0v3"></path><path d="M7 10v2a6 6 0 0 0 11.33 2.75"></path><circle cx="12" cy="5" r="2"></circle><path d="m16.24 7.76 5.52 5.52-1.41 1.41-5.52-5.52"></path><path d="M21 12a9 9 0 0 1-9 9"></path>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold">{categoryNames[category as keyof typeof categoryNames]}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span 
                      key={skill.name}
                      className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
