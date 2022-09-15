import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";

import { useAuthContext } from "../../contexts/AuthContext";

const Admin = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const [error, setError] = useState('')

    const onLogin = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const username = formData.get('username');
        const password = formData.get('password');

        authService.login(username, password)
            .then(authData => {
                login(authData);
                navigate('/create')
            }).catch((err) => {
                setError(err);
            });
    }

    return (
        <form onSubmit={onLogin} method="POST">

            {
                error.length != 0
                    ? <span className="error">{error}</span>
                    : null
            }
            <div className="username">
                <label className="user__label" htmlFor="username">Username</label>
                <span className="input">
                    <input name="username" type="text" placeholder="Type username..." />
                </span>
            </div>

            <div className="password">
                <label className="pass__label" htmlFor="password">Password</label>
                <span className="input">
                    <input name="password" type="password" placeholder="Type password.." />
                </span>
            </div>

            <input className="submit__btn" type="submit" value="LOGIN" />
        </form>
    )
}

export default Admin;