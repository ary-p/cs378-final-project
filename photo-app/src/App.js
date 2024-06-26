import './App.css';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import ListComponent from './components/ListComponent';
import HomePage from './components/HomePage';
import List from "./components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. 

// You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. 
// Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    "id": 1,
    "title": "Zilker Bridge",
    "description": "Iconic bridge offering scenic views of Austin",
    "imageName": "bridge1.jpg"
  },
  {
    "id": 2,
    "title": "Ladybird Bridge",
    "description": "Bridge named after Lady Bird Lake, providing picturesque views",
    "imageName": "bridge2.jpg"
  },
  {
    "id": 3,
    "title": "Texas Capitol",
    "description": "Historical landmark and seat of Texas government",
    "imageName": "capitol.jpg"
  },
  {
    "id": 4,
    "title": "Graffiti Wall",
    "description": "Colorful mural-covered wall showcasing local art",
    "imageName": "graffiti-wall.jpg"
  },
  {
    "id": 5,
    "title": "Austin Skyline",
    "description": "Panoramic view of downtown Austin's skyline",
    "imageName": "skyline.jpg"
  },
  {
    "id": 6,
    "title": "South Congress",
    "description": "Vibrant street lined with eclectic shops and eateries",
    "imageName": "soco.jpeg"
  },
  {
    "id": 7,
    "title": "UT Tower",
    "description": "Iconic landmark of the University of Texas at Austin",
    "imageName": "tower.jpg"
  },
  {
    "id": 8,
    "title": "Under the Bridge",
    "description": "Famous spot under Congress Avenue Bridge known for bat watching",
    "imageName": "under-bridge.jpg"
  },
  {
    "id": 9,
    "title": "Barton Waterfall",
    "description": "Tranquil waterfall nestled within Barton Creek Greenbelt",
    "imageName": "waterfall.jpg"
  },
  {
    "id": 10,
    "title": "Zilker Waterfall",
    "description": "Scenic waterfall located in Zilker Metropolitan Park",
    "imageName": "zilker-waterfall.jpg"
  }
]



function App() {

  

  const initialCounts = menuItems.reduce((acc, menuItem) => {
    acc[menuItem.id] = 0;
    return acc;
  }, {});

  const initialSubtotal = 0;

  const [counts, setCounts] = useState(initialCounts);
  const [subtotal, setSubtotal] = useState(initialSubtotal);

  const updateSubtotal = (newSubtotal) => {
    setSubtotal(newSubtotal);
  };

 
  const resetAll = () => {
    // Reset subtotal to 0
    setSubtotal(0);
    // Reset counts of all items to 0
    const resetCounts = menuItems.reduce((acc, menuItem) => {
      acc[menuItem.id] = 0;
      return acc;
    }, {});
    setCounts(resetCounts);
  };

 
  return (
    /*
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        <Route path="lists" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>*/
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
