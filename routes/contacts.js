const express = require("express");
const router = express.Router();
const Contact = require("../models/contact-model.js");


//-----------------------ADD CONTACT -----------------------
router.post(
  "/contacts",
  (req, res, next) => {
    const { fullName, email, phone } = req.body;


    Contact.create({ fullName, email, phone })
      .then(contactDoc => {
        res.json(contactDoc);
      })
      .catch(err => next(err));
  }
);


//---------------------DELETE CONTACT -----------------------
router.delete("/contacts/:contactId", (req, res, next) => {

  const { contactId } = req.params;

  Contact.findByIdAndRemove(contactId)
    .then(contactDoc => {
      res.send(`Contact ${contactDoc.fullName} deleted successfully`);
    })
    .catch(err => next(err));
});


//----------------------CONTACT LIST ------------------------
router.get("/contacts", (req, res, next) => {
  
    Contact.find()
      .then(result => {
        res.json(result);
      })
      .catch(err => next(err));
  });
  
  
  //---------------------CONTACT DETAILED PAGE -----------------------------  
  router.get("/contacts/:contactId", (req, res, next) => {

    const { contactId } = req.params;
  
    Contact.findById(contactId)
      .then(contactDoc => {
        res.json(contactDoc);
      })
      .catch(err => next(err));
  });
  

module.exports = router;