import './Footer.css';

function Footer() {
  return (
    <footer className="ma-amma-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Ma Amma Ruchulu</h2>
          <p>Fresh pickle products delivered to your doorstep. Quality and convenience guaranteed.</p>
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/subscriptions">Subscriptions</a></li>
              <li><a href="/orders">Orders</a></li>
            </ul>
          </div>

          
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <address>
              4-7-62/2, Shivaji nagar, Attapur,<br />
              Hyderabad City, Telangana state 500048.<br />
              <a href="tel:+919701555435">+91 9701555435</a><br />
              <a href="mailto:maammanuchulu@gmail.com">maammanuchulu@gmail.com</a>
            </address>
          </div>
          
          <div className="footer-section">
            <h3>Policies</h3>
            <ul>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/refund">Refund Policy</a></li>
              <li><a href="/shipping">Shipping Policy</a></li>
              <li><a href="/cancellation">Cancellation Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">Facebook</a>
              <a href="https://twitter.com" aria-label="Twitter">Twitter</a>
              <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Ma Amma Ruchulu. All rights reserved. | Developed by Build Your Vision</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;