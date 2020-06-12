import React from 'react';
import ValidationAlert from '../ValidationAlert';

function SelectInput({ name, label, type, value, alert, options, setInputs }) {
    return (
        <div>
            <label htmlFor={name} className="form-label text-large">{label}</label>
            <select id={name} name={name} type={type} value={value} onChange={setInputs} className={"form-control select" + (alert ? ' form-danger' : '')}>
                {options && options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
            </select>
            <ValidationAlert content={alert} />
        </div>
    )
}

export default SelectInput;

