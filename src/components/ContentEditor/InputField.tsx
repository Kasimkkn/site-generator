
import React from 'react';

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    type?: string;
    className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ 
    label, 
    value, 
    onChange, 
    type = "text", 
    className = "" 
}) => (
    <div className={`space-y-2 ${className}`}>
        <label className="block text-sm font-medium text-text">{label}</label>
        {type === "textarea" ? (
            <textarea
                id={`${label}-textarea`}
                value={value}
                onChange={onChange}
                className="w-full px-3 py-2 border border-text rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={4}
            />
        ) : (
            <input
                id={`${label}-input-${Math.random()}`}
                type={type}
                value={value}
                onChange={onChange}
                className="w-full px-3 py-2 border border-text rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
        )}
    </div>
);

export default InputField;
