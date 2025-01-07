import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth.jsx";

const Navbar = () => {

    const {isLoggedIn} = useAuth();

    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <Link to="/">Diwas Pandit</Link>
                    </div>
                    <div className="menu-items">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            {isLoggedIn ? <li><Link to="/logout">Logout</Link></li> : <><li><Link to="/login">Login</Link></li><li><Link to="/register">Register</Link></li></>}
                        </ul>
                    </div>
                </div>
            </header>
        </>

    );
};

export default Navbar;