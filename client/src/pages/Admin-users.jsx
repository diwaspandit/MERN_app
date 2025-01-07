import { useEffect, useState } from "react";
import {useAuth} from "../store/auth";
import {Link} from "react-router-dom";

const USERS_URL = "http://localhost:3000/api/admin/users";


const AdminUsers = ()=>{

    const [users, setUsers] = useState([]);

    const {authorizationToken} = useAuth();

    const getAllUsersData = async()=>{
        try{
            const response = await fetch(USERS_URL, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            });

            const data = await response.json();
            console.log(`users data: ${data}`);
            setUsers(data);
        } catch(error){
            console.log(error);
        }
    };

    //delete user function
    const deleteUser = async(id) =>{
        try{
            const DELETE_USER_URL = `http://localhost:3000/api/admin/users/delete/${id}`;
            const response = await fetch(DELETE_USER_URL, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                }
            });

            const data = await response.json();
            console.log(`users after delete: ${data})`);
            if(response.ok){
                getAllUsersData();
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getAllUsersData();
    }, []);

    return(
        <>
        <section className="admin-users-section">
            <div className="container">
                <h1>Admin Users Data</h1>
            </div>
            <div className="container admin-users">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index)=>{
                        return (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`/admin/users/${user._id}/edit`}>Edit</Link>
                                </td>
                                <td><button className="btn btn-danger" onClick={()=> deleteUser(user._id)}>Delete</button></td>
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

export default AdminUsers;