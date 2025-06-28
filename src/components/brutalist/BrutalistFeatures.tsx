
import { motion } from 'framer-motion';
import { Code, Eye, Layers, Palette, Smartphone, Zap } from 'lucide-react';
import React from 'react';

const BrutalistFeatures: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: "CODE-FREE CHAOS",
      description: "Build without boundaries. Drag, drop, destroy conventions.",
      color: "lime-400",
      rotation: -2,
      detail: "Visual editor that breaks all rules"
    },
    {
      icon: Palette,
      title: "BRUTAL DESIGN",
      description: "Templates that break rules. Colors that clash. Beauty in chaos.",
      color: "pink-500",
      rotation: 3,
      detail: "Anti-design design system"
    },
    {
      icon: Zap,
      title: "LIGHTNING FAST",
      description: "Deploy at the speed of rebellion. Instant gratification guaranteed.",
      color: "orange-500",
      rotation: -1,
      detail: "Sub-second deployment"
    },
    {
      icon: Eye,
      title: "VISUAL ANARCHY",
      description: "See your chaos come to life in real-time. No refresh needed.",
      color: "lime-400",
      rotation: 2,
      detail: "Live preview everything"
    },
    {
      icon: Layers,
      title: "COMPONENT REBELLION",
      description: "Pre-built chaos blocks. Mix, match, and mutate at will.",
      color: "pink-500",
      rotation: -3,
      detail: "50+ brutal components"
    },
    {
      icon: Smartphone,
      title: "RESPONSIVE CHAOS",
      description: "Your rebellion works everywhere. Mobile-first anarchy.",
      color: "orange-500",
      rotation: 1,
      detail: "Adaptive breakpoints"
    }
  ];

  return (
    <section className="py-40 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-400/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10"
          animate={{
            rotate: [0, 45, 90, 45, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
            <div className="lg:col-span-2">
              <h2 className="text-6xl md:text-7xl lg:text-[6rem] font-black leading-none">
                <motion.span
                  className="block text-white"
                  whileInView={{ x: [100, 0] }}
                  transition={{ duration: 0.8 }}
                >
                  DESTROY
                </motion.span>
                <motion.span
                  className="block text-lime-400 -ml-8"
                  whileInView={{ x: [-100, 0] }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  DESIGN
                </motion.span>
                <motion.span
                  className="block text-pink-500 ml-8"
                  whileInView={{ x: [100, 0] }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  RULES
                </motion.span>
              </h2>
            </div>
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl text-gray-300 leading-relaxed font-bold">
                CONVENTIONAL WEBSITES ARE DEAD. WE'RE BUILDING THE FUTURE OF WEB REBELLION.
              </p>
              <motion.div
                className="mt-6 w-24 h-2 bg-pink-500"
                animate={{ width: [96, 120, 96] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                  rotate: 0,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className={`relative bg-black border-4 border-${feature.color} p-8 h-full overflow-hidden`}>
                  {/* Animated Background Element */}
                  <motion.div
                    className={`absolute top-0 right-0 w-20 h-20 bg-${feature.color} opacity-20`}
                    animate={{
                      rotate: [45, 225, 45],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: [0, 360] }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-16 h-16 text-${feature.color} mb-6`} />
                    </motion.div>

                    <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 text-base leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileHover={{ opacity: 1, height: "auto" }}
                      className="overflow-hidden"
                    >
                      <div className={`text-${feature.color} text-sm font-bold uppercase tracking-wide border-t border-${feature.color}/30 pt-4`}>
                        {feature.detail}
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Effect Element */}
                  <motion.div
                    className={`absolute -bottom-2 -right-2 w-0 h-0 bg-${feature.color} group-hover:w-12 group-hover:h-12 transition-all duration-300`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { number: "99%", label: "FASTER THAN WORDPRESS", rotation: -2, color: "lime-400" },
            { number: "0", label: "CODING REQUIRED", rotation: 3, color: "pink-500" },
            { number: "∞", label: "DESIGN POSSIBILITIES", rotation: -1, color: "orange-500" },
            { number: "24/7", label: "REBELLION SUPPORT", rotation: 2, color: "lime-400" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center transform rotate-[${stat.rotation}deg]`}
              whileHover={{ scale: 1.1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`text-5xl font-black text-${stat.color} mb-2`}
                animate={{
                  textShadow: [
                    "0 0 0px rgba(163, 230, 53, 0.5)",
                    "0 0 20px rgba(163, 230, 53, 0.5)",
                    "0 0 0px rgba(163, 230, 53, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-xs text-gray-400 uppercase tracking-wide font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrutalistFeatures;
