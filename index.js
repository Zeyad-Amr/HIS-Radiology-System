const express = require("express");
const db = require("./mysql-con");
const cors = require("cors");
const app = express();

const PORT = 4000;

//parse the body of the request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//enable cors
app.use(cors());

//Router middlerwares
app.use("/api", require("./routes/login"));
// app.use("/api", require("./routes/patient"));
app.use("/api", require("./routes/employee"));
app.use("/api", require("./routes/users"));
app.use("/api", require("./routes/departement"));
app.use("/api", require("./routes/device"));
// app.use("/api", require("./routes/appointment"));
// app.use("/api", require("./routes/bill"));
app.use("/api", require("./routes/category"));
app.use("/api", require("./routes/services"));
app.use("/api", require("./routes/order"));

//connect to database
db.connect((err) => {
  if (err) return console.log(err);
  console.log("***connected to database***");
});

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
