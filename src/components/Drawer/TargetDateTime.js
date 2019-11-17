import React from "react";
import { TextField, ListItem, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useStore } from "../../store/configureStore";

const useStyle = makeStyles(() => ({
  list: {
    padding: 0
  },
  listHeader: {
    fontWeight: "bold"
  },
  textField: {
    minWidth: "200px"
  }
}));

function TargetDateTime() {
  const classes = useStyle();
  const { state, dispatch } = useStore();
  const { dateTime } = state.app;

  const handleDateTime = e => {
    dispatch({
      type: "@app/setDateTime",
      dateTime: e.target.value
    });
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listHeader}>Target Date</ListItem>
      <ListItem>
        <TextField
          type="datetime-local"
          defaultValue={dateTime}
          className={classes.textField}
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          onChange={handleDateTime}
        />
      </ListItem>
    </List>
  );
}

export default TargetDateTime;
