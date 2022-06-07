const { db } = require("../mysql-con");

module.exports = {
  //get all services
  getAllServices: (req, res) => {
    db.query(
      `SELECT s.id, s.name, s.cost, dep.name as depName ,d.name as deviceName, d.id as deviceId FROM services s
    LEFT JOIN dep ON s.dep_id = dep.id
    LEFT JOIN device d ON s.device_id = d.id`,
      (err, result) => {
        if (err) return res.status(400).send(err);
        if (result.length === 0)
          return res.status(404).json({ message: "Not Found" });
        res.status(200).send(result);
      }
    );
  },
  //get one services
  getOneService: (req, res) => {
    const id = req.params.id;
    db.query(
      `SELECT s.id, s.name, s.cost, dep.name as depName ,d.name as deviceName, d.id as deviceId FROM services s
    LEFT JOIN dep ON s.dep_id = dep.id
    LEFT JOIN device d ON s.device_id = d.id WHERE s.id = ?`,
      id,
      (err, result) => {
        if (err) return res.status(400).send(err);
        if (result.length === 0)
          return res.status(404).json({ message: "Not Found" });
        res.status(200).json(result[0]);
      }
    );
  },
  //add service
  createService: (req, res) => {
    const sqlStatment = `INSERT INTO services SET ?`;
    const query = db.query(sqlStatment, req.body, (err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.sendStatus(201);
    });
    console.log(query);
  },
  //edit service
  updateService: (req, res) => {
    const id = req.params.id;
    db.query(
      `UPDATE services SET ? WHERE id = ?`,
      [req.body, id],
      (err, result) => {
        if (err) return res.status(400).send(err);
        if (result.affectedRows === 0)
          return res.status(404).json({ message: "Not Found" });
        res.status(200).json({ message: "service edited successfully" });
      }
    );
  },
  //delete service
  deleteservices: (req, res) => {
    const id = req.params.id;
    db.query(`DELETE FROM services WHERE id = ?`, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json({ message: "service deleted successfully" });
    });
  },
};
