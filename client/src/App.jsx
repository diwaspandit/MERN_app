import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Logout from "./pages/Logout";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import AdminLayout from "./components/layouts/Admin-layout";
import AdminUsers from "./pages/Admin-users";
import AdminContacts from "./pages/Admin-contacts";
import AdminUpdate from "./pages/Admin-update";
import "./App.css";

const App =() => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<AdminLayout/>}>
            <Route path="users" element={<AdminUsers />}/>
            <Route path ="contacts" element={<AdminContacts/>}/>
            <Route path="users/:id/edit" element={<AdminUpdate/>}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
};


export default App;