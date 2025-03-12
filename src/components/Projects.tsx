
import React from 'react';
import { projects } from '@/data/portfolioData';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              My Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore a selection of my best work that demonstrates my technical expertise
              and problem-solving abilities in .NET development.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
