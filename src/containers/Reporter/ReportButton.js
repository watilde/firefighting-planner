import React from "react";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { useStore } from "../../store/configureStore";

const useStyle = makeStyles(theme => ({
  fab: {
    position: "fixed",
    margin: theme.spacing(1),
    bottom: 0,
    right: 0
  }
}));

function ReportButton() {
  const { state, dispatch } = useStore();
  const { lat, lon } = state.reporter;
  const { time } = state.app;
  const classes = useStyle();

  const handleFabClick = _ => {
    dispatch({
      type: "@reporter/setDialogOpen",
      dialogOpen: true
    });
    dispatch({
      type: "@reporter/setReport",
      report: {
        type: "",
        description: "",
        time,
        lat,
        lon
      }
    });
  };
  return (
    <Fab
      color="secondary"
      aria-label="add"
      className={classes.fab}
      onClick={handleFabClick}
    >
      <AddIcon />
    </Fab>
  );
}

export default ReportButton;
