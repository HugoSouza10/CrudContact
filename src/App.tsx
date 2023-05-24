import ReactDOM from 'react-dom';
import React from 'react';
import {Router} from './Router';
import { UseContactProvider  } from './contexts/contactContext';


function App() {
  return (
    <UseContactProvider>
       <Router/>
    </UseContactProvider>
  );
}

export default App;
