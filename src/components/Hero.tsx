
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-10 z-0"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <AnimatedSection delay={0.1}>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                Full Stack .NET Developer
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Building robust web solutions with .NET & modern tech
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.5}>
              <p className="text-lg text-muted-foreground">
                I specialize in creating end-to-end applications using C#, .NET Core, and modern 
                JavaScript frameworks. With a passion for clean architecture and scalable systems, 
                I turn complex business requirements into elegant solutions.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.7}>
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  href="#projects" 
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Contact Me
                </a>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.9}>
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((_, i) => (
                    <div 
                      key={i}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 border-background",
                        i === 0 ? "bg-blue-500" : i === 1 ? "bg-green-500" : "bg-purple-500"
                      )}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by leading <span className="font-medium text-foreground">tech companies</span>
                </p>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <AnimatedSection delay={0.5} direction="left">
              <div className="relative mx-auto">
                <div className="w-full h-full max-w-md aspect-square rounded-3xl bg-gradient-to-r from-primary/20 to-primary/10 p-1 backdrop-blur">
                  <div className="w-full h-full rounded-[22px] bg-card flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1300&q=80" 
                      alt="Developer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-4">
                  <span className="text-3xl font-bold">5+</span>
                  <span className="text-xs text-muted-foreground text-center">Years of Experience</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
