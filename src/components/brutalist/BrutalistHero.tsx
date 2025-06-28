
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Grid3X3 } from 'lucide-react';

interface BrutalistHeroProps {
  onGetStarted: () => void;
}

const BrutalistHero: React.FC<BrutalistHeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-lime-400/20" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - Chaotic Layout */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Overlapping Typography */}
              <div className="relative">
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-none">
                  <span className="block text-white transform -rotate-2">BUILD</span>
                  <span className="block text-lime-400 transform rotate-1 -mt-4">BREAK</span>
                  <span className="block text-pink-500 transform -rotate-1 -mt-4">REBEL</span>
                </h1>

                {/* Overlapping accent text */}
                <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 rotate-12">
                  <span className="text-orange-500 text-2xl font-black opacity-80">WEBSITES</span>
                </div>
              </div>

              {/* Broken grid description */}
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <p className="text-xl text-gray-300 leading-relaxed">
                    ESCAPE THE ORDINARY. CREATE WEBSITES THAT SCREAM DIGITAL REBELLION.
                    NO RULES. NO LIMITS. PURE CREATIVE CHAOS.
                  </p>
                </div>
                <div className="transform rotate-12 mt-8">
                  <Zap className="w-16 h-16 text-lime-400" />
                </div>
              </div>
            </motion.div>

            {/* Chaotic CTA Section */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 items-start"
            >
              <motion.button
                onClick={onGetStarted}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-lime-400 text-black px-12 py-6 text-2xl font-black uppercase tracking-wide hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:-rotate-1"
              >
                <span className="relative z-10 flex items-center gap-3">
                  START BUILDING
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-orange-500 transform translate-x-1 translate-y-1 -z-10" />
              </motion.button>

              <div className="transform rotate-6 mt-4">
                <div className="bg-pink-500 text-white px-4 py-2 font-black text-sm uppercase">
                  FREE FOREVER
                </div>
              </div>
            </motion.div>

            {/* Stats in broken grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-16"
            >
              <div className="transform -rotate-2">
                <div className="text-4xl font-black text-lime-400">500K+</div>
                <div className="text-sm text-gray-400 uppercase">REBELS</div>
              </div>
              <div className="transform rotate-2 mt-8">
                <div className="text-4xl font-black text-pink-500">1M+</div>
                <div className="text-sm text-gray-400 uppercase">SITES BUILT</div>
              </div>
              <div className="transform -rotate-1">
                <div className="text-4xl font-black text-orange-500">ZERO</div>
                <div className="text-sm text-gray-400 uppercase">LIMITS</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Overlapping Visual Elements */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative"
            >
              {/* Main Preview */}
              <div className="relative bg-gray-900 p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-black p-6 border-2 border-lime-400">
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-8 ${i % 3 === 0 ? 'bg-lime-400' :
                          i % 3 === 1 ? 'bg-pink-500' : 'bg-orange-500'
                          }`}
                      />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-700 w-3/4" />
                    <div className="h-4 bg-gray-700 w-1/2" />
                    <div className="h-4 bg-gray-700 w-2/3" />
                  </div>
                </div>
              </div>

              {/* Overlapping elements */}
              <div className="absolute -top-4 -right-4 bg-pink-500 p-4 transform rotate-12">
                <Grid3X3 className="w-8 h-8 text-white" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-orange-500 p-3 transform -rotate-12">
                <span className="text-white font-black text-xs">BRUTAL</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Chaotic floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-lime-400 transform rotate-45 animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-pink-500 rounded-full animate-bounce" />
      <div className="absolute bottom-1/4 left-1/3 w-8 h-2 bg-orange-500 transform -rotate-45" />
    </section>
  );
};

export default BrutalistHero;
