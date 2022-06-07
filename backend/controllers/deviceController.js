const { db } = require("../mysql-con");
const paginate = require("../methods/paginate");

module.exports = {
  //get all Devices
  getAllDevices: (req, res) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    db.query(`SELECT * FROM device`, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      const paginatedResult = paginate(result, page, limit);
      res.status(200).send(paginatedResult);
    });
  },

  //get one Device
  getOneDevice: (req, res) => {
    const id = req.params.id;
    db.query(`SELECT * FROM device WHERE id = ?`, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json(result[0]);
    });
  },

  //Search with Device name
  searchDeviceName: (req, res) => {
    const name = req.params.name;
    db.query(`SELECT * FROM device WHERE name = ?`, name, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json(result[0]);
    });
  },

  //add Device
  createDevice: (req, res) => {
    const { serial_number, name, arrivial_date, installation_date } = req.body;
    const deviceData = {
      serial_number,
      name,
      arrivial_date,
      installation_date,
    };
    db.query(`INSERT INTO device SET ?`, deviceData, (err, result) => {
      if (err) return res.status(400).send(err);
      console.log(result);
      res.status(201).json({ message: "Device added successfully" });
    });
  },

  //update Device
  updateDevice: (req, res) => {
    const id = req.params.id;
    db.query(
      `UPDATE device SET ? WHERE id = ?`,
      [req.body, id],
      (err, result) => {
        if (err) return res.status(400).send(err);
        if (result.affectedRows === 0)
          return res.status(404).json({ message: "Not Found" });
        res.status(200).json({ message: "Device edited successfully" });
      }
    );
  },

  //delete Device
  deleteDevice: (req, res) => {
    const id = req.params.id;
    db.query(`DELETE FROM device WHERE id = ?`, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json({ message: "Device deleted successfully" });
    });
  },
};
