import React, { useEffect, useState } from 'react';
import logo from '../images/logo.webp';
import Axios from "axios"
export const Profile = () => {
    const [email, setemail] = useState("tanmayarora1112@gmail.com");
    const [data, setdata] = useState({ name: "Tanmay", email: "tanmayarora1112@gmail.com", dob: "11-12-2001" });
    const getdata = async () => {
        const emailtosend = { email }
        await Axios.post('http://localhost:4000/postprofile', emailtosend)
            .then(response => {
                setdata(response.data)
            })
    }
    useEffect(() => {
        getdata()
    }, []);
    return (
        <>
            <div className="profile-container">
                <section className="profile">
                    <h2 className="profile-heading">My Profile</h2>
                    <div className="profile-section">
                        <div className="profile-image">
                            <img src="https://oncampus.sjny.edu/wp-content/uploads/2017/12/tips-for-studying.jpg" alt="Profile Image" />
                        </div>
                        <div className="profile-info">
                            <div className="profile-details">
                                <h3 className="profile-name">{data.name}</h3>
                                <ul>
                                    <li><strong>Email:</strong> {data.email}</li>
                                    <li><strong>Username:</strong> {data.name}</li>
                                    <li><strong>Date of Birth:</strong> {data.dob}</li>
                                </ul>
                            </div>
                            <button className="update-profile-btn">Update Profile</button>
                        </div>
                    </div>
                </section>
                <section className="password-section">
                    <hr />
                    <h2 className="section-heading">Update Password</h2>

                    <div>
                        <form className="password-form">
                            <div className="form-group">
                                <label for="current-password">Current Password</label>
                                <input type="password" id="current-password" name="current-password" required />
                            </div>
                            <div className="form-group">
                                <label for="new-password">New Password</label>
                                <input type="password" id="new-password" name="new-password" required />
                            </div>
                            <div className="form-group">
                                <label for="confirm-password">Confirm Password</label>
                                <input type="password" id="confirm-password" name="confirm-password" required />
                            </div>
                            <button className="update-password-btn">Update Password</button>
                        </form>
                    </div>
                </section>
                <section className="password-section">
                    <hr />
                    <h2 className="section-heading">feedback-form</h2>

                    <div>
                        <form className="feedback-form">
                            <div className="form-group">
                                <label for="name">Topic:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label for="message">Message:</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button className="update-password-btn">Submit</button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}