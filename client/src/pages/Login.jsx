import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth.jsx";
import { toast } from 'react-toastify';

const Login = () => {
    const [user, setUser]= useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS, API } = useAuth();
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch(`${API}/api/auth/login`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const res_data = await response.json();
            console.log(res_data.extraDetails);

            if(response.ok){
                toast.success("login successful");
                
                storeTokenInLS(res_data.token);
                setUser({
                    email: "",
                    password: "",
                });
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
            }

        } catch(error){
            console.log(error);
        };
    };
    
    return (
        <>
            <section className="login">
                <main>
                    <div className="section-login">
                        <div className="container grid grid-two-cols">
                            <div className="login-image">
                                <img 
                                    src="/images/login.png"
                                    alt="image showing login"
                                    width="400"
                                    height="500"
                                />
                            </div>
                            <div className="login-form">
                                <h1 className="main-heading mb-3">Login</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input type="email" name="email" placeholder="enter your email" id ="email" autoComplete="off" value={user.email} onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input type="password" name="password" placeholder="password" id ="password" autoComplete="off" value={user.password} onChange={handleChange}/>
                                    </div>
                                    <br/>
                                    <button type="submit" onClick={handleSubmit}>Login Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default Login;