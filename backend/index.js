const PORT = 8081;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());

// ---------------------ROUTES------------------------ //

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/results", (req, res) => {
  const options = {
    method: "GET",
    url: "https://randomuser.me/api/",
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.error(err));
});

// -------------------------------------------------- //
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
