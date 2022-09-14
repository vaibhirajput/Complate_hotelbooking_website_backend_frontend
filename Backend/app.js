const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require('./Routes/Routes');
const bodyparser = require("body-parser");

const app = express();
const PORT = 7000;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(routes);



app.listen(PORT, () => {
  console.log("Server is Running on PORT" + PORT);
});
