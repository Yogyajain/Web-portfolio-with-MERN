const express =require("express");
const router = express.Router();
const {getContact,getContacts,createContact,deleteContact,updateContact}= require("../controller/contact_controller");

router.route("/").get(getContacts);

router.route("/:id").get(getContact);
  
router.route("/").post(createContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);
      
module.exports = router;