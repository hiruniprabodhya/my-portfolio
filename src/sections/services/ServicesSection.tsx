import { servicesData } from './servicesData';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            What I Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining technical expertise with a passion for learning to deliver quality solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-8 hover-glow hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-primary-foreground" size={28} />
                </div>
                <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-primary blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
