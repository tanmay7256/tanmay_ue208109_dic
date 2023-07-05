import React, { useEffect, useState } from 'react';
// import 'jquery-ui/ui/widgets/datepicker';
import $ from 'jquery';
import Axios from "axios"
// import { useHistory } from 'react-router-dom';

export const Register = () => {
    useEffect(() => {
        $(document).ready(function () {
            // $("#dob").datepicker();


            $('#dob').click(function (event) {
                var password = $('#password').val();
                var confirmPassword = $('#confirmPassword').val();
                if (password !== confirmPassword) {
                    var submitbtn = $('#submitBtn');
                    submitbtn.css('background-color', 'red');
                    submitbtn.val('Passwords do not match.');
                }
            });
        });
    }, []);
    // const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [dob, setDob] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPass(e.target.value);
    };

    const handleDobChange = (e) => {
        setDob(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Confirmation dialog
        if (window.confirm('Are you sure you want to submit the form?')) {
            const data = { name, email, password, dob }
            Axios.post('http://localhost:4000/postregister', data)
                .then(response => {
                    alert(response.data)
                    if (response.data === "User registered Successfully.")
                        window.location.href = '/login';
                })
                .catch(error => {
                    console.error(error); // Handle the error
                });
            // console.log("Submitted:", name, email, password, dob);
        }

    };
    return (
        <>
            <div className="register-page container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />

                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                    />

                    <label htmlFor="dob">Date of Birth:</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={dob}
                        onChange={handleDobChange}
                        required
                    />

                    <input type="submit" value="Register" id="submitBtn" />
                </form>
            </div>
        </>
    );
}
