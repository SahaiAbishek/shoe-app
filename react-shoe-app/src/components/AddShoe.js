import React, {Component} from 'react';

class AddShoe extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        if(event.target.elements.brand.value){
            this.props.shoes.push({
                Brand: event.target.elements.brand.value,
                Model: event.target.elements.model.value,
                Type: event.target.elements.shoeType.value,
                Miles: event.target.elements.miles.value,
                Cost: event.target.elements.cost.value
            });
            this.props.onHistory.push('/');
        }
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="brand" className="form-label">Brand</label>
                        <input type="text" className="form-control" name="brand" placeholder="Brand" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="model" className="form-label">Mode</label>
                        <input type="text" className="form-control" name="model" placeholder="Model" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="shoeType" className="form-label">Type of Shoe</label>
                        <input type="text" className="form-control" name="shoeType" placeholder="Type of Shoe(Road/Trail)" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="miles" className="form-label">Miles Covered</label>
                        <input type="text" className="form-control" name="miles" placeholder="Miles Covered" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cost" className="form-label">Cost</label>
                        <input type="text" className="form-control" name="cost" placeholder="cost" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddShoe;
