const db = require("../mysql-con");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");

function validate(user) {
  const passwordValidations = {
    min: 8,
    max: 1024,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 0,
    requirementCount: 4,
  };

  const schema = Joi.object({
    username: Joi.string().min(6).max(255).required(),
    fname: Joi.string().min(2).max(50), //.required(),
    lname: Joi.string().min(2).max(50), //.required(),
    phone: Joi.string().min(7).max(15),
    email: Joi.string().min(5).max(255).email().required(),
    address: Joi.string(),
    password: passwordComplexity(passwordValidations).required(),
    confirm_password: passwordComplexity(passwordValidations).required(),
    gender: Joi.string().min(4).max(6), //.required(),
    SSN: Joi.string()
      .length(14)
      .pattern(/^[0-9]+$/)
      .required(),
    bdate: Joi.number()
      .integer()
      .min(1920)
      .max(new Date(Date.now()).getFullYear()),
    //.required(),
    role: Joi.string().min(3).max(50),
    depID: Joi.number().integer().min(0),
  });
  return schema.validate(user);
}

const createToken = (id) => {
  const payload = { id };
  const token = jwt.sign(payload, "temporary secret for testing");
  return token;
};

module.exports = {
  //get all users
  getAllUsers: (req,res) => {
    try {
        db.query(`SELECT * FROM user`,(err,result) => {
          if (err) {
            return res.status(404).json({message: "No users found"})
          }
          res.status(200).json(result)
        })
    } catch (err) {
    res.status(500).json(err);
    }
  },

  //create a new patient user
  createUser: async (req, res) => {
    try {
      // const result = validate(req.body);
      // if (result.error)
      //   return res
      //     .status(400)
      //     .send({ message: result.error.details[0].message });

      const value = req.body;
      const result = { value };

      if (req.body.password !== req.body.confirm_password) {
        return res.status(400).send({ message: "Password didn't match" });
      }

      //encrypt password
      const salt = await bcrypt.genSalt(10);
      const userPassword = await bcrypt.hash(result.value.password, salt);
      console.log(userPassword);

      const {username, email, fname, lname, bdate, gender,phone,SSN,address} = result.value

      data = {
        username,
        email,
        password: userPassword,
        fname,
        lname,
        bdate,
        gender,
        phone,
        SSN,
        address,
        role: 'patient',
    }

      sqlStatment = `INSERT INTO user SET ?`;
      db.query(sqlStatment, data, (err, result) => {
        if (err) {
          return res.status(400).json(err);
        }
        db.query(
          `SELECT id FROM user WHERE username=?`,
          data[0],
          (err, result) => {
            if (err) {
              return res.status(400).json(err);
            }
            // const token = createToken(result[0].id);
            // res.header("auth-token", token);
          }
        );
        res.status(200).json(result);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ err });
    }
  },
};
