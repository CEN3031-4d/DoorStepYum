const customer = require('../controllers/customer.server.controller.js'),
  express = require('express'),
  router = express.Router();

router.route('/')
  .get(customer.allCustomers);

router.route('/:id')
  .get(customer.returnByID);

router.route('/add')
  .post(customer.addCustomer);

router.route('/update/:id')
  .post(customer.updateCustomer);

router.route('/delete/:id')
  .delete(customer.deleteCustomer);

  module.exports = router;