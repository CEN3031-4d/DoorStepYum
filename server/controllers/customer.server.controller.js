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

exports.allCustomersFull = (req, res) => {
  Customer.find()
    .populate('customerCart.dish')
    .exec((err, customers) => {
      if (err) {
        console.log(err);
      }
      else {
        res.json(customers);
      }
    })
};

exports.findFull = (req, res) => {
  Customer.findById(req.params.id)
    .populate('customerCart.dish')
    .exec((err, dish) => {
      if (err) {
        console.log(err);
      }
      else {
        res.json(dish);
      }
    })
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
      customer.customerEmail = req.body.customerEmail;
      customer.customerPassword = req.body.customerPassword;

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

exports.addToCart = (req, res) => {
  Customer.findById(req.params.id, (err, customer) => {
    if (!customer)
      res.status(400).send('Customer is not found');
    else {
      customer.customerCart.push(req.body)
      customer.save()
        .then(customer => {
          res.json('Item added to cart');
        })
        .catch(err => {
          res.status(400).send(err);
        })
    }
  })
}

exports.logIn = (req, res) => {
  Customer.find({customerEmail:req.body.customerEmail}, (err, cust) => {
    if (cust.length === 0)
      res.status(404).send(false);
    else if (err)
      res.status(400).send(err);
    else if (req.body.customerPassword === cust[0].customerPassword)
      res.status(200).send(true);
    else
    res.status(404).send(false);
  })
}