/*
const Example = require('../models/examples.server.model.js')

exports.hello = function(req, res) {
    res.send('world')
};
*/


/* Dependencies */
var mongoose = require('mongoose'), 
    Chef = require('../models/chef.server.model.js');

    
/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update chefs.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the chef(s) as JSON in the response.

  HINT: if you are struggling with implementing these functions refer back to this tutorial 
  https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
  or
  https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
  

  If you are looking for more understanding of exports and export modules - 
  https://www.sitepoint.com/understanding-module-exports-exports-node-js/
  or
  https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/
 */

/* Create a chef */
exports.create = function(req, res) {

  /* Instantiate a Chef */
  var chef = new Chef(req.body);
 
  /* Then save the chef */
  chef.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(chef);
      console.log(chef)
    }
  });
};

/* Show the current chef */
exports.read = function(req, res) {
  /* send back the chef as json from the request */
  res.json(req.chef);
};

/* Update a chef - note the order in which this function is called by the router*/
exports.update = function(req, res) {
  var chef = req.chef;

  /* Replace the chefs's properties with the new properties found in req.body */
  Chef.findOneAndUpdate(chef.chefName, {
    address: req.body.address},
    {new: true},
   function(err, newChef) {
     
    // error checking
    if (err) {
      console.log(err);
      res.status(404).send(err);
    } 
     
    /* Save the chef */
    chef.save(function(err) {
      if(err) {
        console.log(err);
        res.status(400).send(err);} 
      else {
        res.json(newChef);
        console.log(newChef)
      }
    });
  });
};

/* Delete a chef */
exports.delete = function(req, res) {
  var chef = req.chef;

  /* Add your code to remove the chefs */
  Chef.findByIdAndRemove(chef.id, function(err) {
    if (err) {
      res.status(404).send(err);
      } 
    res.json(chef);
  });
};

/* Retreive all the directory chefs, sorted alphabetically by chef code */
exports.list = function(req, res) {
  // no parameters in find for find all!
  Chef.find({}, function(err, listAll) 
  {
    if(err) {
      res.status(404).send(err);
    }
    res.send(listAll);
  }).sort({code: 1});
    
    
};

/* 
  Middleware: find a chef by its ID, then pass it to the next request handler. 

  HINT: Find the chef using a mongoose query, 
        bind it to the request object as the property 'chef', 
        then finally call next
 */
exports.chefByID = function(req, res, next, id) {
  Chef.findById(id).exec(function(err, chef) {
    if(err) {
      res.status(404).send(err);
    } else {
      req.chef = chef;
      next();
    }
  });
};