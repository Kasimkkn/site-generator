import { BarChart3, Check, Cpu, Globe, Shield } from "lucide-react";
import { motion } from "framer-motion";
const AdvancedFeaturesSection = () => {
    const advancedFeatures = [
        {
            icon: BarChart3,
            title: "ANALYTICS CHAOS",
            description: "Track your rebellion's impact with brutal precision.",
            features: ["Real-time chaos metrics", "Conversion anarchy", "User rebellion patterns"],
            color: "lime-400"
        },
        {
            icon: Shield,
            title: "SECURITY FORTRESS",
            description: "Your digital rebellion is protected by military-grade chaos.",
            features: ["SSL encryption", "DDoS protection", "Backup anarchy"],
            color: "pink-500"
        },
        {
            icon: Globe,
            title: "GLOBAL REBELLION",
            description: "Spread your chaos worldwide with CDN acceleration.",
            features: ["Global CDN", "99.9% uptime", "Speed optimization"],
            color: "orange-500"
        },
        {
            icon: Cpu,
            title: "AI-POWERED CHAOS",
            description: "Machine learning meets digital anarchy.",
            features: ["Smart layouts", "Auto-optimization", "Chaos suggestions"],
            color: "lime-400"
        }
    ];

    return (
        <section className="py-40 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
            <div className="absolute inset-0">
                {/* Animated background patterns */}
                <motion.div
                    className="absolute inset-0 opacity-5"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                >
                    <div className="grid grid-cols-16 gap-2 h-full w-full">
                        {Array.from({ length: 256 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="bg-lime-400 opacity-20"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.1, 0.3, 0.1]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.02
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-6xl md:text-7xl lg:text-[6rem] font-black leading-none mb-8">
                        <span className="block text-lime-400">ADVANCED</span>
                        <span className="block text-white">CHAOS</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        ENTERPRISE-LEVEL REBELLION TOOLS FOR SERIOUS DIGITAL ANARCHISTS
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {advancedFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="group"
                            >
                                <div className={`bg-black border-4 border-${feature.color} p-8 relative overflow-hidden`}>
                                    <motion.div
                                        className={`absolute top-0 left-0 w-full h-1 bg-${feature.color}`}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1, delay: index * 0.3 }}
                                    />

                                    <div className="flex items-start gap-6">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.2 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <Icon className={`w-16 h-16 text-${feature.color} flex-shrink-0`} />
                                        </motion.div>

                                        <div className="flex-1">
                                            <h3 className="text-3xl font-black text-white mb-4">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-400 text-lg mb-6">
                                                {feature.description}
                                            </p>

                                            <ul className="space-y-3">
                                                {feature.features.map((item, itemIndex) => (
                                                    <motion.li
                                                        key={itemIndex}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, delay: (index * 0.2) + (itemIndex * 0.1) }}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <Check className={`w-5 h-5 text-${feature.color}`} />
                                                        <span className="text-gray-300 font-medium">{item}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AdvancedFeaturesSection;