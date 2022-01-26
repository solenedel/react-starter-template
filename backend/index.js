const PORT = 8081;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

// -------------------------------------------------- //
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
