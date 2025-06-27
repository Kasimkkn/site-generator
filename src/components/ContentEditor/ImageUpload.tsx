
import React from 'react';
import { FiImage } from 'react-icons/fi';

interface ImageUploadProps {
    id: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    preview?: string;
    height?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ 
    id, 
    label, 
    onChange, 
    preview, 
    height = "h-56" 
}) => (
    <div className="space-y-2">
        <label className="block text-sm font-medium text-text">{label}</label>
        <div className="mt-1">
            <input
                id={`${id}-upload`}
                name={`${id}-upload`}
                type="file"
                accept="image/*"
                onChange={onChange}
                className="hidden"
            />
            <label
                htmlFor={`${id}-upload`}
                className="block"
            >
                <div className={`${height} overflow-hidden border-2 border-dashed border-text rounded-lg cursor-pointer hover:border-blue-500 flex justify-center items-center`}>
                    {preview ? (
                        <img src={preview} alt="Preview" className="w-56 h-56 object-cover" />
                    ) : (
                        <div className="flex flex-col items-center">
                            <FiImage className="h-8 w-8 text-text" />
                            <span className="mt-2 text-sm text-text">Upload Image</span>
                        </div>
                    )}
                </div>
            </label>
        </div>
    </div>
);

export default ImageUpload;
