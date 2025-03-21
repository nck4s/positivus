import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Левая часть (логотип + контакты) */}
        <div className="footer-left">
          <h2 className="footer-logo">Positivus</h2>
          <p className="contact-title">Contact us:</p>
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
        </div>

        {/* Центр (меню) */}
        <div className="footer-menu">
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
        </div>

        {/* Правая часть (форма подписки + соцсети) */}
        <div className="footer-right">
          <div className="subscribe-box">
            <input type="email" placeholder="Email" />
            <button>Subscribe to news</button>
          </div>
          <div className="social-icons">
            <a href="#"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
            <a href="#"><img src="/images/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="/images/twitter.png" alt="Twitter" /></a>
          </div>
        </div>
      </div>

      {/* Нижняя линия + копирайт */}
      <div className="footer-bottom">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <a href="#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
