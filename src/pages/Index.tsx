import Navbar from '@/layout/Navbar';
import HeroSection from '@/sections/hero/HeroSection';
import AboutSection from '@/sections/about/AboutSection';
import ServicesSection from '@/sections/services/ServicesSection';
import ProjectsSection from '@/sections/projects/ProjectsSection';
import EducationSection from '@/sections/education/EducationSection';
import ExperienceSection from '@/sections/experience/ExperienceSection';
import AchievementsSection from '@/sections/achievements/AchievementsSection';
import VolunteeringSection from '@/sections/volunteering/VolunteeringSection';
import BlogSection from '@/sections/blog/BlogSection';
import ContactSection from '@/sections/contact/ContactSection';
import Footer from '@/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <AchievementsSection />
        <VolunteeringSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
