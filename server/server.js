const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.static("dist"));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Service listening on port: ${PORT}`));
