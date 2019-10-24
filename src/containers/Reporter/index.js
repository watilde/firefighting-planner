import React from "react";
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import ReportButton from "./ReportButton";
import ReportDialog from "./ReportDialog";
import Map from "./Map";

function Reporter() {
  return (
    <>
      <Header />
      <Drawer />
      <Map />
      <ReportDialog />
      <ReportButton />
    </>
  );
}

export default Reporter;
