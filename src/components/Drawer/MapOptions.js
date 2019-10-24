import React from "react";
import { Switch, Typography, ListItem, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useStore } from "../../store/configureStore";

const useStyle = makeStyles(theme => ({
  list: {
    padding: 0
  },
  listHeader: {
    fontWeight: "bold"
  },
  listText: {
    fontSize: "14px"
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: 0,
    paddingBottom: 0
  }
}));

function MapOptions() {
  const classes = useStyle();
  const { state, dispatch } = useStore();
  const { threeD, compass, cordinates, viewControls } = state.map;

  const handleChange = target => {
    dispatch({
      type: `@map/toggle${target}`
    });
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listHeader}>Map options</ListItem>
      <ListItem className={classes.listItem}>
        <Typography className={classes.listText}>3D</Typography>
        <Switch
          checked={threeD}
          onChange={() => {
            handleChange("ThreeD");
          }}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography className={classes.listText}>Compass</Typography>
        <Switch
          checked={compass}
          onChange={() => {
            handleChange("Compass");
          }}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography className={classes.listText}>Cordinates</Typography>
        <Switch
          checked={cordinates}
          onChange={() => {
            handleChange("Cordinates");
          }}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography className={classes.listText}>View Controls</Typography>
        <Switch
          checked={viewControls}
          onChange={() => {
            handleChange("ViewControls");
          }}
        />
      </ListItem>
    </List>
  );
}

export default MapOptions;
