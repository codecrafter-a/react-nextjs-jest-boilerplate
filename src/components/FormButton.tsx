import React from 'react';

interface FormButtonProps {
  label: string;
  type?: 'submit' | 'button' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;  // Optional aria-label for better accessibility
}

const FormButton: React.FC<FormButtonProps> = ({
  label,
  type = 'submit',
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      className="form-button hover:bg-accent"
      onClick={onClick}
      aria-label={ariaLabel || label}
    >
      {label}
    </button>
  );
};

export default FormButton;
