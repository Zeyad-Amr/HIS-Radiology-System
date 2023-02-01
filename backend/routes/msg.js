const router = require("express").Router();
const { db } = require("../mysql-con");

//get contact_us
router.get("/contact_us", (req, res) => {
  db.query(`SELECT * FROM messages`, (err, result) => {
    if (err) return res.status(400).send(err);
    if (result.length === 0)
      return res.status(404).json({ message: "Not Found" });
    res.status(200).send(result);
  });
});

//add a contact_us
router.post("/contact_us", (req, res) => {
  db.query(`INSERT INTO messages SET ?`, req.body, (err, result) => {
    if (err) return res.status(400).send(err);
    console.log(result);
    res.sendStatus(201);
  });
});

// delete all contact_us
router.delete("/contact_us", (req, res) => {
  const id = req.params.id;
  db.query(`DELETE FROM messages`, id, (err, result) => {
    if (err) return res.status(400).send(err);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Not Found" });
    res.sendStatus(200);
  });
});
// delete one contact_us
router.delete("/contact_us/:id", (req, res) => {
  const id = req.params.id;
  db.query(`DELETE FROM messages WHERE id = ?`, id, (err, result) => {
    if (err) return res.status(400).send(err);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Not Found" });
    res.sendStatus(200);
  });
});

module.exports = router;
