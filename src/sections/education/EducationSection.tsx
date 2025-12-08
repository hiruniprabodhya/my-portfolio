import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { educationData } from './educationData';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Academic Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/30" />

          {educationData.map((edu, index) => (
            <div
              key={edu.degree}
              className={`relative flex items-center gap-8 mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-primary glow z-10" />

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-5 hover-glow ${
                index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden ${edu.image ? 'bg-transparent' : 'bg-gradient-primary'}`}>
                    {edu.image ? (
                      <img src={edu.image} alt={edu.institution} className="w-full h-full object-contain" />
                    ) : (
                      <edu.icon className="text-primary-foreground" size={24} />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-base font-semibold mb-0.5">{edu.degree}</h3>
                    <p className="text-primary text-xs mb-1">{edu.specialization}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {edu.period}
                      </div>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium whitespace-nowrap self-start mt-1">
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
