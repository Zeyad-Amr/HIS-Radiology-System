const { db } = require("../mysql-con");
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
    fname: Joi.string().min(2).max(50).required(),
    lname: Joi.string().min(2).max(50).required(),
    phone: Joi.string().min(7).max(15).required(),
    email: Joi.string().min(5).max(255).email().required(),
    address: Joi.string(),
    password: passwordComplexity(passwordValidations).required(),
    confirm_password: passwordComplexity(passwordValidations).required(),
    gender: Joi.string().min(4).max(6).required(),
    SSN: Joi.string()
      .length(14)
      .pattern(/^[0-9]+$/)
      .required(),
    bdate: Joi.date().required(),
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
  getAllUsers: (req, res) => {
    db.query(
      `SELECT * 
    FROM user LEFT JOIN emp
    ON id = user_id`,
      (err, result) => {
        if (err) {
          return res.status(400).json(err);
        }
        if (result.length === 0)
          return res.status(404).json({ message: "Not Found" });
        res.status(200).send(result);
      }
    );
  },

  // get user
  getUser: (req, res) => {
    console.log(req.query);
    // console.log(Object.keys(req.query)[0]);
    const [filterName] = Object.keys(req.query);
    const filter = req.query[filterName];
    console.log(filterName);
    console.log(filter);
    let selectStat = `SELECT * 
    FROM user LEFT JOIN emp 
    ON id = user_id 
    WHERE ${filterName} = ?`;
    if (!filterName) {
      selectStat = `SELECT * 
      FROM user LEFT JOIN emp 
      ON id = user_id `;
    }

    db.query(selectStat, filter, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json(result[0]);
    });
  },

  //create a new patient user
  createUser: async (req, res) => {
    // const result = validate(req.body);
    // if (result.error)
    //   return res.status(400).send({ message: result.error.details[0].message });

    if (req.body.password !== req.body.confirm_password) {
      return res.status(400).send({ message: "Password didn't match" });
    }
    const value = req.body;
    const result = { value };

    //encrypt password
    const salt = await bcrypt.genSalt(10);
    const userPassword = await bcrypt.hash(result.value.password, salt);
    console.log(userPassword);

    const {
      username,
      email,
      fname,
      lname,
      bdate,
      gender,
      phone,
      SSN,
      address,
      country,
    } = result.value;

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
      country,
      role: "patient",
    };

    sqlStatment = `INSERT INTO user SET ?`;
    db.query(sqlStatment, data, (err, result) => {
      if (err) {
        if (
          err.code === "ER_DUP_ENTRY" &&
          err.sqlMessage.includes("username")
        ) {
          return res.status(400).json({ message: "username is taken" });
        }
        return res.status(400).send(err);
      }
      db.query(
        `SELECT * FROM user WHERE id=?`,
        result.insertId,
        (err, result) => {
          if (err) {
            return res.status(400).json(err);
          }
          const user = result[0];
          const token = createToken({ id: user.id, role: user.role });
          res.header("auth-token", token);
          res.status(201).json({ ...user, token });
        }
      );
    });
  },

  //edit user
  editUser: (req, res) => {
    const id = req.params.id;
    if (req.body.role && req.user.role !== "Admin") {
      return res.status(403).send("Not Authorized");
    }
    db.query(
      `UPDATE user SET ? WHERE id = ?`,
      [req.body, id],
      (err, result) => {
        if (err) {
          return res.status(400).send(err);
        }
        if (result.affectedRows === 0)
          return res.status(404).json({ message: "Not Found" });
        res.sendStatus(200);
      }
    );
  },

  //delete user
  deleteUser: (req, res) => {
    const id = req.params.id;

    db.query(`DELETE FROM user WHERE id = ?`, id, (err, result) => {
      if (err) {
        return res.status(400).send(err);
      }
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Not Found" });
      res.sendStatus(200);
    });
  },
};
