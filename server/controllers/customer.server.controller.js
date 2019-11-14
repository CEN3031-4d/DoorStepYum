const Customer = require('../models/customer.server.model');


exports.allCustomers = (req, res) => {
  Customer.find((err, customers) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(customers);
    }
  });
};

exports.returnByID = (req, res) => {
  let id = req.params.id;
  Customer.findById(id, function (err, customer) {
    if (err) {
      console.log(err);
    } else {
      res.json(customer);
    }
  });
}

exports.updateCustomer = (req, res) => {
  Customer.findById(req.params.id, function (err, customer) {
    if (!customer)
      res.status(400).send('Customer is not found');
    else {
      customer.customerName = req.body.customerName;
      customer.customerBio = req.body.customerBio;
      customer.customerExperience = req.body.customerExperience;
      customer.customerEmail = req.body.customerEmail;
      customer.customerPassword = req.body.customerPassword;
      customer.customerPrice = req.body.customerPrice;
      customer.customerPicture = req.body.customerPicture;

      customer.save()
        .then(customer => {
          res.json('Customer Updated');
        })
        .catch(err => {
          res.status(400).send(err);
        })
    }
  })
}

exports.addCustomer = (req, res) => {
  let customer = new Customer(req.body);
  customer.save()
    .then(customer => {
      res.status(200).json({ 'customer': 'customer added successfully' });
    })
    .catch(err => {
      res.status(400).send(err);
    });
}
exports.deleteCustomer = (req, res) => {
  Customer.findById(req.params.id, (err, customer) => {
    if (!customer)
      res.status(400).send('Customer is not found');
    else {
      customer.remove()
        .then(customer => {
          res.json('Customer Deleted');
        })
        .catch(err => {
          res.status(400).send(err);
        })
    }
  })
}