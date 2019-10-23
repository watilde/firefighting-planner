import React from "react";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useStore } from "../../store/configureStore";

const useStyle = makeStyles(theme => ({
  formControl: {
    minWidth: 120
  }
}));

function ActionDialog() {
  const { dispatch, state } = useStore();
  const { action, actions, dialogOpen } = state.planner;
  const classes = useStyle();

  const handleDialogClose = () => {
    dispatch({
      type: "@planner/setDialogOpen",
      dialogOpen: false
    });
  };

  const handleAction = e => {
    const newAction = Object.assign({}, action);
    newAction[e.target.name] = e.target.value;
    dispatch({
      type: "@planner/setAction",
      action: newAction
    });
  };

  const handleSave = _ => {
    const newActions = [].concat(actions, action);
    dispatch({
      type: "@planner/setActions",
      actions: newActions
    });
    dispatch({
      type: "@planner/setDialogOpen",
      dialogOpen: false
    });
  };

  return (
    <Dialog
      open={dialogOpen}
      onClose={handleDialogClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add action</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Added action will be immediately shared with the other teams.
        </DialogContentText>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="type">Action type</InputLabel>
          <Select
            inputProps={{
              name: "type"
            }}
            value={action.type}
            onChange={handleAction}
          >
            <MenuItem value="Spraying the water">Spraying the water</MenuItem>
            <MenuItem value="Prescribed burning">Prescribed burning</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <TextField
          label="Description"
          name="description"
          value={action.description}
          fullWidth
          onChange={handleAction}
        />
        <br />
        <br />
        <TextField
          name="time"
          label="When"
          type="datetime-local"
          value={action.time}
          InputLabelProps={{
            shrink: true
          }}
          onChange={handleAction}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ActionDialog;
