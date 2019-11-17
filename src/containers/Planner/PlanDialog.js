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

const useStyle = makeStyles(() => ({
  formControl: {
    minWidth: 120
  }
}));

function PlanDialog() {
  const { dispatch, state } = useStore();
  const { plan, plans, dialogOpen } = state.planner;
  const classes = useStyle();

  const handleDialogClose = () => {
    dispatch({
      type: "@planner/setDialogOpen",
      dialogOpen: false
    });
  };

  const handlePlan = e => {
    const newPlan = Object.assign({}, plan);
    newPlan[e.target.name] = e.target.value;
    dispatch({
      type: "@planner/setPlan",
      plan: newPlan
    });
  };

  const handleSave = () => {
    const newPlans = [].concat(plans, plan);
    dispatch({
      type: "@planner/setPlans",
      plans: newPlans
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
      <DialogTitle id="form-dialog-title">Add plan</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Added plan will be immediately shared with the other teams.
        </DialogContentText>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="type">Plan type</InputLabel>
          <Select
            inputProps={{
              name: "type"
            }}
            value={plan.type}
            onChange={handlePlan}
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
          value={plan.description}
          fullWidth
          onChange={handlePlan}
        />
        <br />
        <br />
        <TextField
          name="dateTime"
          label="When"
          type="datetime-local"
          value={plan.dateTime}
          InputLabelProps={{
            shrink: true
          }}
          onChange={handlePlan}
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

export default PlanDialog;
