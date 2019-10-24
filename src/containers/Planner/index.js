import React from "react";
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import ActionButton from "./ActionButton";
import ActionDialog from "./ActionDialog";
import Map from "./Map";

function Planner() {
  return (
    <>
      <Header />
      <Drawer />
      <Map />
      <ActionDialog />
      <ActionButton />
    </>
  );
}

export default Planner;
