import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Route, useHistory } from "react-router";
import ViewShoes from "./ViewShoes";
import AddShoe from "./AddShoe";
import Login from "./login/Login";
import Signup from "./login/Signup";
import axios from "axios";

function Main(props) {

    const [email, setEmail] = useState();
    const history = useHistory();
    const authUrl = process.env.AUTH_URL;
    const currentUserUrl = authUrl + 'currentuser';

    const header = <div className="col-md-12 text-center">
        <Link to="/">
            <h1 className="display-5">Running Shoe Tracker</h1>
        </Link>
    </div>;

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem("email");
        setEmail('');
        localStorage.clear();
        history.push("/")
    }

    useEffect(() => {
        getUser().catch(console.error);
    })

    const getUser = async () => {
        if (localStorage.getItem("token")) {
            await axios.get('http://localhost:3001/api/users/currentuser', {
                headers: {
                    'x-access-token': localStorage.getItem("token")
                }
            }).catch((ex) => {
                console.log("User is not logged in : " + ex);
                history.push("/")
            }).then((resp) => {
                if (resp && resp.data && resp.data.currentUser)
                    setEmail(resp.data.currentUser.email);
            });
        }

    }

    if (email) {
        return (
            <div className="container">
                {header}
                <div className="position-absolute top-0 end-0">
                    <button type="button" className="btn btn-link" onClick={e => handleLogout(e)}>Logout</button>
                </div>
                <Route
                    exact path="/"
                    render={() => (
                        <div>
                            <ViewShoes {...props} email={email} />
                        </div>
                    )}
                />
                <Route
                    path="/AddShoe"
                    render={({ history }) => (
                        <div>
                            <AddShoe email={email} onHistory={history} />
                        </div>
                    )}
                />
            </div>
        );
    } else {
        return (
            <div className="container">
                {header}
                <div className="row">
                    <div className="col">
                        <Login />
                    </div>

                    <div className="col">
                        <Signup />
                    </div>
                </div>
            </div>

        );
    }

}

export default Main;
