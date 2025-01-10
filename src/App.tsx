import React from 'react';
import { FormProvider } from './contexts/FormContext';
import UserForm from './pages/UserForm';

const App: React.FC = () => {
  return (
    <>
      <FormProvider>
        <div className="App">
          <UserForm />
        </div>
      </FormProvider>
    </>
  );
};

export default App;
