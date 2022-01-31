import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ViewShoes extends Component {
    constructor() {
        super();
    }

    render() {
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
                            this.props.shoes?.map((shoe, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{shoe.Brand}</td>
                                    <td>{shoe.Model}</td>
                                    <td>{shoe.Type}</td>
                                    <td>{shoe.Miles}</td>
                                    <td>{shoe.Cost}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ViewShoes;
