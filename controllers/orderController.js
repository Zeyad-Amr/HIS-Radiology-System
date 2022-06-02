const db = require("../mysql-con");

module.exports = {
  createOrder: (req, res) => {
    const creatorId = req.user.id.toString();
    if (Object.keys(req.body).length === 0) {
      return res.sendStatus(400);
    }
    const data = { ...req.body, receptionist_id: creatorId };
    const sqlStatment = `INSERT INTO order SET receptionist_id: 66, patient_id: 66`;
    db.query(sqlStatment, (err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.status(201).json(result);
    });
  },
};
