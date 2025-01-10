import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import UserForm from './UserForm';
import * as useFormDataHook from '../hooks/useFormData';

describe('UserForm', () => {
  it('should render the form and display the title', () => {
    render(<UserForm />);

    expect(screen.getByText('User Form')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should call handleSubmit when form is submitted', async () => {
    const mockHandleSubmit = vi.fn();
    
    vi.spyOn(useFormDataHook, 'default').mockReturnValue({
      formData: { name: 'John', email: 'john@example.com', password: 'password123' },
      handleChange: vi.fn(),
      resetForm: vi.fn(),
    });

    render(<UserForm />);

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    });
  });

  it('should reset the form after submission', async () => {
    const mockResetForm = vi.fn();

    vi.spyOn(useFormDataHook, 'default').mockReturnValue({
      formData: { name: 'John', email: 'john@example.com', password: 'password123' },
      handleChange: vi.fn(),
      resetForm: mockResetForm,
    });

    render(<UserForm />);

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      expect(mockResetForm).toHaveBeenCalledTimes(1);
    });
  });
});
