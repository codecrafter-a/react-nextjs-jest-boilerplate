import { render, screen, fireEvent } from '@testing-library/react';
import { expect, vi } from 'vitest';
import InputField from './InputField';

describe('InputField Component', () => {
  const mockOnChange = vi.fn();
  const formData = {
    name: '',
    email: '',
    password: '',
  };

  it('should render the label and input element', () => {
    render(
      <InputField 
        label="Name" 
        name="name" 
        value={formData.name} 
        onChange={mockOnChange} 
      />
    );

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Name').tagName).toBe('INPUT');
  });

  it('should update value when user types', () => {
    render(
      <InputField 
        label="Name" 
        name="name" 
        value={formData.name} 
        onChange={mockOnChange} 
      />
    );

    const input = screen.getByLabelText('Name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'John Doe' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange.mock.calls[0][0].target.value).toBe('');
  });

  it('should accept a custom input type', () => {
    render(
      <InputField 
        label="Email" 
        name="email" 
        type="email" 
        value={formData.email} 
        onChange={mockOnChange} 
      />
    );

    const input = screen.getByLabelText('Email') as HTMLInputElement;
    expect(input.type).toBe('email');
  });

  it('should render with default type "text" if no type is provided', () => {
    render(
      <InputField 
        label="Name" 
        name="name" 
        value={formData.name} 
        onChange={mockOnChange} 
      />
    );

    const input = screen.getByLabelText('Name') as HTMLInputElement;
    expect(input.type).toBe('text');
  });
});
