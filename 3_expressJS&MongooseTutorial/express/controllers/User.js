const mongoDB = require("mongoose");

const user = require("../../mongoose/models/User");

const bcrypt = require("bcryptjs");

// Very good Explaination plus more Knowledge : https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90
const bodyParser = require("body-parser");

const router = require("express").Router();

const { check, validationResult } = require("express-validator");
const User = require("../../mongoose/models/User");

// MiddleWare Setup : They will run for every route
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// routes for user access . we used all method just for testing
// this gets invoked for /api/user/ only --------
// whom does this fxn returns this res.json ? ans : them who calls it , the url , not any fxn inside the code .
router.all("/", (req, res) => {
  return res.json({
    status: true,
    message: "user controller",
  });
});

// Create a new user, route
// this gets invoked for /api/user/createNew
router.post(
  "/createNew",
  [
    // check not empty fields
    // trim --> String trim method to removes outer extra spaces
    // escape --> if user writes any html entities like : <,/,>,!=,</br> etc then it gets converted to its resultant string
    check("userName").not().isEmpty().trim().escape(),
    check("password").not().isEmpty().trim().escape(),
    check("eMail").isEmail().normalizeEmail(),
  ],
  (req, res) => {
    // check validation errors keeping in req object
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: false,
        message: "some error occured",
        errors: errors.array(),
      });
    }

    // hashing the password , Note that this is used after errors from validation are checked
    // salt : - its a random key or password
    const hahsedPassword = bcrypt.hashSync(req.body.password, 8);

    // inserting to DB
    // how this req gets this all data from where ? Ans : we gave this data to our HTTP URL , it was taken from there , as these req & res are connected to HTTP request & response methods
    var temp = new User({
      userName: req.body.userName,
      eMail: req.body.eMail,
      password: hahsedPassword,
    });

    // saving to DB
    temp.save((anyError, result) => {
      if (anyError) {
        return res.json({
          status: false,
          message: "DB insert fail",
          errors: anyError,
        });
      }

      // If everything went OK
      return res.json({
        status: true,
        message: "DB insert Success...",
        result: result,
      });
    });
  }
);

// Reading Database using any key
// difference between req.body & req.params ??? Ans : Read Notes
router.get("/find/:eMail", (req, res) => {
  User.find({ eMail: req.params.eMail }, (anyErr, result) => {
    if (anyErr) {
      return res.json({
        status: false,
        message: "Some error occured",
        err: anyErr,
      });
    }

    // if everything OK

    return res.json({
      status: true,
      message: "Found....",
      res: result,
    });
  });
});

// updating user data in database
router.put("/update/:eMail", (req, res) => {
  // check eMail is given by user or not
  if (req.params.eMail) {
    User.updateOne(
      { eMail: req.params.eMail },
      {
        userName: "suvamm",
      },
      (anyErr, result) => {
        // if any error
        if (anyErr) {
          return res.json({
            status: true,
            message: "Update failed",
            err: anyErr,
          });
        }

        // if everything OK
        return res.json({
          status: true,
          message: "Update successful.....",
          result: result,
        });
      }
    );
  }else{
      return res.json({
          status:false,
          message:'Email not provided by the user' 
      })
  }
});

// Module exporting
module.exports = router;

/**
 * Notes :
 * 
 * 1. What is validation ? 
 * Ans : While using a website , you write any length password , then you are warned that password must be 5 length must contain this & that
    this also happens for many other fields , So what it does is , saving bogus CPU Processing. This is Validation
    This is not Authentication which involves weather this user exists or not , if exists then give him control
    That is called a different level of Validation more higher level . But that's not we are talking here . 
    Why we are not using same validator for authentication things ? Yes it can be surely used : https://auth0.com/blog/express-validator-tutorial/
 * 
 * 2. What is difference between req.body & req.params ?
 * Ans : req is the request object , req.body has the data that is given to any url by the user like 
 * when a user sends form data via submit button , then the button calls this post method and data as a JSON
 * string is transferred to post method --> url(req) --> database .
 * While req.params is referring to params in the URL , remember using /:anyParam in url building , here 'anyParam'
 * goes to req.params property .  
 */
