import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            {/* first section */}
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the World Best IT Company</p>
                            <h1>Welcome to Diwas Pandit</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
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
                            <img src="images/hero.png" alt="hero image" width="400" height="500"/>

                        </div>
                    </div>

                </section>
            </main>

            {/* second section */}

            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>registered companies</p>
                    </div>
                    <div className="div1">
                        <h2>100,00+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>500+</h2>
                        <p>Well Experienced Team</p>
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
                            <img src="images/design.png" alt="coding together" width="400" height="500"/>
                        </div>
                        <div className="hero-content">
                            <p>We are ready to help you</p>
                            <h1>Get Started Today</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
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