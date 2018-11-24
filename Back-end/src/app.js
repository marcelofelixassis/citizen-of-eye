const express = require("express");
const cors = require("cors");

var app = express();

app.use(cors());

require("./controllers/deputiesController")(app);
require("./controllers/socialController")(app);

app.listen(4000, () => {
   console.log("Ready!");
});