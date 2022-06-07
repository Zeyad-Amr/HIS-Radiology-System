const { db } = require("../mysql-con");

module.exports = {
  //get all appointment
  getAllAppts: (req, res) => {
    const selectFilter = `SELECT *
      FROM (SELECT a.start_time, a.end_time, a.id, a.services_id as srvId FROM appointment a) appt
      LEFT JOIN (SELECT 
        s.id as srvId, s.name as srvName, dep.name as depName, dep.id as depId
        FROM services s JOIN dep ON s.id = dep.id) srv 
      ON appt.srvId = srv.srvId
    WHERE id NOT IN (
    SELECT appointment_id
    FROM orders o
    JOIN appointment app
    ON o.appointment_id = app.id
    AND DATE(o.create_time) = ?
    )`;
    const select = `SELECT *
    FROM (SELECT a.start_time, a.end_time, a.id, a.services_id as srvId FROM appointment a) appt
    LEFT JOIN (SELECT 
      s.id as srvId, s.name as srvName, dep.name as depName, dep.id as depId
      FROM services s JOIN dep ON s.id = dep.id) srv 
    ON appt.srvId = srv.srvId
    `;
    const { day } = req.query;
    db.query(!day ? select : selectFilter, day, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).send(result);
    });
  },
  //get one appointment
  getOneAppt: (req, res) => {
    const id = req.params.id;
    const select = `SELECT *
    FROM (SELECT a.start_time, a.end_time, a.id, a.services_id as srvId FROM appointment a) appt
    LEFT JOIN (SELECT 
      s.id as srvId, s.name as srvName, dep.name as depName, dep.id as depId
      FROM services s JOIN dep ON s.id = dep.id) srv 
    ON appt.srvId = srv.srvId
    `;
    db.query(select, id, (err, result) => {
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
