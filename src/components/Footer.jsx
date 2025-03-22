import "./Footer.css";
import logo from "../assets/logo-w.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import twitterIcon from "../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Верхний ряд */}
        <div className="footer-top">
          <h2 className="footer-logo">
            <img src={logo} alt="Positivus logo" />
          </h2>

          <div className="footer-menu">
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </div>

          <div className="social-icons">
            <a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
            <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="#"><img src={twitterIcon} alt="Twitter" /></a>
          </div>
        </div>

        {/* Средний ряд */}
        <div className="footer-middle">
          <div className="contact-info">
            <p className="contact-title">Contact us:</p>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
          </div>

          <div className="subscribe-box">
            <input type="email" placeholder="Email" />
            <button>Subscribe to news</button>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="footer-bottom">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
