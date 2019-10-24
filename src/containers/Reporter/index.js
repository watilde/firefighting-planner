import React from "react";
import Header from "../../components/Header";
import ReportButton from "./ReportButton";
import ReportDialog from "./ReportDialog";
import Map from "./Map";

function Reporter() {
  return (
    <>
      <Header />
      <Map />
      <ReportDialog />
      <ReportButton />
    </>
  );
}

export default Reporter;
