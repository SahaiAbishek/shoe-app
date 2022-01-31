import React, {Component, useEffect} from 'react'
import {Link} from "react-router-dom";
import {Route} from "react-router";
import ViewShoes from "./ViewShoes";
import AddShoe from "./AddShoe";
import {useSelector, useDispatch} from "react-redux";
import Login from "./login/Login";

class Main extends Component {

    constructor() {
        super();
        this.state = {
            shoes: [],
            isLoggedIn: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const email = e.target.elements.inputEmail.value;
        const password = e.target.elements.inputPassword.value;
        if (email && password) {
            this.setState({isLoggedIn: true});
            localStorage.setItem('email', email);
        }
    }

    render() {
        const loggedInUser = localStorage.getItem("email");
        if (!loggedInUser || loggedInUser.trim().length == 0) {
            return (
                <div className="container py-5 h-100">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-outline mb-4">
                            <div className="col-2">
                                <input
                                    type="text"
                                    name="inputEmail"
                                    className="form-control"
                                    placeholder="email"
                                />
                            </div>
                        </div>
                        <div className="form-outline mb-4">
                            <div className="col-2">
                                <input
                                    type="password"
                                    id="inputPassword"
                                    className="form-control"
                                    placeholder="password"
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            );
        }

        return (
            <div className="container">
                <div className="col-md-12 text-center">
                    <Link to="/">
                        <h1 className="display-5"> Running Shoe Tracker </h1>
                    </Link>
                </div>
                <Route
                    exact path="/"
                    render={() => (
                        <div>
                            <ViewShoes {...this.props}/>
                        </div>
                    )}
                />
                <Route
                    path="/AddShoe"
                    render={({history}) => (
                        <div>
                            <AddShoe {...this.props} onHistory={history}/>
                        </div>
                    )}
                />
            </div>
        );
    }
}

export default Main;
