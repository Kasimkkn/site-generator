
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

interface BrutalistPricingProps {
  onGetStarted: () => void;
}

const BrutalistPricing: React.FC<BrutalistPricingProps> = ({ onGetStarted }) => {
  const plans = [
    {
      name: "CHAOS STARTER",
      price: "FREE",
      description: "FOR DIGITAL REBELS JUST BEGINNING THEIR JOURNEY",
      features: [
        "3 BRUTAL WEBSITES",
        "BASIC CHAOS TEMPLATES", 
        "COMMUNITY SUPPORT",
        "EXPORT HTML/CSS"
      ],
      icon: Zap,
      color: "lime-400",
      rotation: -2,
      popular: false
    },
    {
      name: "DESTROYER PRO",
      price: "$19",
      period: "/MONTH",
      description: "FOR SERIOUS WEBSITE ANARCHISTS",
      features: [
        "UNLIMITED WEBSITES",
        "PREMIUM BRUTAL TEMPLATES",
        "ADVANCED CHAOS TOOLS",
        "PRIORITY SUPPORT",
        "CUSTOM DOMAIN",
        "TEAM COLLABORATION"
      ],
      icon: Crown,
      color: "pink-500",
      rotation: 2,
      popular: true
    },
    {
      name: "AGENCY CHAOS",
      price: "$99",
      period: "/MONTH",
      description: "FOR DIGITAL REBELLION AGENCIES",
      features: [
        "EVERYTHING IN PRO",
        "WHITE LABEL SOLUTION",
        "CLIENT MANAGEMENT",
        "ADVANCED ANALYTICS",
        "API ACCESS",
        "DEDICATED SUPPORT"
      ],
      icon: Rocket,
      color: "orange-500",
      rotation: -1,
      popular: false
    }
  ];

  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Chaotic background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-4 bg-lime-400/10 transform -rotate-45" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/5 transform rotate-12" />
        <div className="absolute top-1/2 right-1/3 w-8 h-96 bg-orange-500/10 transform rotate-45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brutal header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-6xl md:text-8xl font-black leading-none mb-8">
            <span className="block text-white transform -rotate-1">CHOOSE</span>
            <span className="block text-lime-400 transform rotate-2">YOUR</span>
            <span className="block text-pink-500 transform -rotate-1">CHAOS</span>
          </h2>
          <div className="transform rotate-1">
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              NO HIDDEN FEES. NO BORING PLANS. JUST PURE DIGITAL REBELLION PRICING.
            </p>
          </div>
        </motion.div>

        {/* Pricing cards in chaotic layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotate: plan.rotation * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: plan.rotation }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  transition: { duration: 0.3 }
                }}
                className={`relative ${plan.popular ? 'lg:-mt-8' : ''}`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 rotate-12">
                    <div className="bg-pink-500 text-white px-4 py-2 font-black text-sm uppercase">
                      MOST BRUTAL
                    </div>
                  </div>
                )}

                <div 
                  className={`bg-black border-4 border-${plan.color} p-8 h-full relative ${
                    plan.popular ? 'border-pink-500' : ''
                  }`}
                  style={{ transform: `rotate(${plan.rotation}deg)` }}
                >
                  {/* Background chaos element */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-${plan.color} opacity-10 transform rotate-45`} />
                  
                  <div className="relative z-10">
                    {/* Icon and plan name */}
                    <div className="mb-8">
                      <Icon className={`w-12 h-12 text-${plan.color} mb-4`} />
                      <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className={`text-5xl font-black text-${plan.color}`}>{plan.price}</span>
                        {plan.period && (
                          <span className="text-gray-400 ml-2">{plan.period}</span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className={`w-5 h-5 text-${plan.color} mr-3 mt-1 flex-shrink-0`} />
                          <span className="text-gray-300 text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      onClick={onGetStarted}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-${plan.color} text-black py-4 font-black uppercase tracking-wide hover:bg-white transition-all duration-300 transform hover:-rotate-1`}
                    >
                      START {plan.name.split(' ')[0]}
                    </motion.button>
                  </div>

                  {/* Overlapping accent */}
                  <div className={`absolute -bottom-2 -right-2 w-12 h-12 bg-${plan.color} opacity-20 transform rotate-12`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Chaotic guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="transform rotate-1">
            <div className="inline-block bg-lime-400 text-black px-6 py-3 font-black uppercase transform -rotate-2">
              30 DAY CHAOS GUARANTEE
            </div>
            <p className="text-gray-400 mt-4">
              NOT SATISFIED WITH THE REBELLION? GET YOUR MONEY BACK. NO QUESTIONS ASKED.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrutalistPricing;
