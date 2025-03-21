import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.svg"; 
import burgerIcon from "../assets/icons/burger.svg"; 
import closeIcon from "../assets/icons/close.svg"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Логотип */}
        <Link to="/" className="logo">
          <img src={logo} alt="Positivus" />
        </Link>

        {/* Меню */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><Link to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/use-cases" onClick={() => setIsOpen(false)}>Use Cases</Link></li>
          <li><Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link></li>
          <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
        </ul>

        {/* Кнопка */}
        <Link to="/quote" className="quote-btn">Request a quote</Link>

        {/* Бургер-меню */}
        <button className="burger-menu" onClick={toggleMenu}>
          <img src={isOpen ? closeIcon : burgerIcon} alt="Menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
