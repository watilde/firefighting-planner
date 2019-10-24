import React from "react";
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import PlanButton from "./PlanButton";
import PlanDialog from "./PlanDialog";
import Map from "./Map";

function Planner() {
  return (
    <>
      <Header />
      <Drawer />
      <Map />
      <PlanDialog />
      <PlanButton />
    </>
  );
}

export default Planner;
