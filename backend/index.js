const PORT = 8081;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { Pool } = require("pg");

let dotenvPath = "./.env";

let ORIGIN_URL = "";
if (process.env.NODE_ENV === "production") {
  console.log("running in production!");
  ORIGIN_URL = "*";
  dotenvPath = "./.env";
} else {
  console.log("running in development!");
  ORIGIN_URL = "*";
  dotenvPath = "./.env";
}

require("dotenv").config({ path: dotenvPath });

// Postgres database connection set up
const dbParams = require("./db/dbParams");

const db = new Pool(dbParams);
db.connect(() => console.log("✅ connected to db"));

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: ORIGIN_URL, // ORIGIN_URL
};
app.use(cors(corsOptions));

// ---------------------ROUTES------------------------ //

// test call to get database data
app.get("/dbtest", (req, res) => {
  const queryText = `SELECT * FROM users;`;

  db.query(queryText)
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      console.log(err);
      res.json([]);
    });
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
