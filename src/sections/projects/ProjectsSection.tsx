import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projectsData } from './projectsData';

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;
  
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projectsData.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card overflow-hidden hover-glow"
            >
              {/* Project Header with Image */}
              <div className="h-48 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full glass text-primary-foreground text-xs font-medium backdrop-blur-sm">
                  {project.type}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="font-display text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.githubLink && (
                    <Button 
                      variant="glass" 
                      size="sm" 
                      className="gap-2"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github size={16} />
                      Code
                    </Button>
                  )}
                  {project.liveLink && (
                    <Button 
                      variant="gradient" 
                      size="sm" 
                      className="gap-2"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="glass"
              size="sm"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="gap-2"
            >
              <ChevronLeft size={16} />
              Previous
            </Button>
            
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
                    currentPage === page
                      ? 'bg-gradient-primary text-primary-foreground'
                      : 'glass hover:bg-secondary'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <Button
              variant="glass"
              size="sm"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="gap-2"
            >
              Next
              <ChevronRight size={16} />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
