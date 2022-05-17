const router = require("express").Router();
const bcrypt = require("bcrypt");
const db = require("../mysql-con");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  const payload = { id };
  const token = jwt.sign(payload, "temporary secret for testing");
  return token;
};

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
      const token = createToken(user.id);
      res.header("auth-token", token);
      res.status(200).send(user);
    }
  );
});

module.exports = router;
