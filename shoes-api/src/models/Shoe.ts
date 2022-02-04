var mongoose = require('mongoose');

const schema = mongoose.Schema({
    email: String,
    brand: String,
    model: String,
    typeOfShoe: String,
    miles: String,
    cost: String,
    startDate: Date,
    endDate: Date
})

module.exports = mongoose.model("Shoe", schema)
