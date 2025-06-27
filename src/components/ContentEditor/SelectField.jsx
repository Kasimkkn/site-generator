
import { string, array, func } from 'prop-types'
const SelectField = ({ label, value, options, onChange }) => (
    <div className="space-y-1">
        <label className="block text-sm font-medium">{label}</label>
        <select value={value} onChange={onChange} className="w-full border rounded-md">
            {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
);

SelectField.propTypes = {
    label: string.isRequired,
    value: string.isRequired,
    options: array.isRequired,
    onChange: func.isRequired
}

export default SelectField;