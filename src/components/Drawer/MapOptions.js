import React from "react";
import { ListItem, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useStore } from "../../store/configureStore";

const useStyle = makeStyles(theme => ({
  list: {
    padding: 0
  },
  listHeader: {
    fontWeight: "bold"
  }
}));

function MapOptions() {
  const classes = useStyle();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listHeader}>Map Options</ListItem>
      <ListItem>test</ListItem>
    </List>
  );
}

export default MapOptions;
