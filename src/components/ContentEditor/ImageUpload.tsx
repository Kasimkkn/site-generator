
import React from 'react';
import { FiEdit3, FiImage } from 'react-icons/fi';
import { motion } from 'framer-motion';
interface ImageUploadProps {
    id: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    preview?: string;
    height?: string;
    accent?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    id,
    label,
    onChange,
    preview,
    height = "h-48",
    accent = "lime-400"
}) => (
    <motion.div
        className="space-y-2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
    >
        <label className="block text-sm font-black text-white uppercase tracking-wide">
            {label}
        </label>
        <div className="relative group">
            <input
                id={`${id}-upload`}
                type="file"
                accept="image/*"
                onChange={onChange}
                className="hidden"
            />
            <label
                htmlFor={`${id}-upload`}
                className="block cursor-pointer"
            >
                <div className={`${height} relative overflow-hidden border-2 border-dashed border-${accent} bg-gray-900/50 hover:border-pink-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/20`}>
                    {preview ? (
                        <div className="relative w-full h-full">
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <FiEdit3 className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                            <FiImage className={`h-12 w-12 text-${accent} mb-3`} />
                            <span className="text-sm text-white font-black uppercase">
                                Upload Image
                            </span>
                            <span className="text-xs text-gray-400 mt-1">
                                Click to browse
                            </span>
                        </div>
                    )}
                </div>
            </label>
        </div>
    </motion.div>
);

export default ImageUpload;
