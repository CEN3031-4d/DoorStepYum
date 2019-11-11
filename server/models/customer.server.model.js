var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

var customerSchema = new Schema({
    customerName: {type: String, required: true, unique: true},
    customerEmail: {type: String, required: true, unique: true},
    customerPassword: {type: String, required: true, unique: true},   
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
