const router = require("express").Router();
const bcrypt = require("bcrypt");
const { db } = require("../mysql-con");
const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  const token = jwt.sign(payload, "temporary secret for testing");
  return token;
};

/**
 * @api {post} /login POST/ login
 * @apiName PostUser
 * @apiGroup Login Router
 * @apiVersion 1.0.0
 * @apiSuccess {object}  User An object of the user logging in
 * @apiError (Error 400) valdiationError Something wrong with the body of the request
 * @apiBody {String} username The usernaem of the user logging in
 * @apiBody {String} password The password of the user logging in
 * @apiSampleRequest http://127.0.0.1:4000/api/login
 * @apiSuccessExample message:
 * {
    "id": 82,
    "username": "ahmedraouf4",
    "email": "ahmed@gmail.com",
    "password": "$2b$10$u5zEIOppgw4hx4TUVXNHwuhQW0p1JPnJO0G4KLTHehKmFneRL5jRC",
    "create_time": "2022-06-01T16:47:39.000Z",
    "fname": "ahmed",
    "lname": "raouf",
    "bdate": "2001-07-11T21:00:00.000Z",
    "gender": "male",
    "phone": "01067662457",
    "SSN": "01234567893249",
    "address": "5 hasan el saban fisl giza",
    "role": "patient",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODIsImlhdCI6MTY1NDEwMjA1OX0.Ttaqb9eU45LaW6dlN31Qr_XK8-wrxp7G-ELMbRzSIxs"
}
 *
 */
router.post("/login", (req, res) => {
  const { user, pwd } = req.body;
  db.query(
    `SELECT * FROM user
  WHERE username = ?`,
    user,
    async (err, result) => {
      if (err) {
        return console.log(err);
      }
      if (result.length === 0) {
        return res
          .status(400)
          .json({ message: "Invalid username or password" });
      }
      const user = result[0];
      const validPass = await bcrypt.compare(pwd, user.password);
      if (!validPass) {
        return res
          .status(400)
          .json({ message: "Invalid username or password" });
      }

      const token = createToken({ id: user.id, role: user.role });
      res.header("auth-token", token);
      console.log(token);
      res.status(200).send({ ...user, token });
    }
  );
});

module.exports = router;
