# react-nextjs-jest-boilerplate


### Key Updates:
1. **Project Run Command**: The command `npm run dev` is used to run the development server.
2. **Test Command**: The command `npm test` is used to run the tests.

src/
├── components/          # Reusable UI components (e.g., buttons, forms)
│   ├── FormButton.tsx   # A button component used in forms
│   ├── InputField.tsx   # A reusable input field component
│   └── ...
├── contexts/            # Context providers for global state (e.g., FormContext)
│   ├── FormContext.tsx  # Provides and manages form data in the app
│   └── ...
├── hooks/               # Custom React hooks (e.g., useFormData, useFormContext)
│   ├── useFormData.ts   # Custom hook for managing form data
│   └── ...
├── types/               # Type definitions and interfaces
│   ├── formTypes.ts     # Defines types related to forms (e.g., FormData, FormSubmitResponse)
│   └── ...
├── utils/               # Utility functions (e.g., validation functions)
│   ├── validateEmail.ts # Utility for email validation
│   └── ...
├── pages/               # Page components (e.g., UserForm)
│   ├── UserForm.tsx     # Page component for user registration form
│   └── ...
└── App.tsx              # Main application component, wraps all routes and UI elements

public/
└── index.html           # HTML template for the app
package.json             # Project dependencies and npm scripts
tsconfig.json           # TypeScript configuration file
tailwind.config.js      # Tailwind CSS configuration for styling
