
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const BrutalistTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "ALEX CHAOS",
      role: "DIGITAL REBEL",
      content: "FINALLY! A TOOL THAT DOESN'T FORCE ME INTO BORING TEMPLATES. MY SITES LOOK LIKE PURE DIGITAL ANARCHY.",
      rating: 5,
      color: "lime-400",
      rotation: -3,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "SARA DESTROY",
      role: "CREATIVE DIRECTOR",
      content: "DEVBUILDER BROKE ALL MY PRECONCEPTIONS. NOW I BUILD WEBSITES THAT MAKE PEOPLE STOP AND STARE.",
      rating: 5,
      color: "pink-500",
      rotation: 2,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "MIKE BRUTAL",
      role: "STARTUP FOUNDER",
      content: "CONVENTIONAL BUILDERS ARE DEAD. THIS IS THE FUTURE. BRUTAL, FAST, PERFECT.",
      rating: 5,
      color: "orange-500",
      rotation: -1,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Chaotic background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-lime-400" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Broken header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-6xl md:text-8xl font-black leading-none">
                <span className="block text-white transform rotate-1">DIGITAL</span>
                <span className="block text-pink-500 transform -rotate-2 -ml-8">REBELS</span>
                <span className="block text-lime-400 transform rotate-1 ml-8">SPEAK</span>
              </h2>
            </div>
            <div className="flex items-end">
              <div className="transform -rotate-3">
                <div className="bg-orange-500 text-black px-4 py-2 font-black text-sm uppercase mb-4">
                  100% REAL CHAOS
                </div>
                <p className="text-gray-400 text-sm">
                  UNFILTERED TESTIMONIALS FROM THE FRONT LINES OF WEB REBELLION
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Overlapping testimonials */}
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: testimonial.rotation * 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: testimonial.rotation }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: testimonial.rotation * -0.5,
                zIndex: 10
              }}
              className={`relative mb-8 lg:mb-16 ${
                index === 1 ? 'lg:ml-32' : index === 2 ? 'lg:ml-16' : ''
              }`}
              style={{ 
                transform: `rotate(${testimonial.rotation}deg)`,
                zIndex: 3 - index
              }}
            >
              <div className={`bg-gray-900 border-4 border-${testimonial.color} p-8 max-w-lg relative`}>
                {/* Chaotic background element */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 bg-${testimonial.color} opacity-20 transform rotate-45`} />
                
                <div className="relative z-10">
                  {/* Rating stars */}
                  <div className="flex mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className={`w-6 h-6 text-${testimonial.color} fill-current`} />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-white text-lg font-bold leading-tight mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  
                  {/* Author info with overlapping image */}
                  <div className="flex items-center">
                    <div className="relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 object-cover transform rotate-6"
                      />
                      <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-${testimonial.color} transform rotate-12`} />
                    </div>
                    <div className="ml-6">
                      <div className="text-white font-black text-lg">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm uppercase tracking-wide">{testimonial.role}</div>
                    </div>
                  </div>
                </div>

                {/* Overlapping accent line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-${testimonial.color} transform -rotate-1`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chaotic call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="transform -rotate-1">
            <div className="text-4xl font-black text-white mb-4">
              JOIN THE <span className="text-lime-400">REBELLION</span>
            </div>
            <div className="text-lg text-gray-400">
              BECOME THE NEXT SUCCESS STORY IN DIGITAL CHAOS
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrutalistTestimonials;
