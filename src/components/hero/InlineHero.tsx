
import React from 'react';
import { motion } from 'framer-motion';
import EditableText from '@/components/InlineEdit/EditableText';
import { HeroData } from '@/types/global';

interface InlineHeroProps {
  data?: HeroData;
}

const InlineHero: React.FC<InlineHeroProps> = ({ data }) => {
  if (!data) return null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(163, 230, 53, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <EditableText
              value={data.heroTitle || ''}
              section="hero"
              field="heroTitle"
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                <span className="block text-white">{data.heroTitle?.split(' ')[0] || 'BUILD'}</span>
                <span className="block text-lime-400">{data.heroTitle?.split(' ').slice(1).join(' ') || 'BRUTAL WEBSITES'}</span>
              </h1>
            </EditableText>

            <EditableText
              value={data.heroDescription || ''}
              section="hero"
              field="heroDescription"
              type="textarea"
              className="text-lg sm:text-xl text-gray-300 max-w-lg"
            >
              <p className="text-lg sm:text-xl text-gray-300 max-w-lg">
                {data.heroDescription || 'Create stunning, unconventional websites that break all the rules and demand attention.'}
              </p>
            </EditableText>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <EditableText
                value={data.ctaButton?.text || ''}
                section="hero"
                field="ctaButton.text"
                className="inline-block"
              >
                <button className="bg-lime-400 text-black px-8 py-4 font-black text-lg uppercase tracking-wide hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                  {data.ctaButton?.text || 'GET STARTED'}
                </button>
              </EditableText>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {data.image ? (
              <div className="relative overflow-hidden rounded-lg border-4 border-lime-400 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src={data.image}
                  alt="Hero"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            ) : (
              <div className="w-full h-96 bg-gradient-to-br from-lime-400/20 to-pink-500/20 border-4 border-dashed border-lime-400 rounded-lg flex items-center justify-center transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-lime-400 text-6xl mb-4">📸</div>
                  <p className="text-gray-400">Click to add hero image</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InlineHero;
