const db = require("../mysql-con");
const paginate = require("../methods/paginate");

module.exports = {
  createCategory: (req, res) => {
    const sqlStatment = `INSERT INTO category SET ?`;
    db.query(sqlStatment, req.body, (err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.sendStatus(201);
    });
  },
};
