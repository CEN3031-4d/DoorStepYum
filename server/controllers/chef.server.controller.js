const Chef = require('../models/chef.server.model.js')
//Used to populate the table in client\src\components\Chefs\Chefs.js
exports.allChefs = (req, res) => {
    Chef.find((err, chefs) => {
        if (err) {
          console.log(err);
        }
        else {
          res.json(chefs);
        }
      });
};
//Used to initialize the forms in client\src\components\EditChef\EditChef.js
exports.returnByID = (req, res) => {
        let id = req.params.id;
        Chef.findById(id, function (err, chef) {
          if (err) {
            console.log(err);
          } else {
            res.json(chef);
          }
        });
}

//Used to update the specified entry in client\src\components\EditChef\EditChef.js
exports.updateChef = (req, res) => {
    Chef.findById(req.params.id, function (err, chef) {
      if (!chef)
        res.status(400).send('Chef is not found');
      else {
        chef.chefName = req.body.chefName;
        chef.chefBio = req.body.chefBio;
        chef.chefExperience = req.body.chefExperience;
        chef.chefEmail = req.body.chefEmail;
        chef.chefPassword = req.body.chefPassword;
        chef.chefPrice = req.body.chefPrice;
        chef.chefPicture = req.body.chefPicture;
  
        chef.save()
          .then(chef => {
            res.json('Chef Updated');
          })
          .catch(err => {
            res.status(400).send('Update not possible');
          })
      }
    })
  }
  
  //Used to create a new Chef in client\src\components\CreateChef\CreateChef.js
  exports.addChef = (req, res) => {
    let chef = new Chef(req.body);
    chef.save()
      .then(chef => {
        res.status(200).json({ 'chef': 'chef added successfully' });
      })
      .catch(err => {
        res.status(400).send('adding new chef failed');
      });
  }

  //Used to delete a Chef in client\src\components\Chefs\Chefs.js
  exports.deleteChef = (req, res) => {
    Chef.findById(req.params.id, (err, chef) => {
      if (!chef)
        res.status(400).send('Chef is not found');
      else {
        chef.remove()
          .then(chef => {
            res.json('Chef Deleted');
          })
          .catch(err => {
            res.status(400).send(err);
          })
      }
    })
  }