
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Grid3X3, Palette, Code, Rocket, Users } from 'lucide-react';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';
import BrutalistHero from '@/components/brutalist/BrutalistHero';
import BrutalistFeatures from '@/components/brutalist/BrutalistFeatures';
import BrutalistTestimonials from '@/components/brutalist/BrutalistTestimonials';
import BrutalistPricing from '@/components/brutalist/BrutalistPricing';
import BrutalistFooter from '@/components/brutalist/BrutalistFooter';

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [currentView, setCurrentView] = useState<'login' | 'register' | 'forgot' | 'reset'>('login');
  const [userEmail, setUserEmail] = useState('');

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const handleViewChange = (view: 'login' | 'register' | 'forgot' | 'reset', email?: string) => {
    setCurrentView(view);
    if (email) setUserEmail(email);
  };

  const handleGetStarted = () => {
    setShowAuth(true);
  };

  if (showAuth) {
    return (
      <div className="h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex">
        {/* Left Side - Scenic Background */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-10" />
          <img
            src="/images/login.jpg"
            alt="Scenic mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 z-20 text-white">
            <h1 className="text-4xl font-bold mb-2">DevBuilder</h1>
            <p className="text-xl opacity-90">Digital Rebellion Meets Creative Freedom</p>
            <div className="flex space-x-2 mt-4">
              <div className="w-8 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Forms */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <button
              onClick={() => setShowAuth(false)}
              className="mb-4 text-white/70 hover:text-white flex items-center gap-2 transition-colors"
            >
              ← Back to Landing
            </button>
            {currentView === 'login' && (
              <LoginForm onViewChange={handleViewChange} />
            )}
            {currentView === 'register' && (
              <RegisterForm onViewChange={handleViewChange} />
            )}
            {currentView === 'forgot' && (
              <ForgotPasswordForm onViewChange={handleViewChange} />
            )}
            {currentView === 'reset' && (
              <ResetPasswordForm userEmail={userEmail} onViewChange={handleViewChange} />
            )}
          </div>
        </div>
      </div>
    );
  }

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
