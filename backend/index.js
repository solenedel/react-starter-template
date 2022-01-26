const PORT = 8081;
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const dotenvPath = "./.env";
require("dotenv").config({ path: dotenvPath });
// require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// ---------------------ROUTES------------------------ //

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/results", (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.nomics.com/v1/exchange-rates?key=${process.env.REACT_APP_NOMICS_API_KEY}`,
  };

  axios
    .request(options)
    .then((response) => {
      // get only Bitcoin (BTC) data
      const filteredData = response.data.filter((rates) => {
        return rates.currency === "BTC";
      });
      res.json(filteredData);
    })
    .catch((err) => console.error(err));
});

// -------------------------------------------------- //
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
