const db = require("../mysql-con");
const paginate = require("../methods/paginate");

module.exports = {
  //get all services
  getAllServices: (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    db.query(`SELECT * FROM services`, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      const paginatedResult = paginate(result, page, limit);
      res.status(200).send(paginatedResult);
    });
  },
  //get one services
  getOneService: (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM services WHERE id = ?`, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json(result[0]);
    });
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
