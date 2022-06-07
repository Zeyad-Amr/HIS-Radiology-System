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
// await fanat(
//   "orders",
//   [
//     { table: "user", var: "receptionist" },
//     { table: "user", var: "patient" },
//     await fanat("services", [
//       { table: "dep", var: "dep" },
//       { table: "device", var: "device" },
//     ]),

//     { table: "result", var: "result" },
//   ],
//   id
// );
