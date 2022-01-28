import React from "react";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <form action="submit">
        <label htmlFor="username">
          <input type="text" required name="username" placeholder="username" />
        </label>
        <label htmlFor="email">
          <input type="email" required name="email" placeholder="email" />
        </label>
        <button type="submit" id="add">
          Add user
        </button>
        <button type="submit" id="delete">
          Delete user
        </button>
        <button type="submit" id="edit">
          Edit user
        </button>
      </form>
    </section>
  );
};

export default Dashboard;
