import './App.css';
import HomePage from './components/HomePage';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. 

// You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. 
// Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.

function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
