const { db } = require("../mysql-con");
const paginate = require("../methods/paginate");

module.exports = {
  //get all file
  getAllfile: (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    db.query(`SELECT * FROM file`, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      const paginatedResult = paginate(result, page, limit);
      res.status(200).send(paginatedResult);
    });
  },
  //get one file
  getOnefile: (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM file WHERE id = ?`, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json(result[0]);
    });
  },
  createfile: (req, res) => {
    const creatorId = req.user.id;
    if (Object.keys(req.body).length === 0) {
      return res.sendStatus(400);
    }
    const data = { ...req.body, tech_id: creatorId };
    const sqlStatment = `INSERT INTO file SET ?`;
    db.query(sqlStatment, data, (err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.sendStatus(201);
    });
  },
  //edit file
  updatefile: (req, res) => {
    const id = req.params.id;
    const creatorId = req.user.id;
    if (Object.keys(req.body).length === 0) {
      return res.sendStatus(400);
    }
    const data = { ...req.body, tech_id: creatorId };
    db.query(`UPDATE file SET ? WHERE id = ?`, data, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json({ message: "file edited successfully" });
    });
  },
  //delete file
  deletefile: (req, res) => {
    const id = req.params.id;
    db.query(`DELETE FROM file WHERE id = ?`, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json({ message: "file deleted successfully" });
    });
  },
};
