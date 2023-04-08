require('dotenv').config()
const express = require('express');
const app = express();

//dependencies
const mongoose = require('mongoose');

const Log = require('./Models/log.js')


//global configuration
const methodOverride=require('method-override');
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection;

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("open", () => console.log("mongo connected"));
db.on("close", () => console.log("mongo disconnected"));

//middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine())

//connect to Mongo
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
})
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));

//register router
const logController = require('./Controllers/logs');
app.use('/logs', logController);

/* // Mount routes

//Index route
app.get('/logs', (req, res) => {
  Log.find({})
    .then(result => {
      res.render('Index', {
        logs: result
      })
    });
})

//New route
app.get('/logs/new', (req, res) => {
  	res.render('New');
});

//Delete route
app.delete('/logs/:id', (req, res) => {
    Log.deleteOne({ _id: req.params.id })
    .then(result => {
      console.log(result);
      res.redirect('/logs')
    })
})

//Update route
app.put('/logs/:id', (req, res) => {
    if (req.body.isShipBroken === 'on') {
      req.body.isShipBroken = true
    } else {
      req.body.isShipBroken = false
    }
    
Log.updateOne({_id: req.params.id }, req.body)
  .then(result => {
    console.log(result);
    res.redirect(`logs/${req.params.id}`)
  })

  .catch(error => {
    console.error(error)
      res.send(error);
})
})

//Create route
app.post('/logs', (req, res) => {
  console.log(req.body);
  if (req.body.isShipBroken === 'on') {
    req.body.isShipBroken = true
  } else {
    req.body.isShipBroken = false
  }
  Log.create(req.body)
    .then(result => {
      console.log(result);
        res.redirect('/logs');
    })
    .catch(error => {
      res.send("something went wrong!")
    })
});

//Edit route
app.get('logs/:id/edit', (req, res) => {
  Log.findOne({_id: req.params.id})
    .then(result => {
      res.render('Edit', {
        log: result
      });
    })
    .catch(error => {
      console.error(error)
        res.send(error)
    })
})
//Show route
app.get('/logs/:id', (req, res) => {
  Log.findOne({_id: req.params.id})
    .then(result => {
      res.render('Show', {
        logs: result
      })
    })
}) */

// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
})