const db = require("../mysql-con");
const Joi = require("joi");

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

module.exports = {
  createEmp: async (req, res) => {
    try {
      const {salary, degree, shift,dep_id,user_id} = req.body
      const empData = {
        salary,
        degree,
        shift,
        user_id,
        dep_id
    }
      db.query(
        `INSERT INTO emp SET ?`,
        empData,
        (err, result) => {
          if (err) {
            return res.status(400).send(err);
          }
          console.log(result);
          
          res.status(200).json(result);
        }
      );
       
    } catch (err) {
      console.log(err);
      res.status(500).json({ err });
    }
  },






  updateEmp: (req, res) => {
    try {
    } catch (err) {
      res.status(500).json({ err });
    }
  },
};
