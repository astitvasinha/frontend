import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import FileImport from './components/FileImport';
import Excel from './components/Excel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/FileImport' element={<FileImport />} />
        <Route path='/Excel' element={<Excel />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
