
import React from 'react';

interface SelectFieldOption {
    value: string;
    label: string;
}

interface SelectFieldProps {
    label: string;
    value: string;
    options: SelectFieldOption[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, value, options, onChange }) => (
    <div className="space-y-1">
        <label className="block text-sm font-medium">{label}</label>
        <select value={value} onChange={onChange} className="w-full border rounded-md">
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
);

export default SelectField;
