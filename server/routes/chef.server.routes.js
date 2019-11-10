const chef = require('../controllers/chef.server.controller.js'),
  express = require('express'),
  router = express.Router()
//Used to populate the table in client\src\components\Chefs\Chefs.js
router.route('/')
  .get(chef.allChefs);

//Used to initialize the forms in client\src\components\EditChef\EditChef.js
router.route('/:id')
  .get(chef.returnByID);

//Used to create a new Chef in client\src\components\CreateChef\CreateChef.js
router.route('/add')
  .post(chef.addChef);

//Used to update the specified entry in client\src\components\EditChef\EditChef.js
router.route('/update/:id')
  .post(chef.updateChef);

//Used to delete a Chef in client\src\components\Chefs\Chefs.js
router.route('/delete/:id')
  .delete(chef.deleteChef);

module.exports = router;