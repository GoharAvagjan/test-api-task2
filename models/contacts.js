const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ContactsSchema = new Schema({
    id: ObjectId,
    email: {type: String, required: true, unique: true},
    name: String,
}, {versionKey: false, timestamps:true});





module.exports = mongoose.model('Contacts', ContactsSchema);