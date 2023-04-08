const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const logSchema = new mongoose.Schema(
    {
    title: { type: String, required: true },
    entry: { type: String, required: true },
    isShipBroken: { type: Boolean },
},
{ timestamps: true }
);

const Log = mongoose.model('Log', logSchema);

module.exports = Log;