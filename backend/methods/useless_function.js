const mysql = require("mysql2/promise");
const { conConfig } = require("../mysql-con");

const fanat = async (parent, mychilds, id) => {
  const connection = await mysql.createConnection(conConfig);
  const selectStat = (model) => `SELECT * FROM ${model} WHERE id = ?;`;
  const [[parentObj]] = await connection.execute(selectStat(parent), [id]);
  async function buildObj(childs) {
    const obj = {};
    let index = 0;
    while (true) {
      if (index === childs.length) {
        return obj;
      }
      const child = childs[index];
      [[childObj]] = await connection.execute(selectStat(child.table), [
        parentObj[`${child.var}_id`],
      ]);
      obj[child.var] = !childObj ? {} : childObj;
      index++;
    }
  }
  const mohsen = await buildObj(mychilds);
  const finalObj = { ...mohsen };
  finalObj[`${parent}`] = parentObj;
  console.log(finalObj);

  return finalObj;
};

module.exports = fanat;

//to use it with order
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
