import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
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
      {userData.length && (
        <table>
          <tbody>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>

            {userData.map((user) => {
              return (
                <tr key={uuidv4()}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
