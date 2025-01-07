import { Link } from "react-router-dom";
import homeImage from "../images/home.png";
import hero2Image from "../images/services.png";


const Home = () => {
    return (
        <>
            {/* first section */}
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Hi,</p>
                            <h1>Welcome to Tech DD Twins!</h1>
                            <p>We are a technology-driven company dedicated to empowering individuals through skill-building courses and providing top-tier software development solutions.</p>
                            <div className="btn btn-group">
                                <Link to="/contact">
                                    <button className="btn">Connect Now </button>

                                </Link>
                                <Link to="/service">
                                    <button className="btn secondary-btn">Know More</button>

                                </Link>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src={homeImage} alt="hero image" width="400" height="500"/>

                        </div>
                    </div>

                </section>
            </main>

            {/* second section */}

            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>Successful Courses Offered</p>
                    </div>
                    <div className="div1">
                        <h2>100,000+</h2>
                        <p>Students Empowered</p>
                    </div>
                    <div className="div1">
                        <h2>500+</h2>
                        <p>Custom Software Solutions Delivered</p>
                    </div>
                    <div className="div1">
                        <h2>24/7</h2>
                        <p>Service Support</p>
                    </div>

                </div>
            </section>

            {/* third section */}
            <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-image">
                            <img src={hero2Image} alt="coding together" width="400" height="500"/>
                        </div>
                        <div className="hero-content">
                            <p>Your journey to success begins here</p>
                            <h1>Join Tech DD Twins Today</h1>
                            <p>Learn new skills, collaborate on innovative projects, and unlock your full potential with our expert-led courses and tailored software development solutions.</p>
                            <div className="btn btn-group">
                                <Link to="/contact">
                                    <button className="btn">Connect Now </button>

                                </Link>
                                <Link to="/service">
                                    <button className="btn secondary-btn">Know More</button>

                                </Link>
                            </div>
                        </div>
                        
                    </div>

                </section>

        </>
    );
};

export default Home;