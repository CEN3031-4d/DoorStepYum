var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

 // adding password encryption to customer model
var encrypt = require('mongoose-encryption');

var customerSchema = new Schema({
    customerName: {type: String, required: true, unique: true},
    customerEmail: {type: String, required: true, unique: true},
    customerPassword: {type: String, required: true, unique: true},   
});

var encKey = "14/Ka3iTsIwtJyuKOxS9L67Xztbd9zqOuJIbDKoV6l8=";
var sigKey = "q2APMyrfcjBbM/jXgQi+aLSYBx9vQyS2E2VYzxgCjcoFUIP9xmTh5WBjgO/gJDDrofnsOTOpV+YDz7eRQ4besg==";

// adding keys
customerSchema.plugin(encrypt, {requireAuthenticationCode: false, encryptionKey: encKey, signingKey: sigKey, encryptedFields: ['customerPassword']});
var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
