import { Users, Clock, Award, MessageCircle, Brain, Globe } from 'lucide-react';

const softSkills = [
  { icon: Users, label: 'Teamwork' },
  { icon: Clock, label: 'Time Management' },
  { icon: Award, label: 'Leadership' },
  { icon: MessageCircle, label: 'Effective Communication' },
  { icon: Brain, label: 'Critical Thinking' },
];

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Sinhala', level: 'Native' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Passionate About <span className="gradient-text">Technology</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div className="glass-card p-8 hover-glow">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A detail-oriented undergraduate with strong skills in{' '}
                <span className="text-foreground font-medium">networking</span>,{' '}
                <span className="text-foreground font-medium">system administration</span>,{' '}
                <span className="text-foreground font-medium">cloud technologies</span>, and{' '}
                <span className="text-foreground font-medium">IT infrastructure</span>. Passionate about creating 
                high-performance and secure network solutions that drive organizational efficiency.
              </p>
            </div>

            {/* Languages */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-primary" size={24} />
                <h3 className="font-display text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex gap-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gradient-primary" />
                    <span className="text-foreground">{lang.name}</span>
                    <span className="text-muted-foreground text-sm">({lang.level})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Soft Skills */}
          <div className="glass-card p-8">
            <h3 className="font-display text-xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.label}
                  className="group p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
