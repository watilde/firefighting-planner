import React from "react";
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import Table from "./Table";

function Dashboard() {
  return (
    <>
      <Header />
      <Drawer />
      <Table />
    </>
  );
}

export default Dashboard;
