const { db, conConfig } = require("../mysql-con");
const paginate = require("../methods/paginate");
const mysql = require("mysql2/promise");
const fanat = require("../methods/useless_function");

module.exports = {
  //get all orders
  getAllOrders: (req, res) => {
    const sqlStatment = `
    SELECT * FROM orders
    LEFT JOIN (SELECT 
      id as ptId,
      username as ptUsername,
      email as ptEmail,
      fname as ptFname,
      lname as ptLname,
      bdate as ptBdate,
      gender as ptGender,
      phone as ptPhone,
      SSN as ptSSN,
      address as ptAddress,
      role as ptRole
      FROM user) p ON orders.patient_id  = p.ptId
    LEFT JOIN (SELECT 
      recpt.id as recptId,
      recpt.username as recptUsername,
      recpt.email as recptEmail,
      recpt.fname as recptFname,
      recpt.lname as recptLname,
      recpt.bdate as recptBdate,
      recpt.gender as recptGender,
      recpt.phone as recptPhone,
      recpt.SSN as recptSSN,
      recpt.address as recptAddress,
      recpt.role as recptRole,
      emp.shift as recptShift
      FROM user recpt LEFT JOIN emp ON id = user_id) r ON orders.receptionist_id  = r.recptId
      LEFT JOIN (SELECT 
        s.id as srvId, s.name as srvName, s.cost, 
        dep.name as depName
        FROM services s 
        LEFT JOIN dep ON s.dep_id = dep.id
        ) service ON orders.services_id  = service.srvId
      LEFT JOIN (SELECT 
        r.id as resID, 
        f.id as fileId, f.file_url as fileURL,
        rep.id as repId, rep.text as repTxt
        FROM result r 
        LEFT JOIN file f ON r.file_id = f.id
        LEFT JOIN report rep ON r.report_id = rep.id) result ON orders.result_id  = result.resID
      LEFT JOIN (SELECT 
        appt.id as apptId, appt.start_time as appt_start_time, appt.end_time as appt_end_time
        FROM appointment appt) apptm ON orders.id  = apptm.apptId
    `;
    db.query(sqlStatment, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).send(result);
    });
  },
  //get one order
  getOneOrder: async (req, res) => {
    const id = req.params.id;
    const sqlStatment = `
    SELECT * FROM orders
    LEFT JOIN (SELECT 
      id as ptId,
      username as ptUsername,
      email as ptEmail,
      fname as ptFname,
      lname as ptLname,
      bdate as ptBdate,
      gender as ptGender,
      phone as ptPhone,
      SSN as ptSSN,
      address as ptAddress,
      role as ptRole
      FROM user) p ON orders.patient_id  = p.ptId
    LEFT JOIN (SELECT 
      recpt.id as recptId,
      recpt.username as recptUsername,
      recpt.email as recptEmail,
      recpt.fname as recptFname,
      recpt.lname as recptLname,
      recpt.bdate as recptBdate,
      recpt.gender as recptGender,
      recpt.phone as recptPhone,
      recpt.SSN as recptSSN,
      recpt.address as recptAddress,
      recpt.role as recptRole,
      emp.shift as recptShift
      FROM user recpt LEFT JOIN emp ON id = user_id) r ON orders.receptionist_id  = r.recptId
      LEFT JOIN (SELECT 
        s.id as srvId, s.name as srvName, s.cost, 
        dep.name as depName
        FROM services s 
        LEFT JOIN dep ON s.dep_id = dep.id) service ON orders.services_id  = service.srvId
      LEFT JOIN (SELECT
        r.id as resID, 
        f.id as fileId, f.file_url as fileURL,
        rep.id as repId, rep.text as repTxt
        FROM result r 
        LEFT JOIN file f ON r.file_id = f.id
        LEFT JOIN report rep ON r.report_id = rep.id) result ON orders.result_id  = result.resID
        LEFT JOIN (SELECT 
          appt.id as apptId, appt.start_time as appt_start_time, appt.end_time as appt_end_time
          FROM appointment appt) apptm ON orders.id  = apptm.apptId
        WHERE orders.id = ?
    `;
    db.query(sqlStatment, id, (err, result) => {
      if (err) return res.status(400).send(err);
      if (result.length === 0)
        return res.status(404).json({ message: "Not Found" });
      res.status(200).json(result);
    });
    // try {
    //   const ans = await fanat(
    //     "orders",
    //     [
    //       { table: "user", var: "receptionist" },
    //       { table: "user", var: "patient" },
    //       { table: "result", var: "result" },
    //     ],
    //     id
    //   );
    //   const service = await fanat(
    //     "services",
    //     [
    //       { table: "dep", var: "dep" },
    //       { table: "device", var: "device" },
    //     ],
    //     ans.orders.services_id
    //   );
    //   const finalObj = { ...ans, ...service };

    //   res.status(200).json(finalObj);
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).json(err);
    // }
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
