
import React, { useState } from 'react';
import { Project } from '@/data/portfolioData';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <AnimatedSection delay={0.2 * index} className="group relative">
      <div 
        className={cn(
          "relative overflow-hidden rounded-xl transition-all duration-500",
          showDetails ? "bg-card shadow-lg" : "bg-accent/50"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Image section */}
          <div 
            className={cn(
              "relative overflow-hidden transition-all duration-500",
              showDetails ? "h-40" : "h-64"
            )}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            {/* Tags */}
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 bg-primary/80 backdrop-blur-sm text-white text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-1 bg-white/30 backdrop-blur-sm text-white text-xs rounded-full">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </div>
          
          {/* Content section */}
          <div className="p-5 flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            
            {/* Details section */}
            <div className={cn(
              "transition-all duration-500 overflow-hidden",
              showDetails ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            )}>
              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="text-sm font-semibold mb-1">Challenge</h4>
                  <p className="text-sm text-muted-foreground">{project.details.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-1">Solution</h4>
                  <p className="text-sm text-muted-foreground">{project.details.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-1">Key Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.details.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-accent rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-1">Highlights</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {project.details.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Links */}
              <div className="flex space-x-3 mt-6">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-white text-sm font-medium transition-colors hover:bg-primary/90"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-9 px-4 rounded-md border border-input bg-background text-sm font-medium transition-colors hover:bg-accent"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
            
            {/* Toggle button */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className={cn(
                "mt-auto self-start text-sm font-medium flex items-center gap-1 transition-colors",
                showDetails ? "text-primary" : "text-muted-foreground"
              )}
            >
              {showDetails ? "Show Less" : "Show More"}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={cn(
                  "transition-transform duration-300",
                  showDetails ? "rotate-180" : ""
                )}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectCard;
