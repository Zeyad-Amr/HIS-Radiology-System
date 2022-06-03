const db = require("../mysql-con");

module.exports = {
  //get all employees
  getAllEmp: (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    db.query(`SELECT * FROM emp`, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      const paginatedResult = paginate(result, page, limit);
      res.status(200).send(paginatedResult);
    });
  },
  //get one employee
  getOneEmp: (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM emp WHERE user_id = ?`, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json(result[0]);
    });
  },
  //add employee
  createEmp: (req, res) => {
    const { salary, degree, shift, dep_id, user_id } = req.body;
    const empData = {
      salary,
      degree,
      shift,
      user_id,
      dep_id,
    };
    db.query(`INSERT INTO emp SET ?`, empData, (err, result) => {
      if (err) return res.status(400).send(err);
      console.log(result);

      res.status(201).json({ message: "Employee added successfully" });
    });
  },

  updateEmp: (req, res) => {
    const id = req.params.id;
    db.query(
      `UPDATE emp SET ? WHERE user_id = ?`,
      [req.body, id],
      (err, result) => {
        if (err) return res.status(400).send(err);
        if (result.affectedRows === 0)
          return res.status(404).json({ message: "Not Found" });
        res.status(200).json({ message: "Employee edited successfully" });
      }
    );
  },
  //delete employee
  deleteEmp: (req, res) => {
    const id = req.params.id;
    db.query(`DELETE FROM emp WHERE user_id = ?`, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json({ message: "Employee deleted successfully" });
    });
  },
};
