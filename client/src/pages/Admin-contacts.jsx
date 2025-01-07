import { useEffect, useState } from "react";
import {useAuth} from "../store/auth";
import {toast} from "react-toastify";


const AdminContacts = ()=>{

    const [contactData, setContactData] = useState([]);

    const {authorizationToken, API} = useAuth();

    const getAllContactsData = async()=>{
        try{
            const response = await fetch(`${API}/api/admin/contacts`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            });

            const data = await response.json();
            console.log(`contacts data: ${data}`);
            if(response.ok){
                setContactData(data);
            }
        } catch(error){
            console.log(error);
        }
    };

    //delete contact function
    const deleteContactById = async(id) =>{
        try{
            const DELETE_USER_URL = `${API}/api/admin/contacts/delete/${id}`;
            const response = await fetch(DELETE_USER_URL, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                }
            });

            if(response.ok){
                getAllContactsData();
                toast.success("deleted successfully");
            }else {
                toast.error("Error deleting contact");
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getAllContactsData();
    }, []);

    return(
        <>
        <section className="admin-users-section">
            <div className="container">
                <h1>Admin Contacts Data</h1>
            </div>
            <div className="container admin-users">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactData.map((curr, index)=>{
                            const {username, email, message, _id} = curr;
                        return (
                            <tr key={index}>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{message}</td>
                                <td><button className="btn btn-danger" onClick={()=> deleteContactById(_id)}>Delete</button></td>
                            </tr>
                        )
                        })}
                        
                    </tbody>
                </table>
            </div>
        </section>
        </>
    )
}

export default AdminContacts;