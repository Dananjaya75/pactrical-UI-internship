import "./Footer.css";
import logo from "../assets/logo.jpg";
import ficon from "../assets/facebook.jpg";
import gicon from "../assets/gmail.png";
import ticon from "../assets/twitter.png";
import yicon from "../assets/ytube.png";
import visa from "../assets/visa.png";
import maser from "../assets/master.jpg";
import skril from "../assets/skrill.jpg";
import pay from "../assets/pay.jpg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <img src={logo} alt="" className="footer-logo" />
          <p>
            A perfect blend of creativity , energy, communication happiness and
            love.Let us arrange a smile for you{" "}
          </p>
          <div className="footer-icons">
            <img src={ficon} alt="" className="footer-icon" />
            <img src={gicon} alt="" className="footer-icon" />
            <img src={ticon} alt="" className="footer-icon" />
            <img src={yicon} alt="" className="footer-icon" />
          </div>
        </div>

        <div className="footer2">
          <div>
            <h3>INFORMATION</h3> <br />
            <ul>
              <li>Search Terms</li>
              <li>Advanced Search</li>
              <li>Helps and Faqs</li>
              <li>Store Location</li>
              <li>Orders and Returns</li>
            </ul>
          </div>
        </div>
        <div className="footer2">
          <div>
            <h3>My Account</h3> <br />
            <ul>
              <li>Delivery</li>
              <li>Legal Notice</li>
              <li>Secure Payment</li>
              <li>Sitemap</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>

        <div className="footer2">
          <div>
            <h3>Help</h3> <br />
            <ul>
              <li>FAQ's</li>
              <li>Pricing Plans</li>
              <li>Track</li>
              <li>Your Order</li>
              <li>Returns</li>
            </ul>
          </div>
        </div>
        <div className="footer2">
          <div>
            <h3>Customer Service</h3> <br />
            <ul>
              <li>My Account</li>
              <li>Terms of Use</li>
              <li>Deliveries and Returns</li>
              <li>Gift Card</li>
              <li>Legal Notice</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer3">
        <p>&copy; 2026. All rights reserved.</p>
        <div className="footer-icons">
          <img src={visa} alt="" className="footer-icon" />
          <img src={maser} alt="" className="footer-icon" />
          <img src={skril} alt="" className="footer-icon" />
          <img src={pay} alt="" className="footer-icon" />
        </div>
      </div>
      <div className="boll"></div>
    </>
  );
}
export default Footer;
