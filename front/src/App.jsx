import React from 'react';
import Display from './component/display/Display';
import Form from './component/form/Form';
import Header from './component/header/Header';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <Form />
      <Display />
    </main>
  );
}

export default App;
