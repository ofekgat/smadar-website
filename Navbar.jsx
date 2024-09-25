import React from 'react';
import './Navbar.css'; // Importing the CSS file

function Navbar() {
  return (
    <nav className="navbar">
    
      {/* Navigation Links */}
      <ul className="nav-links">
      <li><a href="#contact" className="contact-button">יצירת קשר</a></li>
        <li><a href="#testimonials">הורים מספרים</a></li>
        <li><a href="#process">תהליך הייעוץ</a></li>
        <li><a href="#about">קצת עליי</a></li>
        <li><a href="#home">בית</a></li>
      </ul>

      {/* Logo Section */}
      <div className="logo">
        <div className="logo-text">
          <span>סמדר גת</span>
          <p>מדריכת הורים</p>
        </div>
        <img src="/leafs.png" alt="סמדר גת" className="logo-image" />
      </div>

    </nav>
  );
}

export default Navbar;