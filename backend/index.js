const express = require("express");
const port = 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const connect = require("./db/connection/connect");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
connect();

app.use("/test_end",createUserRoute)

app.get("/", (req, res) => {
  res.send("Hello, World!");
});



app.listen(port,()=>{
  console.log(`${port}`);
})










// const docs = async () => {
//   const data = await Person.findOne({age: "20"});
//   console.log(data);
// };

// docs();
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
