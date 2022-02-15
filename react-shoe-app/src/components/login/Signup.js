import React, {Component, useState} from "react";
import {Route, useHistory} from "react-router";
import axios from "axios";

function Signup() {

    const [formErrors, setFormErrors] = useState();
    const history = useHistory();

    const validateUser = (email, password) => {
        if (!email || !password ) {
            setFormErrors("Email or Password is not valid");
            return false;
        }
        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        if(validateUser(email, password)){
            await axios.post('http://localhost:3001/api/users/signup',{
                "email": email,
                "password":password
            }).then((resp)=>{
                localStorage.setItem("token",resp.data.token);
                history.push("/")
            }).catch((err)=>{
                console.log(err);
            })
        }
    }

    return (
        <div className="container">
            <div className="p-3 mb-2 bg-info text-white">Sign up</div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="form-outline mb-4">
                    <div>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="email"
                        />
                    </div>
                </div>
                <div className="form-outline mb-4">
                    <div>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="password"
                        />
                    </div>
                </div>
                <div className="text-danger">{formErrors}</div>
                <button type="submit" className="btn btn-info">Signup</button>
            </form>
        </div>
    );
}

export default Signup;

