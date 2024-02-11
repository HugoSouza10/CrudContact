
import React from 'react';
import {Router} from './Router';
import { AuthProvider } from './contexts/Auth/AuthProvider';


function App() {
  return (
    <AuthProvider>
        <Router/>
    </AuthProvider>
  );
}

export default App;
