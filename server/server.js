const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 1337;

app.use(express.static("dist"));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Service listening on port: ${PORT}`));
