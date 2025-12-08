import { Briefcase, Building, Calendar } from 'lucide-react';
import { experienceData } from './experienceData';

export default function ExperienceSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Career
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp) => (
            <div key={exp.title} className="glass-card p-8 hover-glow">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Image */}
                <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-white">
                  <img 
                    src={exp.image} 
                    alt={exp.company} 
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary">
                        <Building size={16} />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-primary mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
