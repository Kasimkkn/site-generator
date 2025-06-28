
import React from 'react';
import { motion } from 'framer-motion';
interface InputFieldProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    type?: string;
    className?: string;
    placeholder?: string;
    accent?: string
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    type = "text",
    className = "",
    placeholder = "",
    accent = "lime-400"
}) => (
    <motion.div
        className={`space-y-2 ${className}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
    >
        <label className="block text-sm font-black text-white uppercase tracking-wide">
            {label}
        </label>
        {type === "textarea" ? (
            <textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full px-4 py-3 bg-black border-2 border-${accent} text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/20 transition-all duration-300 font-medium resize-none min-h-[100px]`}
                rows={4}
            />
        ) : (
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full px-4 py-3 bg-black border-2 border-${accent} text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:shadow-lg focus:shadow-pink-500/20 transition-all duration-300 font-medium`}
            />
        )}
    </motion.div>
);

export default InputField;
