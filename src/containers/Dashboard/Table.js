import React, { forwardRef } from "react";
import PropTypes from "prop-types";
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
  Add: forwardRef(function AddIcon(props, ref) {
    return <AddBox {...props} ref={ref} />;
  }),
  Check: forwardRef(function CheckIcon(props, ref) {
    return <Check {...props} ref={ref} />;
  }),
  Clear: forwardRef(function ClearIcon(props, ref) {
    return <Clear {...props} ref={ref} />;
  }),
  Delete: forwardRef(function DeleteIcon(props, ref) {
    return <DeleteOutline {...props} ref={ref} />;
  }),
  DetailPanel: forwardRef(function DetailPanelIcon(props, ref) {
    return <ChevronRight {...props} ref={ref} />;
  }),
  Edit: forwardRef(function EditIcon(props, ref) {
    return <Edit {...props} ref={ref} />;
  }),
  Export: forwardRef(function ExportIcon(props, ref) {
    return <SaveAlt {...props} ref={ref} />;
  }),
  Filter: forwardRef(function FilterIcon(props, ref) {
    return <FilterList {...props} ref={ref} />;
  }),
  FirstPage: forwardRef(function FirstPageIcon(props, ref) {
    return <FirstPage {...props} ref={ref} />;
  }),
  LastPage: forwardRef(function LastPageIcon(props, ref) {
    return <LastPage {...props} ref={ref} />;
  }),
  NextPage: forwardRef(function NextPageIcon(props, ref) {
    return <ChevronRight {...props} ref={ref} />;
  }),
  PreviousPage: forwardRef(function PreviousPageIcon(props, ref) {
    return <ChevronLeft {...props} ref={ref} />;
  }),
  ResetSearch: forwardRef(function ResetSearchIcon(props, ref) {
    return <Clear {...props} ref={ref} />;
  }),
  Search: forwardRef(function SearchIcon(props, ref) {
    return <Search {...props} ref={ref} />;
  }),
  SortArrow: forwardRef(function SortArrowIcon(props, ref) {
    return <ArrowUpward {...props} ref={ref} />;
  }),
  ThirdStateCheck: forwardRef(function ThirdStateCheckIcon(props, ref) {
    return <Remove {...props} ref={ref} />;
  }),
  ViewColumn: forwardRef(function ViewColumnIcon(props, ref) {
    return <ViewColumn {...props} ref={ref} />;
  })
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
    return new Promise(resolve => {
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
    return new Promise(resolve => {
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
    return new Promise(resolve => {
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
          editComponent: function SelectCategory(props) {
            return (
              <Select
                value={props.value || ""}
                onChange={e => props.onChange(e.target.value)}
              >
                <MenuItem value="Report">Report</MenuItem>
                <MenuItem value="Plan">Plan</MenuItem>
              </Select>
            );
          }
        },
        { title: "Type", field: "type" },
        { title: "Description", field: "description" },
        {
          title: "Latitude",
          field: "lat",
          editComponent: function EditLatitude(props) {
            return (
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
            );
          }
        },
        {
          title: "Longitude",
          field: "lon",
          editComponent: function EditLongitude(props) {
            return (
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
            );
          }
        },
        {
          title: "Date time",
          field: "dateTime",
          editComponent: function EditDateTime(props) {
            return (
              <TextField
                type="datetime-local"
                value={props.value || ""}
                onChange={e => props.onChange(e.target.value)}
                InputLabelProps={{
                  shrink: true
                }}
              />
            );
          }
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

Table.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.function.isRequired
};
export default Table;
