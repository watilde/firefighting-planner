export const reporterState = {
  range: 600000,
  lat: 36.256535392993314,
  lon: -119.2002385680952,
  reports: [],
  dialogOpen: false,
  report: {}
};

export default (state = reporterState, action) => {
  switch (action.type) {
    case "@reporter/setReport": {
      return {
        ...state,
        report: action.report
      };
    }
    case "@reporter/setDialogOpen": {
      return {
        ...state,
        dialogOpen: action.dialogOpen
      };
    }
    case "@reporter/setRange": {
      return {
        ...state,
        range: action.range
      };
    }

    case "@reporter/setLat": {
      return {
        ...state,
        lat: action.lat
      };
    }

    case "@reporter/setLon": {
      return {
        ...state,
        lon: action.lon
      };
    }

    case "@reporter/setReports": {
      return {
        ...state,
        reports: action.reports
      };
    }

    default: {
      return state;
    }
  }
};
