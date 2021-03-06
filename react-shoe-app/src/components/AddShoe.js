import React, {useEffect, useState} from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useHistory, useLocation} from "react-router";
import moment from "moment";

function AddShoe(props) {

    const history = useHistory();
    const location = useLocation();

    const shoe = location.state?.shoe;

    const [brand, setBrand] = useState();
    const [model, setModel] = useState();
    const [typeOfShoe, setTypeOfShoe] = useState();
    const [miles, setMiles] = useState();
    const [cost, setCost] = useState();
    const [startDate, setStartDate] = useState(shoe?.startDate ? new Date(shoe?.startDate) : new Date());
    const [endDate, setEndDate] = useState(shoe?.endDate ? new Date(shoe?.endDate) : new Date());

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const brand = event.target.elements.brand.value;
        const model = event.target.elements.model.value;
        const type = event.target.elements.shoeType.value;
        const miles = event.target.elements.miles.value;
        const cost = event.target.elements.cost.value;

        if (event.target.elements.brand.value) {
            axios.post('http://localhost:3002/api/users/shoe', {
                "email": props.email,
                "brand": brand,
                "model": model,
                "typeOfShoe": type,
                "miles": miles,
                "cost": cost,
                startDate: moment(startDate).format('YYYY-MM-DD'),
                endDate: moment(startDate).format('YYYY-MM-DD')
            })
                .catch(ex => console.log(ex))
                .then((res) => {
                    history.push('/');
                })
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="brand" className="form-label">Brand</label>
                    <input type="text" className="form-control" name="brand" placeholder="Brand" value={shoe?.brand} onChange={e=>setBrand(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="model" className="form-label">Mode</label>
                    <input type="text" className="form-control" name="model" placeholder="Model" value={shoe?.model} onChange={e=>setModel(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="shoeType" className="form-label">Type of Shoe</label>
                    <input type="text" className="form-control" name="shoeType"
                           placeholder="Type of Shoe(Road/Trail)"
                           value={shoe?.typeOfShoe} onChange={e=>setTypeOfShoe(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="miles" className="form-label">Miles Covered</label>
                    <input type="text" className="form-control" name="miles" placeholder="Miles Covered" value={shoe?.miles} onChange={e=>setMiles(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cost" className="form-label">Cost</label>
                    <input type="text" className="form-control" name="cost" placeholder="cost" value={shoe?.cost} onChange={e=>setCost(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="startDate" className="form-label">Start Date</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="endDate" className="form-label">End Date</label>
                    <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
                </div>

                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        </div>
    );
}

export default AddShoe;
