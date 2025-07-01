
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BoardGallery from '@/components/BoardGallery';
import Contact from '@/components/Contact';
import About from '@/components/About';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <BoardGallery />
      <About />
      <Contact />
      
    </div>
  );
};

export default Index; 