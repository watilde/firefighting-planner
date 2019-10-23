import React from "react";
import Header from "../../components/Header";
import ActionButton from "./ActionButton";
import ActionDialog from "./ActionDialog";
import Map from "./Map";

function Planner() {
  return (
    <>
      <Header />
      <Map />
      <ActionDialog />
      <ActionButton />
    </>
  );
}

export default Planner;
