
import BrutalistFeatures from '@/components/brutalist/BrutalistFeatures';
import BrutalistFooter from '@/components/brutalist/BrutalistFooter';
import BrutalistHero from '@/components/brutalist/BrutalistHero';
import BrutalistPricing from '@/components/brutalist/BrutalistPricing';
import BrutalistTestimonials from '@/components/brutalist/BrutalistTestimonials';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const handleGetStarted = () => {
    navigate('/auth');
  };

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-lime-500 via-pink-500 to-orange-500 opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-30" />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-lime-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <div className="text-2xl font-black text-lime-400 tracking-tight">
                DEV<span className="text-pink-500">BUILDER</span>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={handleGetStarted}
              className="bg-lime-400 text-black px-6 py-2 font-black uppercase tracking-wide hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:rotate-1"
            >
              GET STARTED
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <BrutalistHero onGetStarted={handleGetStarted} />

      {/* Features Section */}
      <BrutalistFeatures />

      {/* Testimonials Section */}
      <BrutalistTestimonials />

      {/* Pricing Section */}
      <BrutalistPricing onGetStarted={handleGetStarted} />

      {/* Footer */}
      <BrutalistFooter />
    </div>
  );
};

export default Index;
