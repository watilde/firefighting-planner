import React from "react";
import { Divider, IconButton, Drawer as AppDrawer } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import { useStore } from "../../store/configureStore";
import Menu from "./Menu";
import TargetDateTime from "./TargetDateTime";
import MapOptions from "./MapOptions";

const useStyle = makeStyles(theme => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  drawerPaper: {
    width: 260
  }
}));

function Drawer() {
  const { dispatch, state } = useStore();
  const { drawerOpen } = state.app;
  const classes = useStyle();

  const handleDrawerClose = _ => {
    dispatch({
      type: "@app/toggleDrawer"
    });
  };

  return (
    <AppDrawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={drawerOpen}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <TargetDateTime />
      <Divider />
      <Menu />
      <Divider />
      <MapOptions />
    </AppDrawer>
  );
}

export default Drawer;
