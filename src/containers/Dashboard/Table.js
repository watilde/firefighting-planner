import React, { forwardRef } from "react";
import MaterialTable from "material-table";
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
  const { state } = useStore();
  const { plans } = state.planner;
  const { reports } = state.reporter;
  const data = [].concat(plans, reports);
  const onRowAdd = newData => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  };
  const onRowUpdate = (newData, oldData) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  };
  const onRowDelete = oldData => {
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
        minBodyHeight: `${window.innerHeight - 181}px`
      }}
      style={{
        borderRadius: 0
      }}
      columns={[
        { title: "Category", field: "category" },
        { title: "Type", field: "type" },
        { title: "Description", field: "description" },
        { title: "Latitude", field: "lat" },
        { title: "Longitude", field: "lon" },
        { title: "Date time", field: "dateTime" }
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
