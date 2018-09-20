const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");

const db = require("./config/keys").mongoURI;
const mongo = {
  uri: db,
  opt: {
    useNewUrlParser: true
  }
};

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect(mongo.uri, mongo.opt)
        .then(() => console.log("MongoDB Success"))
        .catch(err => console.log(err));


app.use(passport.initialize());
require("./config/passport")(passport);

// app.get("/",(req,res) => {
//   res.send("Hello Word!");
// });

app.use("/api/users",users);
app.use("/api/profiles",profiles);

const port = process.env.PORT || 5000;

app.listen(port,() => {
  console.log(`Server running on port ${port}`);
}) ;