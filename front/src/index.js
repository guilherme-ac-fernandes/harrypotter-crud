import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HPProvider from './context/HPProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HPProvider>
      <App />
    </HPProvider>
  </React.StrictMode>
);
