const express = require('express');
const router = express.Router();
const contactsModel = require('../models/contacts');

router.route('/').get(async (req, res) => {
    const contacts = await contactsModel.find();
    res.json(contacts);

}).post(async (req, res) => {
    const { email, name } = req.body;
    const contact = new contactsModel();
    contact.email = email;
    contact.name = name;

    await contact.save();

    res.json({
        success: true,
        data: contact,
        massage: 'contact created'
    });

}).patch((req, res) => {
    res.end('contact patch');
}).delete((req, res) => {
    res.end('contact delete');
});


router.route('/:email').get(async (req, res) => {
    const contact = await contactsModel.findOne({
       email : req.params.email
   });

   res.json(contact);

}).patch(async (req, res) => {
    const contact = await contactsModel.findOne({email: req.params.email});
    if(req.body.email){
        contact['email'] = req.body.email
    }
    await contact.save();
    res.json(contact);
}).delete(async (req, res) => {
    const contact = await contactsModel.findOne({email: req.params.email});
    if(contact) {
        contact.remove();
    }
    res.json({
        success: true
    })
});

module.exports = router;