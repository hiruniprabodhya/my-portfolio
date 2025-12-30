import { ExternalLink } from 'lucide-react';
import { certificatesData } from './achievementsData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Recognition
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="gradient-text">Badges</span>
          </h2>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            Professional Certificates
            <span className="w-8 h-1 bg-primary rounded-full"></span>
          </h3>
          
          <div className="max-w-6xl mx-auto px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {certificatesData.map((cert, index) => (
                  <CarouselItem key={cert.title} className="md:basis-1/2 lg:basis-1/2 pl-4">
                    <div className="h-full">
                      <div className="group glass-card overflow-hidden text-center hover-glow hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                        <div className="relative w-full aspect-[4/3] bg-muted shadow-sm">
                          <img 
                            src={cert.image} 
                            alt={cert.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                        </div>
                        
                        <div className="p-6 flex flex-col flex-1">
                          <h4 className="font-display font-bold mb-2 text-lg line-clamp-2">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                          
                          <div className="mt-auto pt-2">
                            {cert.link && (
                              <a 
                                href={cert.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline bg-primary/5 px-4 py-2 rounded-full hover:bg-primary/10 transition-colors"
                              >
                                View Certificate <ExternalLink size={14} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
