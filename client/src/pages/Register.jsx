import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth.jsx";
import { toast } from "react-toastify";
import registerImage from "../images/register.png";

const Register = () => {
    const [user, setUser]= useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user);

        try{
            const response = await fetch(`${API}/api/auth/register`,{
                method: "POST",
                headers: {
                "Content-Type": "application/json",
            },      
            body: JSON.stringify(user),
        } );

        const res_data = await response.json();
        console.log(res_data.extraDetails);

        if(response.ok){
            toast.success("register successful");
            storeTokenInLS(res_data.token);
            setUser({
                username: "",
                email: "",
                phone: "",
                password: "",
            });
            navigate("/");
        } else {

            toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        };
    } catch(error){
        console.log(error);
        }
    };
    
    return (
        <>
            <section className="register">
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img 
                                    src={registerImage}
                                    alt="image showing registration"
                                    width="400"
                                    height="500"
                                />
                            </div>
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Register</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input type="text" name="username" placeholder="username" id ="username" autoComplete="off" value={user.username} onChange={handleChange}/>

                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="email" name="email" placeholder="enter your email" id ="email" autoComplete="off" value={user.email} onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <label htmlFor="phone">phone</label>
                                        <input type="number" name="phone" placeholder="enter your number" id ="phone" autoComplete="off" value={user.phone} onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input type="password" name="password" placeholder="password" id ="password" autoComplete="off" value={user.password} onChange={handleChange}/>
                                    </div>
                                    <br/>
                                    <button type="submit" onClick={handleSubmit}>Register Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default Register;