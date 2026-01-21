import { Linkedin, Mail, Heart, Github, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <img src="/img/hp-logo.png" alt="HP Logo" className="h-8" />

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/hiruniprabodhya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
            >
              <Linkedin size={18} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:amprabodhya@gmail.com"
              className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
            >
              <Mail size={18} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://github.com/hiruniprabodhya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
            >
              <Github size={18} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.facebook.com/hiruni.prabodhya.987966/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass hover:bg-primary/20 transition-colors"
            >
              <Facebook size={18} className="text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Hiruni Prabodhya.
            
          </p>
        </div>
      </div>
    </footer>
  );
}
