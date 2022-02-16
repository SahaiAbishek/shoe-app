import React, { useEffect, useState } from 'react';
import logo from "../images/an.jpeg"

function Shoe(props) {

    const shoe = props.shoe;
    return (
        <div className="card">
            <img src={logo} className="img-thumbnail" alt="..." width="100" height="100" />
            <div className="card-body">
                <h5 className="card-title">Shoe Deatils</h5>
                <div className="row">
                    <div className="col">
                        {shoe._id}
                    </div>
                    <div className="col">
                        {shoe.brand}
                    </div>
                    <div className="col">
                        {shoe.model}
                    </div>
                    <div className="col">
                        {shoe.typeOfShoe}
                    </div>
                    <div className="col">
                        {shoe.miles}
                    </div>
                    <div className="col">
                        {shoe.cost}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shoe;

{/* <div className="container">
    <div className="row">
        <div className="col">
            Shoe Deatails
        </div>
    </div>
    <div className="row">
        <div className="col">
            {shoe._id}
        </div>
        <div className="col">
            {shoe.brand}
        </div>
        <div className="col">
            {shoe.model}
        </div>
        <div className="col">
            {shoe.typeOfShoe}
        </div>
        <div className="col">
            {shoe.miles}
        </div>
        <div className="col">
            {shoe.cost}
        </div>
    </div>
</div> */}