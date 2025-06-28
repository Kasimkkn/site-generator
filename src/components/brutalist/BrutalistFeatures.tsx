
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Grid3X3, Rocket, Users } from 'lucide-react';

const BrutalistFeatures: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: "CODE-FREE CHAOS",
      description: "Build without boundaries. Drag, drop, destroy conventions.",
      color: "lime-400",
      rotation: -2
    },
    {
      icon: Palette,
      title: "BRUTAL DESIGN",
      description: "Templates that break rules. Colors that clash. Beauty in chaos.",
      color: "pink-500",
      rotation: 3
    },
    {
      icon: Zap,
      title: "LIGHTNING FAST",
      description: "Deploy at the speed of rebellion. Instant gratification guaranteed.",
      color: "orange-500",
      rotation: -1
    },
    {
      icon: Grid3X3,
      title: "GRID DESTROYER",
      description: "Break every layout rule. Asymmetry is your new best friend.",
      color: "lime-400",
      rotation: 2
    },
    {
      icon: Rocket,
      title: "EXPORT FREEDOM",
      description: "Your code, your rules. Export and host anywhere you want.",
      color: "pink-500",
      rotation: -3
    },
    {
      icon: Users,
      title: "REBEL COMMUNITY",
      description: "Join the uprising. Share chaos. Inspire digital anarchy.",
      color: "orange-500",
      rotation: 1
    }
  ];

  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Chaotic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lime-400/10 transform rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pink-500/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-32 h-96 bg-orange-500/10 transform -rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Broken header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end"
          >
            <div>
              <h2 className="text-6xl md:text-8xl font-black leading-none">
                <span className="block text-white transform -rotate-1">DESTROY</span>
                <span className="block text-lime-400 transform rotate-2">DESIGN</span>
              </h2>
            </div>
            <div className="transform rotate-1">
              <p className="text-xl text-gray-300 leading-relaxed">
                CONVENTIONAL WEBSITES ARE DEAD. WE'RE BUILDING THE FUTURE OF WEB REBELLION.
              </p>
              <div className="mt-4 w-20 h-1 bg-pink-500 transform -rotate-12" />
            </div>
          </motion.div>
        </div>

        {/* Chaotic feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotate: feature.rotation * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: feature.rotation }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: feature.rotation * -1,
                  transition: { duration: 0.3 }
                }}
                className={`relative bg-black border-4 border-${feature.color} p-8 transform hover:border-white transition-all duration-300`}
                style={{ transform: `rotate(${feature.rotation}deg)` }}
              >
                {/* Background chaos */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-${feature.color} opacity-20 transform rotate-45`} />
                
                <div className="relative z-10">
                  <Icon className={`w-12 h-12 text-${feature.color} mb-6`} />
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Overlapping accent */}
                <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-${feature.color} transform rotate-12`} />
              </motion.div>
            );
          })}
        </div>

        {/* Chaotic stats section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: "99%", label: "FASTER THAN WORDPRESS", rotation: -2 },
            { number: "0", label: "CODING REQUIRED", rotation: 3 },
            { number: "∞", label: "DESIGN POSSIBILITIES", rotation: -1 },
            { number: "24/7", label: "REBELLION SUPPORT", rotation: 2 }
          ].map((stat, index) => (
            <div key={index} className={`text-center transform rotate-[${stat.rotation}deg]`}>
              <div className="text-4xl font-black text-lime-400 mb-2">{stat.number}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrutalistFeatures;
