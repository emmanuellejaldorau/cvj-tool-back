const express = require("express");
const router = express.Router();
const User = require("../models/user-model.js");


//-----------------------ADD USER -----------------------
router.post(
  "/users",
  (req, res, next) => {
    const { fullName, email } = req.body;


    User.create({ fullName, email })
      .then(userDoc => {
        res.json(userDoc);
      })
      .catch(err => next(err));
  }
);


//---------------------DELETE CONTACT -----------------------
router.delete("/users/:userId", (req, res, next) => {

  const { userId } = req.params;

  User.findByIdAndRemove(userId)
    .then(userDoc => {
      res.send(`Contact ${userDoc.fullName} deleted successfully`);
    })
    .catch(err => next(err));
});


//----------------------CONTACT LIST ------------------------
router.get("/users", (req, res, next) => {
  
    User.find()
      .then(result => {
        res.json(result);
      })
      .catch(err => next(err));
  });
  
  
  //---------------------CONTACT DETAILED PAGE -----------------------------  
  router.get("/users/:userId", (req, res, next) => {

    const { userId } = req.params;
  
    Contact.findById(userId)
      .then(userDoc => {
        res.json(userDoc);
      })
      .catch(err => next(err));
  });
  

module.exports = router;
