import React, {Component, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {useHistory} from "react-router";

function ViewShoes(email) {

    const history = useHistory();
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        getUserShoes().catch(console.error);
    },[])

    const getUserShoes = async () => {
        if (localStorage.getItem("token")) {
            //console.log( JSON.stringify(email));
            await axios.get(`http://localhost:3002/api/users/shoes/${email}`, {
                headers: {
                    'x-access-token': localStorage.getItem("token")
                }
            }).catch((ex) => {
                console.log("User is not logged in : " + ex);
                history.push("/")
            }).then((resp) => {
                setShoes(resp.data);
            });
        }

    }

    return (
        <div>
            <div className="col-md-12 text-center">
                <Link to="/AddShoe">
                    <button
                        type="button"
                        className="btn btn-primary"
                    >
                        Add Shoe
                    </button>
                </Link>
            </div>
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Model</th>
                        <th scope="col">Type</th>
                        <th scope="col">Miles Covered</th>
                        <th scope="col">Cost</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        shoes?.map((shoe, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{shoe.brand}</td>
                                <td>{shoe.model}</td>
                                <td>{shoe.typeOfShoe}</td>
                                <td>{shoe.miles}</td>
                                <td>{shoe.cost}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ViewShoes;
