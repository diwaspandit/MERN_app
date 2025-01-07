import {useState} from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContact = {
    username: "",
    email: "",
    message: "",
};

const Contact = () => {
    const [contact, setContact]= useState(defaultContact);
    const [userData, setUserData] = useState(true);
    const {user} = useAuth();

    if(userData && user){
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserData(false);

    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setContact({...contact, [name]: value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });

            if(response.ok){
                setContact(defaultContact);
                toast.success("Message sent successfully");
            }
        } catch(error){
            console.error("Error sending message", error);
            toast.error("Error sending message");
        }
    };
    
    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Contact us</h1>
                </div>
                {/* contact page main content */}
                <div className="container grid grid-two-cols">
                    <div className="contact-image">
                        <img src="/images/contact.png" alt="contact us" width="400" height="500"/>
                    </div>

                    {/* contact form core*/}
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" placeholder="enter your username" id ="username" autoComplete="off" value={contact.username} onChange={handleChange} required/>
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" placeholder="enter your email" id ="email" autoComplete="off" value={contact.email} onChange={handleChange} required/>
                            </div>
                            <div>
                                <label htmlFor="message">message</label>
                                <textarea name="message" id="message" cols="30" rows="6" placeholder="enter your message" value={contact.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </form>
                    </section>
                </div>

                {/* map section */}
                <section className="map-section">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220449.42842152523!2d-97.92055166579468!3d30.3076576306259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1735089781004!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Austin"
                />
                </section>

            </section>
        </>
    );
};

export default Contact;