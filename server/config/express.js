const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    chefRouter = require('../routes/chef.server.routes');
    custRouter = require('../routes/customer.server.routes');
    dishRouter = require('../routes/dish.server.routes');
    multer = require('multer');
    upload = multer(),
    port = process.env.PORT || 5000;

var cors = require('cors')
module.exports.init = () => {
    /* 
        connect to database
        - reference README for db uri
    */
    
    /* for local use
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true
    });
    */

    // HEROKU NOT CONNECTING
    mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
        useNewUrlParser: true
    });
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // ERROR POTENTIALLY HERE (was "http://localhost:3000") 
    //Byspass the cors policy. Only works locally right now.
    //app.use(cors());
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        next();
      }); 

    // enable request logging for development debugging
    app.use(morgan('dev'));

    
    // body parsing middleware
    app.use(bodyParser.json());

    app.use(upload.any())

    // add a router
    app.use('/api/chef', chefRouter);
    app.use('/api/dish', dishRouter);
    app.use('/api/customer', custRouter);

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function (req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
}

app.listen(port, () => console.log(`Server now running on port ${port}!`));
