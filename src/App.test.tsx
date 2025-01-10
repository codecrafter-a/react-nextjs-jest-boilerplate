import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

vi.mock('./contexts/FormContext', () => ({
  FormProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('App Component', () => {
  it('renders the FormProvider and UserForm correctly', () => {
    render(<App />);

    const heading = screen.getByRole('heading', { name: /user form/i });
    expect(heading).toBeInTheDocument();

    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toBeInTheDocument();

    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('renders FormProvider context correctly', () => {
    render(<App />);
    
    const formProviderElement = screen.getByText(/user form/i);
    expect(formProviderElement).toBeInTheDocument();
  });
});
