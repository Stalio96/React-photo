import { useState } from "react";
import { login } from "../../services/authService";

const Admin = () => {

    const onLogin = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const username = formData.get('username');
        const password = formData.get('password');

        login(username, password)
            .then(authData => {
                console.log(authData);
            });
    }

    return (
        <form onSubmit={onLogin} method="POST">
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