const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const users = require("./routes/api/users");

const db = require("./config/keys").mongoURI;

app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

mongoose.connect(db)
        .then(()=> console.log("MongoDB Success"))
        .catch(err => console.log(err));

app.get("/",(req,res) => {
  res.send("Hello Word!");
});

app.use("/api/users",users);

const port = process.env.PORT || 5000;

app.listen(port,() => {
  console.log(`Server running on port ${port}`);
}) ;