import React from "react";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import uuidv4 from "uuid/v4";
import { useStore } from "../../store/configureStore";

const useStyle = makeStyles(theme => ({
  fab: {
    position: "fixed",
    margin: theme.spacing(1),
    bottom: 0,
    right: 0
  }
}));

function PlanButton() {
  const { state, dispatch } = useStore();
  const { lat, lon } = state.planner;
  const { dateTime } = state.app;
  const classes = useStyle();

  const handleFabClick = _ => {
    dispatch({
      type: "@planner/setDialogOpen",
      dialogOpen: true
    });
    dispatch({
      type: "@planner/setPlan",
      plan: {
        uuid: uuidv4(),
        type: "",
        description: "",
        dateTime,
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

export default PlanButton;
