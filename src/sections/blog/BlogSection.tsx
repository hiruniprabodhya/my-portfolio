import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from './blogData';

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary font-medium mb-4">
            Articles
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and experiences from my journey in networking and cloud technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group glass-card overflow-hidden hover-glow transition-all duration-300"
            >
              {/* Gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${post.gradient}`} />
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary hover:bg-transparent">
                    Read More
                    <ArrowUpRight size={16} className="ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
