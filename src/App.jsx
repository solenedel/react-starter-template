import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import Table from "./components/Table";

function App() {
  const [userData, setUserData] = useState([]);

  // test GET from database
  useEffect(() => {
    axios
      .get("http://localhost:8081/dbtest")
      .then((response) => {
        // console.log("DATA FROM DATABASE", response.data[0]);
        setUserData((prev) => [...prev, ...response.data]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <Dashboard />
      {userData.length && <Table userData={userData} />}
    </div>
  );
}

export default App;
