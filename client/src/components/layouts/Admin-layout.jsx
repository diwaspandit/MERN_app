import { Link, Navigate, Outlet } from "react-router-dom"
import { FaUser, FaHome } from "react-icons/fa";
import { RiContactsBook3Fill, RiCustomerService2Fill  } from "react-icons/ri";
import { useAuth } from "../../store/auth";

const AdminLayout = ()=>{
    const {user, isLoading} = useAuth();

    if(isLoading){
        return <h1>Loading...</h1>;
    }

    if(!user.isAdmin){
        return <Navigate to="/" />;
    }
    
    return(
        <>
            <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><Link to="/admin/users"><FaUser /> Users</Link></li>
                        <li><Link to="/admin/contacts"><RiContactsBook3Fill /> Contacts</Link></li>
                        <li><Link to="/services"><RiCustomerService2Fill /> Services</Link></li>
                        <li><Link to="/"><FaHome /> Home</Link></li>
                    </ul>
                </nav>
            </div>
            </header>
            <Outlet />
        </>
    )
};

export default AdminLayout;
