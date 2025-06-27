import { func, string } from 'prop-types';
import React from 'react';
const InputField = ({ label, value, onChange, type = "text", className = "" }) => (
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

InputField.propTypes = {
    label: string.isRequired,
    value: string.isRequired,
    onChange: func.isRequired,
    type: string,
    className: string
}

export default InputField