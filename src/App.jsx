import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./components/Dashboard";

function App() {
  const [userData, setUserData] = useState([]);
  // test getting data from database
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
      <div>
        {userData.length &&
          userData.map((user) => {
            return (
              <React.Fragment key={user.id}>
                <div>Username: {user.username}</div>
                <div>email: {user.email}</div>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}

export default App;
