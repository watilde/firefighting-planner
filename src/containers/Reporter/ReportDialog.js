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

function ReportDialog() {
  const { dispatch, state } = useStore();
  const { report, reports, dialogOpen } = state.reporter;
  const classes = useStyle();

  const handleDialogClose = () => {
    dispatch({
      type: "@reporter/setDialogOpen",
      dialogOpen: false
    });
  };

  const handleReport = e => {
    const newReport = Object.assign({}, report);
    newReport[e.target.name] = e.target.value;
    dispatch({
      type: "@reporter/setReport",
      report: newReport
    });
  };

  const handleSave = _ => {
    const newReports = [].concat(reports, report);
    dispatch({
      type: "@reporter/setReports",
      reports: newReports
    });
    dispatch({
      type: "@reporter/setDialogOpen",
      dialogOpen: false
    });
  };

  return (
    <Dialog
      open={dialogOpen}
      onClose={handleDialogClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">New report</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your report will be immediately shared with the firefighters.
        </DialogContentText>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="type">Report type</InputLabel>
          <Select
            inputProps={{
              name: "type"
            }}
            value={report.type}
            onChange={handleReport}
          >
            <MenuItem value="Evacuation help">Evacuation help</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <TextField
          label="Description"
          name="description"
          value={report.description}
          fullWidth
          onChange={handleReport}
        />
        <br />
        <br />
        <TextField
          name="dateTime"
          label="When"
          type="datetime-local"
          value={report.dateTime}
          InputLabelProps={{
            shrink: true
          }}
          onChange={handleReport}
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

export default ReportDialog;
