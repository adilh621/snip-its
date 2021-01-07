
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snipitSchema = new Schema({
	username: { type: String, required: true },
	title: { type: String, required: true },
	body: { type: String, required: true },
	category: { type: String, required: true },
	date: { type: Date, default: Date.now },
});

const Snipit = mongoose.model("Snipit", snipitSchema);

module.exports = Snipit;
