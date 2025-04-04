
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import Craftsmanship from '@/components/Craftsmanship';
import Sustainability from '@/components/Sustainability';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import CategoryBanner from '@/components/CategoryBanner';
import QualitySection from '@/components/QualitySection';
import WhyChooseUs from '@/components/WhyChooseUs';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

const Index: React.FC = () => {
  const { toast } = useToast();
  
  // Scroll restoration
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Display welcome toast
  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome');
    
    if (!hasSeenWelcome) {
      setTimeout(() => {
        toast({
          title: "Welcome to KLASSICO",
          description: "Discover our premium collections, handcrafted for the modern connoisseur",
          duration: 5000,
        });
        sessionStorage.setItem('hasSeenWelcome', 'true');
      }, 2000);
    }
  }, [toast]);

  // Add smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#') && link.pathname === window.location.pathname) {
        e.preventDefault();
        
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
          
          // Update URL without page jump
          window.history.pushState(null, '', link.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Category Banners */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CategoryBanner 
              image="https://images.unsplash.com/photo-1623880840102-7df0a9f3545b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              title="Men's Collection"
              category="men"
              isNew={true}
            />
            <CategoryBanner 
              image="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop"
              title="Women's Collection"
              category="women"
              isNew={true}
            />
          </div>
        </div>
      </section>
      
      <Collections />
      <QualitySection />
      <WhyChooseUs />
      <Craftsmanship />
      <Sustainability />
      <Testimonials />
      <CTASection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
