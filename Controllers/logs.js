const express = require('express');
const Log = require('../Models/log');
const router = express.Router()

module.exports = router;

// Index route
router.get('/', (req, res) => {
    Log.find({})
      .then(result => {
        res.render('Index', {
          logs: result
        })
      })
      .catch(error => {
        console.error(error)
        res.send(error)
      })
  })
  
  // New
  router.get('/new', (req, res) => {
    res.render('New')
  })
  
  // Delete route
  router.delete('/:id', (req, res) => {
    Log.deleteOne({ _id: req.params.id })
      .then(result => {
        console.log(result);
        res.redirect('/logs')
      })
      .catch(error => {
        console.error(error)
        res.send(error)
      })
  })
  
  // Update
  router.put('/:id', (req, res) => {
    if (req.body.isShipBroken === 'on') {
      req.body.isShipBroken = true
    } else {
      req.body.isShipBroken = false
    }
  
    Log.updateOne({ _id: req.params.id }, req.body)
      .then(result => {
        console.log(result);
        res.redirect(`/logs/${req.params.id}`);
      })
      .catch(error => {
        console.error(error);
        res.send(error);
      })
  })
  
  // Create
  router.post('/', (req, res) => {
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
        console.error(error);
        res.send(error);
      })
  })
  
  // Edit
  router.get('/:id/edit', (req, res) => {
    Log.findOne({ _id: req.params.id })
      .then(result => {
        res.render('Edit', { log: result });
      })
      .catch(error => {
        console.error(error);
        res.send(error);
      })
  })
  
  // Show
  router.get('/:id', (req, res) => {
    Log.findOne({ _id: req.params.id })
      .then(result => {
        res.render('Show', { log: result });
      })
      .catch(error => {
        console.error(error);
        res.send(error);
      })
  })
  
  module.exports = router;
