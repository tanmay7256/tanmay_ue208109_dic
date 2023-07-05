import React, { useState } from 'react';
import Axios from "axios";
export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to submit the form?')) {
            const data = { email, password };
            Axios.post('http://localhost:4000/postlogin', data)
                .then(response => {
                    if (response.data === "LoggedIn successfully.") {
                        window.location.href = '/';
                    }
                    alert(response.data)
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    return (
        <div className="login-page container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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

                <input type="submit" value="Login" id="submitBtn" />
                <a href="forgot_password.html" className="forgot-password">Forgot Password?</a>
            </form>
        </div>
    );
};
