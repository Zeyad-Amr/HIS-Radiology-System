const { db } = require("../mysql-con");

module.exports = {
  //get all report
  getAllreport: (req, res) => {
    db.query(`SELECT * FROM report`, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).send(result);
    });
  },
  //get one report
  getOnereport: (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM report WHERE id = ?`, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json(result[0]);
    });
  },
  createreport: (req, res) => {
    const creatorId = req.user.id;
    if (Object.keys(req.body).length === 0) {
      return res.sendStatus(400);
    }
    const data = { ...req.body, doctor_id: creatorId };
    const sqlStatment = `INSERT INTO report SET ?`;
    db.query(sqlStatment, data, (err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.sendStatus(201);
    });
  },
  //edit report
  updatereport: (req, res) => {
    const id = req.params.id;
    const creatorId = req.user.id;
    if (Object.keys(req.body).length === 0) {
      return res.sendStatus(400);
    }
    const data = { ...req.body, doctor_id: creatorId };
    db.query(`UPDATE report SET ? WHERE id = ?`, [data, id], (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json({ message: "report edited successfully" });
    });
  },
  //delete report
  deletereport: (req, res) => {
    const id = req.params.id;
    db.query(
      `UPDATE report SET text = null WHERE id = ?`,
      id,
      (err, result) => {
        if (err) return res.status(400).send(err);
        if (result.affectedRows === 0)
          return res.status(404).json({ message: "Not Found" });
        res.status(200).json({ message: "report deleted successfully" });
      }
    );
  },
};
