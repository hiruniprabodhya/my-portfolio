import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { contactInfo } from './contactData';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold mb-6">Contact Information</h3>
            
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href || undefined}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-4 p-4 glass-card hover-glow transition-all duration-300 ${
                  item.href ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="font-display text-xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200 resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Your message here..."
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
