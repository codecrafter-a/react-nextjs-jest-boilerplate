import React from 'react';
import { FormData } from '../types/formTypes';

interface InputFieldProps {
  label: string;
  name: keyof FormData;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = 'text', value, onChange }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  );
};

export default InputField;
