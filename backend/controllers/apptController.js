const { db } = require("../mysql-con");
const paginate = require("../methods/paginate");

module.exports = {
  //get all appointment
  getAllAppts: (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    db.query(`SELECT * FROM appointment`, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      const paginatedResult = paginate(result, page, limit);
      res.status(200).send(paginatedResult);
    });
  },
  //get one appointment
  getOneAppt: (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM appointment WHERE id = ?`, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json(result[0]);
    });
  },
  //add Appt
  createAppt: (req, res) => {
    const sqlStatment = `INSERT INTO appointment SET ?`;
    const query = db.query(sqlStatment, req.body, (err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.sendStatus(201);
    });
    console.log(query);
  },
  //edit Appt
  updateAppt: (req, res) => {
    const id = req.params.id;
    db.query(
      `UPDATE appointment SET ? WHERE id = ?`,
      [req.body, id],
      (err, result) => {
        if (err) return res.status(400).send(err);
        if (result.affectedRows === 0)
          return res.status(404).json({ message: "Not Found" });
        res.status(200).json({ message: "Appt edited successfully" });
      }
    );
  },
  //delete Appt
  deleteAppt: (req, res) => {
    const id = req.params.id;
    db.query(`DELETE FROM appointment WHERE id = ?`, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json({ message: "Appt deleted successfully" });
    });
  },
};
