import { Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32">
          {/* Portrait */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-xl animate-glow-pulse" />
              <div className="absolute inset-2 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 rounded-full border border-accent/20" />
              
              {/* Image container */}
              <div className="absolute inset-6 rounded-full overflow-hidden glass-card p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img 
                    src="/img/hiruni.png" 
                    alt="Hiruni Prabodhya" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl lg:ml-8">
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-6">
                Available for Opportunities
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Hi, I'm{' '}
              <span className="gradient-text">Hiruni Prabodhya</span>
            </h1>

            <h2 className="font-display text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Undergraduate in Network Technology
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Motivated networking and cloud technology enthusiast building secure and efficient IT solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Projects</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <Linkedin size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:amprabodhya@gmail.com"
                className="p-3 rounded-full glass hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <Mail size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="tel:+94705965899"
                className="p-3 rounded-full glass hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <Phone size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-4 animate-bounce">
          <a href="#about" className="p-3 rounded-full glass hover:bg-primary/10 transition-colors">
            <ArrowDown size={20} className="text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
