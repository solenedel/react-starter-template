import React, { useEffect } from "react";
import axios from "axios";

function App() {
  // test getting API data from back end
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:8081/results",
    };

    axios
      .request(options)
      .then((response) => {
        console.log("DATA FROM BACK END: BITCOIN EXCHANGE RATE", response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // test getting data from database
  useEffect(() => {
    axios
      .get("http://localhost:8081/dbtest")
      .then((response) => {
        console.log("DATA FROM DATABASE", response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h3>My react project</h3>
    </div>
  );
}

export default App;
