import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="container footer-content">
                <div className="footer-section">
                    <div className="logo-brand">
                        <Link to="/">Diwas Pandit</Link>
                    </div>
                    <p>Your trusted partner in web development.</p>
                </div>

                <div className="footer-section">
                    <h3>QUICK LINKS</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/services">Services</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>SUPPORT</h3>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>CONTACT INFO</h3>
                    <ul>
                        <li>Phone: +977 9812345678</li>
                        <li>Email: info@diwaspandit.com</li>
                        <li>Address: Kathmandu, Nepal</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {year} Diwas Pandit. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;