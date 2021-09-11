const express = require("express");
const router = express.Router();
const Contact = require("../models/contact-model.js");
const xlsxFile = require('read-excel-file/node');
const fileUploader = require("../config/file-uploader")



//-----------------------ADD CONTACT -----------------------
router.post("/contact", (req, res, next) => {
  const { fullName, email, phone } = req.body;

  Contact.create({ fullName, email, phone })
    .then(contactDoc => {
      res.json(contactDoc);
    })
    .catch(err => next(err));
});


//-----------------------ADD CONTACTS WITH EXCEL FILE -----------------------

router.post(
  "/contacts",
  fileUploader.single("file"),
  (req, res, next) => {
    let excelDocPath;
    if (req.file) {
      excelDocPath = req.file.secure_url;
    }
    console.log("FILE", excelDocPath);

    try {
      readXlsxFile(filePath).then(rows => {
          console.log(rows);
    
          // Remove Header ROW
          rows.shift();
          const customers = [];
    
          for(let i=0; i<rows.length; i++){
    
              let customer = {
                  platform: rows[i][12],
                  name: rows[i][13],
                  birthdate: rows[i][14],
                  email: rows[i][15],
                  phoneNumber: rows[i][16],
                  postalCode: rows[i][17]
              }
    
              customers.push(customer);
          }
    
          Contact.insertMany(customers).then(() => {
              const result = {
                  status: "ok",
                  filename: req.file.originalname,
                  message: "Upload Successfully!",
              }
      
              res.json(result);
          });
      });
    }
    catch(error) {
      const result = {
          status: "fail",
          filename: req.file.originalname,
          message: "Upload Error! message = " + error.message
      }
      res.json(result);
    }
  }
);


//-----------------------UPDATE CONTACT -----------------------
router.put('/contacts/:id', (req, res, next) => {

  const { fullName, email, phone } = req.body;

  const updatedContact = new Contact({
    _id: req.params.id,
    fullName,
    email,
    phone
  });

  Contact.updateOne({_id: req.params.id}, updatedContact)
    .then(contactDoc => {
      res.json(contactDoc);
    })
    .catch(err => next(err));
});


//---------------------DELETE CONTACT -----------------------
router.delete("/contacts/:contactId", (req, res, next) => {

  const { contactId } = req.params;

  Contact.findByIdAndRemove(contactId)
    .then(contactDoc => {
      res.send(`Contact ${contactDoc.fullName} deleted successfully`);
    })
    .catch(err => next(err));
});


//----------------------CONTACTS LIST ------------------------
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