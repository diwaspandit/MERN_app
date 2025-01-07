import { useEffect } from "react";
import { useAuth } from "../store/auth";

const Service = () => {
    const { services} = useAuth();

    return (
        <section className="section-services">
            <h1 className="main-heading">Our Services</h1>
            <div className="container">
                <div className="card-container grid grid-three-cols">
                    {services && services.map((curElem, index) => {
                        const { service, description, price, provider } = curElem;
                        return (
                            <div key={index} className="card">
                                <div className="card-content">
                                    <h2>{service}</h2>
                                    <p>{description}</p>
                                    <p className="price">${price}</p>
                                    <p className="provider">Provider: {provider}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Service;