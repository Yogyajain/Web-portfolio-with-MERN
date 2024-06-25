const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModel");
//describe get all the contacts
//route GET api/contacts
//access private

const getContacts=asyncHandler(async(req, res) => {
  const contacts= await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
  });

//describe get contacts
//route GET api/contacts/:id
//access private

const getContact=asyncHandler(async(req, res) => {
  const contact= await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }

    res.json(contact);
  });
  //describe create contacts
//route create api/contacts
//access private

const createContact = asyncHandler(async(req, res) => {
    console.log("the req for body:", req.body);
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    console.log("Creating contact...");
    const contact= await Contact.create({
      name,
      email,
      phone,
      user_id:req.user.id,
    });
    console.log("Created contact...");
    res.status(201).json(contact);
  });
  //describe post the contacts
//route GET api/contacts
//access private

const updateContact=asyncHandler(async(req, res) => {
  console.log("the req for body:", req.body);
    const {name,email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    if(contact.user_id.toString() !== req.user.id){
      res.status(403);
      throw new Error("Other users are not allowed to update others contact");
    }
    const updated_contact= await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );
    res.status(200).json(updated_contact);
  });
//describe delete the contacts
//route GET api/contacts
//access private

const deleteContact=asyncHandler(async(req, res) => {
  const contact= await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  console.log("deleting contact"); 
  
    await Contact.findByIdAndDelete(req.params.id);
    console.log("deleted contact"); 
    res.status(200).json(contact);
  });
  module.exports ={getContacts,getContact,createContact,deleteContact,updateContact};