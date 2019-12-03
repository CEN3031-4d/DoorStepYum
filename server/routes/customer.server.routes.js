const customer = require('../controllers/customer.server.controller.js'),
  express = require('express'),
  router = express.Router();

router.route('/getCustomers')
  .get(customer.allCustomers);

router.route('/getCustomersFull')
  .get(customer.allCustomersFull);

router.route('/find/:id')
  .get(customer.returnByID);

  router.route('/findFull/:id')
  .get(customer.findFull)

router.route('/add')
  .post(customer.addCustomer);

router.route('/update/:id')
  .post(customer.updateCustomer);

router.route('/delete/:id')
  .delete(customer.deleteCustomer);

router.route('/cart/add/:id')
  .post(customer.addToCart);
router.route('/logIn')
  .get(customer.logIn);

module.exports = router;