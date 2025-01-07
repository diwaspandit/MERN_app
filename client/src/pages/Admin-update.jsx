import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AdminUpdate = () => {

    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    });

    const params = useParams();
    const {authorizationToken, API} = useAuth();

    //get single user data
    const getSingleUserData = async() =>{
        try{
            const SINGLE_USER_URL = `${API}/api/admin/users/${params.id}`;
            const response = await fetch(SINGLE_USER_URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            });

            const data = await response.json();
            console.log(`users single data: ${data})`);
            setData(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getSingleUserData();
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]: value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch(`${API}/api/admin/users/update/${params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(data),
            }
            );
            if(response.ok){
                toast.success("User data updated successfully");
            } else {
                toast.error("Error updating user data");
            }
        } catch(error){
            console.error("Error sending message", error);
        }
    };

    return (
        <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">Update User Data</h1>
                </div>
                {/* contact page main content */}
                <div className="container grid grid-two-cols">
                    {/* contact form core*/}
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" name="username" placeholder="enter your username" id ="username" autoComplete="off" value={data.username} onChange={handleChange} required/>
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" name="email" placeholder="enter your email" id ="email" autoComplete="off" value={data.email} onChange={handleChange} required/>
                            </div>
                            <div>
                                <label htmlFor="message">Mobile</label>
                                <input type="phone" name="phone" placeholder="enter your phone" id ="phone" autoComplete="off" value={data.phone} onChange={handleChange} required/>
                            </div>
                            <button type="submit" onClick={handleSubmit}>Update</button>
                        </form>
                    </section>
                </div>
            </section>
    )
}

export default AdminUpdate;