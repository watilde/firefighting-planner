import React, { forwardRef } from "react";
import MaterialTable from "material-table";
import { Select, MenuItem, TextField } from "@material-ui/core";
import {
  AddBox,
  ArrowUpward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn
} from "@material-ui/icons";
import uuidv4 from "uuid/v4";
import { useStore } from "../../store/configureStore";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function Table() {
  const { dispatch, state } = useStore();
  const { plans } = state.planner;
  const { reports } = state.reporter;
  const data = [].concat(plans, reports);
  const onRowAdd = newData => {
    newData.uuid = uuidv4();
    if (newData.category === "Plan") {
      const newPlans = [].concat(plans, newData);
      dispatch({
        type: "@planner/setPlans",
        plans: newPlans
      });
    } else {
      const newReports = [].concat(reports, newData);
      dispatch({
        type: "@reporter/setReports",
        reports: newReports
      });
    }
    return new Promise((resolve, reject) => {
      resolve();
    });
  };
  const onRowUpdate = newData => {
    if (newData.category === "Plan") {
      const newPlans = [].concat(plans).map(plan => {
        return plan.uuid === newData.uuid ? newData : plan;
      });
      dispatch({
        type: "@planner/setPlans",
        plans: newPlans
      });
    } else {
      const newReports = [].concat(reports).map(report => {
        return report.uuid === newData.uuid ? newData : report;
      });
      dispatch({
        type: "@reporter/setReports",
        reports: newReports
      });
    }
    return new Promise((resolve, reject) => {
      resolve();
    });
    return new Promise((resolve, reject) => {
      resolve();
    });
  };
  const onRowDelete = oldData => {
    if (oldData.category === "Plan") {
      const newPlans = []
        .concat(plans)
        .filter(plan => plan.uuid !== oldData.uuid);
      dispatch({
        type: "@planner/setPlans",
        plans: newPlans
      });
    } else {
      const newReports = []
        .concat(reports)
        .filter(report => report.uuid !== oldData.uuid);
      dispatch({
        type: "@reporter/setReports",
        reports: newReports
      });
    }
    return new Promise((resolve, reject) => {
      resolve();
    });
  };
  return (
    <MaterialTable
      title="All posted data"
      icons={tableIcons}
      options={{
        title: false,
        search: false,
        exportButton: true,
        editable: true,
        minBodyHeight: `${window.innerHeight - 180}px`
      }}
      style={{
        borderRadius: 0
      }}
      columns={[
        {
          title: "Category",
          field: "category",
          editComponent: props => (
            <Select
              value={props.value || ""}
              onChange={e => props.onChange(e.target.value)}
            >
              <MenuItem value="Report">Report</MenuItem>
              <MenuItem value="Plan">Plan</MenuItem>
            </Select>
          )
        },
        { title: "Type", field: "type" },
        { title: "Description", field: "description" },
        {
          title: "Latitude",
          field: "lat",
          editComponent: props => (
            <TextField
              fullWidth
              placeholder="Latitude"
              type="number"
              value={props.value || ""}
              onChange={e => props.onChange(e.target.value)}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{ min: -90, max: 90 }}
            />
          )
        },
        {
          title: "Longitude",
          field: "lon",
          editComponent: props => (
            <TextField
              fullWidth
              placeholder="Longitude"
              type="number"
              value={props.value || ""}
              onChange={e => props.onChange(e.target.value)}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{ min: -180, max: 180 }}
            />
          )
        },
        {
          title: "Date time",
          field: "dateTime",
          editComponent: props => (
            <TextField
              type="datetime-local"
              value={props.value || ""}
              onChange={e => props.onChange(e.target.value)}
              InputLabelProps={{
                shrink: true
              }}
            />
          )
        }
      ]}
      editable={{
        onRowAdd,
        onRowUpdate,
        onRowDelete
      }}
      data={data}
    />
  );
}
export default Table;
