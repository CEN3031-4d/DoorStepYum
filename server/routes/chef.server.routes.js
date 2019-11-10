const chef = require('../controllers/chef.server.controller.js'),
  express = require('express'),
  router = express.Router()

router.route('/')
  .get(chef.allChefs);

router.route('/:id')
  .get(chef.returnByID);

router.route('/add')
  .post(chef.addChef);

router.route('/update/:id')
  .post(chef.updateChef)

module.exports = router;