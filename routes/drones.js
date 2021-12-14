const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model');

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
  .then((drones) => {
    console.log("drones:", drones)
    res.render("drones/list", {drones})
  })
  .catch((e) => console.log(`Error: ${e}`))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name,propellers,maxSpeed} = req.body;
  Drone.create({name,propellers,maxSpeed})
  .then((drone) => {
    console.log("drone created:",drone)
    res.redirect("/drones")
  })
  .catch((e) => console.log(`Error: ${e}`))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  Drone.findById(id)
  .then(drone => {
    res.render("drones/update-form", {drone})
  })
  .catch((e) => console.log(`Error: ${e}`))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params
  const {name,propellers,maxSpeed} = req.body;
  Drone.findByIdAndUpdate(id, {name,propellers,maxSpeed}, {new:true})
  .then(drone => {
    console.log("drone", drone)
    res.redirect("/drones")
  })
  .catch((e) => console.log(`Error: ${e}`))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params
  Drone.findByIdAndDelete(id)
  .then(() => {
    res.redirect("/drones")
  })
  .catch((e) => console.log(`Error: ${e}`))
});

module.exports = router;
