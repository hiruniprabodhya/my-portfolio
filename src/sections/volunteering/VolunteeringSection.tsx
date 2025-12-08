import { volunteeringData } from './volunteeringData';

export default function VolunteeringSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Community
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Volunteering</span> & Activities
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {volunteeringData.map((vol, index) => (
            <div
              key={vol.role}
              className="group glass-card p-6 hover-glow transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <vol.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold mb-1">{vol.role}</h3>
              <p className="text-primary text-sm mb-3">{vol.organization}</p>
              <p className="text-sm text-muted-foreground">{vol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
