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

//-----------------------UPDATE USER -----------------------
router.put('/users/:id', (req, res, next) => {

  const { fullName, email } = req.body;

  const updatedUser = new User({
    _id: req.params.id,
    fullName,
    email
  });

  User.updateOne({_id: req.params.id}, updatedUser)
    .then(userDoc => {
      res.json(userDoc);
    })
    .catch(err => next(err));
});


//---------------------DELETE USER -----------------------
router.delete("/users/:userId", (req, res, next) => {

  const { userId } = req.params;

  User.findByIdAndRemove(userId)
    .then(userDoc => {
      res.send(`Contact ${userDoc.fullName} deleted successfully`);
    })
    .catch(err => next(err));
});


//----------------------USER LIST ------------------------
router.get("/users", (req, res, next) => {
  
    User.find()
      .then(result => {
        res.json(result);
      })
      .catch(err => next(err));
  });
  
  
  //---------------------USER DETAILED PAGE -----------------------------  
  router.get("/users/:userId", (req, res, next) => {

    const { userId } = req.params;
  
    Contact.findById(userId)
      .then(userDoc => {
        res.json(userDoc);
      })
      .catch(err => next(err));
  });
  

module.exports = router;
