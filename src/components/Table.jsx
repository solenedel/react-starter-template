import React from "react";
import { v4 as uuidv4 } from "uuid";

const Table = ({ userData }) => {
  return (
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
  );
};

export default Table;
