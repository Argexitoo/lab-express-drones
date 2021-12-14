// Iteration #1
const {Schema, model} = require("mongoose");

const dronSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
})

const Drone = model("Drone", dronSchema);

module.exports = Drone;