import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo.webp';
import Axios from "axios"
export const Navbar = () => {
    // const [data, setdata] = useState("");
    // const getdata = async () => {
    //     const response = await Axios.get("http://localhost:4000/isauthenticated")
    //     setdata(response.data)
    //     console.log(response.data)
    // }
    // useEffect(() => {
    //     getdata()
    // }, []);
    return (

        <>
            <nav>
                <Link className="logo" to="/">
                    <img src={logo} alt="eLearn Logo" />
                    <span className="name">eLearn</span>
                </Link>
                <div className="links">
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="#">Courses</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/profile">My Profile</Link>
                </div>
            </nav>
        </>
    );
}