import './App.css';
import Header from './components/Header';
import MenuItem from './components/MenuItem';
import React, {useState} from 'react';



import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. 
// You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. 
// Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Zilker Bridge',
    description: 'Japanese dumplings',
    imageName: 'bridge1.jpg',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Ladybird Bridge',
    description: 'Japanese rice rolls',
    imageName: 'bridge2.jpg',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Texas Capitol',
    description: 'Japanese noodle soup',
    imageName: 'capitol.jpg',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Graffiti Wall',
    description: 'Japanese green tea cake',
    imageName: 'graffiti-wall.jpg',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Austin Skyline',
    description: 'Japanese rice cake',
    imageName: 'skyline.jpg',
    price: 3.99,
  },
  {
    id: 6,
    title: 'South Congress',
    description: 'Japanese skewered chicken',
    imageName: 'soco.jpeg',
    price: 2.99,
  },
  {
    id: 7,
    title: 'UT Tower',
    description: 'Japanese octopus balls',
    imageName: 'tower.jpg',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Under the Bridge',
    description: 'Japanese raw fish',
    imageName: 'under-bridge.jpg',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Barton Waterfall',
    description: 'Japanese savory pancake',
    imageName: 'waterfall.jpg',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Zilker Waterfall',
    description: 'Japanese curry with fried pork',
    imageName: 'zilker-waterfall.jpg',
    price: 9.99,
  }
];


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
    <div>
        {/* Different components used for header and menuItems. */}
        <Header />   
        <MenuItem menuItems={menuItems} />
    </div>
    
  );
}

export default App;
