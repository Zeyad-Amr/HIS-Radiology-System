const db = require("../mysql-con");
const paginate = require("../methods/paginate");

module.exports = {
  //get all orders
  getAllOrders: (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    db.query(`SELECT * FROM orders`, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      const paginatedResult = paginate(result, page, limit);
      res.status(200).send(paginatedResult);
    });
  },
  //get one order
  getOneOrder: (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM orders WHERE id = ?`, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json(result[0]);
    });
  },
  createOrder: (req, res) => {
    const creatorId = req.user.id;
    if (Object.keys(req.body).length === 0) {
      return res.sendStatus(400);
    }
    const data = { ...req.body, receptionist_id: creatorId };
    const sqlStatment = `INSERT INTO orders SET ?`;
    db.query(sqlStatment, data, (err, result) => {
      if (err) {
        return res.status(400).json(err);
      }
      res.sendStatus(201);
    });
  },
  //edit orders
  updateOrder: (req, res) => {
    const id = req.params.id;
    db.query(
      `UPDATE orders SET ? WHERE id = ?`,
      [req.body, id],
      (err, result) => {
        if (err) return res.status(400).send(err);
        if (result.affectedRows === 0)
          return res.status(404).json({ message: "Not Found" });
        res.status(200).json({ message: "order edited successfully" });
      }
    );
  },
  //delete order
  deleteOrder: (req, res) => {
    const id = req.params.id;
    db.query(`DELETE FROM orders WHERE id = ?`, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json({ message: "order deleted successfully" });
    });
  },
};
