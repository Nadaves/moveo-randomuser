import React from "react";
import UsersTable from "../Components/Table";
import Navbar from "../Components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="Container">
      <Navbar />
      <UsersTable />
    </div>
  );
}

export default Home;
