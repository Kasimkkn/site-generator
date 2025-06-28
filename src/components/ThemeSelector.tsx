
import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/changeTheme";
import { motion } from "framer-motion";

export const ThemeSelector: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [colors, setColors] = useState(theme);

    useEffect(() => {
        setColors(theme);
    }, [theme]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setColors((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setTheme(colors);
    };

    const presetThemes = [
        {
            name: "REBELLION",
            colors: {
                primary: "#00FF41",
                background: "#000000",
                text: "#ffffff",
                accent: "#FF006E",
                secondary: "#FF8500"
            }
        },
        {
            name: "NEON CHAOS",
            colors: {
                primary: "#FF006E",
                background: "#1A1A1A",
                text: "#00FF41",
                accent: "#FF8500",
                secondary: "#00FFFF"
            }
        },
        {
            name: "DIGITAL PUNK",
            colors: {
                primary: "#FF8500",
                background: "#000000",
                text: "#ffffff",
                accent: "#00FF41",
                secondary: "#FF006E"
            }
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-2 bg-black transform -rotate-1 flex flex-col"
        >
            <h2 className="text-2xl font-black text-lime-400 mb-6 uppercase tracking-wide">
                CUSTOMIZE REBELLION
            </h2>

            <div className="flex gap-5">
                {/* Preset Themes */}
                <div className="mb-6 w-1/2">
                    <h3 className="text-sm font-black text-white mb-3 uppercase">PRESET THEMES</h3>
                    <div className="grid grid-cols-1 gap-2">
                        {presetThemes.map((preset, index) => (
                            <button
                                key={index}
                                onClick={() => setColors(preset.colors)}
                                className="p-3 bg-gray-900 border-2 border-gray-700 hover:border-lime-400 text-left transform hover:rotate-1 transition-all"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="flex space-x-1">
                                        <div
                                            className="w-4 h-4"
                                            style={{ backgroundColor: preset.colors.primary }}
                                        />
                                        <div
                                            className="w-4 h-4"
                                            style={{ backgroundColor: preset.colors.accent }}
                                        />
                                        <div
                                            className="w-4 h-4"
                                            style={{ backgroundColor: preset.colors.secondary }}
                                        />
                                    </div>
                                    <span className="text-white font-bold text-xs uppercase">
                                        {preset.name}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Custom Colors */}
                <div className="w-1/2 grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(colors).map(([key, value]) => (
                        <div key={key} className="transform hover:rotate-1 transition-transform">
                            <label htmlFor={`${key}-color`} className="block text-sm font-black text-lime-400 mb-2 uppercase">
                                {key}
                            </label>
                            <div className="relative">
                                <input
                                    type="color"
                                    id={`${key}-color`}
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                    className="w-full h-12 border-4 border-gray-700 bg-gray-900 cursor-pointer"
                                />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 transform rotate-45" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={handleSave}
                className="w-max px-6 py-4 bg-lime-400 text-black font-black text-lg uppercase tracking-wide hover:bg-pink-500 hover:text-white transform hover:scale-105 hover:rotate-1 transition-all duration-300 border-4 border-lime-400 hover:border-pink-500 self-end"
            >
                APPLY REBELLION
            </button>
        </motion.div>
    );
};
