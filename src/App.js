import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';


function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Routes>
        <Route path='/' element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
