
const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const SnipitSchema = new mongoose.Schema({
	username: { 
		type: String, 
		required: true 
	},
	category: { 
		type: String 
	},
	title: { 
		type: String,
		 required: true 
		},
	body: { type: String,
		 required: true 
		},
	date: { type: Date,
		 default: Date.now 
		},
});

const Snipit = mongoose.model("Snipit", SnipitSchema);
// Snipit.createIndexes();

module.exports = Snipit;
