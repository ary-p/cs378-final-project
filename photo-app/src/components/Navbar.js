import React, { useState } from 'react';
import './navbar.css'; // Import CSS for styling

const Navbar = () => {
  // State to keep track of active tab
  const [activeTab, setActiveTab] = useState('Tab1');

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="navbar">
      <div
        className={`tab ${activeTab === 'Tab1' ? 'active' : ''}`}
        onClick={() => handleTabChange('Tab1')}
      >
        Tab 1
      </div>
      <div
        className={`tab ${activeTab === 'Tab2' ? 'active' : ''}`}
        onClick={() => handleTabChange('Tab2')}
      >
        Tab 2
      </div>
    </div>
  );
};

export default Navbar;
