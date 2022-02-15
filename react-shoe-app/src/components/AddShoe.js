import React, {useState} from 'react';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useHistory} from "react-router";
import moment from "moment";

function AddShoe(props) {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const history = useHistory();

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
                    <input type="text" className="form-control" name="brand" placeholder="Brand"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="model" className="form-label">Mode</label>
                    <input type="text" className="form-control" name="model" placeholder="Model"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="shoeType" className="form-label">Type of Shoe</label>
                    <input type="text" className="form-control" name="shoeType"
                           placeholder="Type of Shoe(Road/Trail)"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="miles" className="form-label">Miles Covered</label>
                    <input type="text" className="form-control" name="miles" placeholder="Miles Covered"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cost" className="form-label">Cost</label>
                    <input type="text" className="form-control" name="cost" placeholder="cost"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="startDate" className="form-label">Start Date</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
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
