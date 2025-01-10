import React from 'react';
import { FormData } from '../types/formTypes';
import InputField from './InputField';
import FormButton from './FormButton';

interface FormContainerProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const FormContainer: React.FC<FormContainerProps> = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="user-form">
      <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
      <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
      <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
      <FormButton label="Submit" />
    </form>
  );
};

export default FormContainer;
