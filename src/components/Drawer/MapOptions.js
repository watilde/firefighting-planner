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
  listItem: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

function MapOptions() {
  const classes = useStyle();
  const { state, dispatch } = useStore();
  const { threeD } = state.map;

  const handleChange = target => {
    dispatch({
      type: `@map/toggle${target}`
    });
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listHeader}>Map Options</ListItem>
      <ListItem className={classes.listItem}>
        <Typography>3D</Typography>
        <Switch
          checked={threeD}
          onChange={() => {
            handleChange("ThreeD");
          }}
        />
      </ListItem>
    </List>
  );
}

export default MapOptions;
