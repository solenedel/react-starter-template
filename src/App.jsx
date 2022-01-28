import React, { useEffect } from "react";
import axios from "axios";
import Dashboard from "./components/Dashboard";

function App() {
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
      <Dashboard />
    </div>
  );
}

export default App;
