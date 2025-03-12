
import React from 'react';
import { experiences } from '@/data/portfolioData';
import AnimatedSection from './AnimatedSection';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Professional Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional background includes working with diverse teams to deliver
              high-quality software solutions across various industries.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-border -ml-px"></div>
          
          {experiences.map((experience, index) => (
            <AnimatedSection 
              key={index} 
              delay={0.2 * index}
              direction={index % 2 === 0 ? 'right' : 'left'} 
              className="mb-12"
            >
              <div className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-background border-4 border-primary rounded-full -ml-4 md:-ml-4 mt-1 z-10"></div>
                
                {/* Content */}
                <div className="md:w-1/2 pl-12 md:pl-0 md:pr-12 md:text-right md:items-end">
                  <div className="bg-card border border-border/40 rounded-xl p-6 shadow-sm">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      {experience.period}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{experience.position}</h3>
                    <p className="text-base font-medium text-muted-foreground mb-3">{experience.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{experience.description}</p>
                    
                    <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty space for alignment on desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
