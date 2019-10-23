export const plannerState = {
  range: 600000,
  lat: 36.256535392993314,
  lon: -119.2002385680952,
  actions: [],
  dialogOpen: false,
  action: {}
};

export default (state = plannerState, action) => {
  switch (action.type) {
    case "@planner/setAction": {
      return {
        ...state,
        action: action.action
      };
    }
    case "@planner/setDialogOpen": {
      return {
        ...state,
        dialogOpen: action.dialogOpen
      };
    }
    case "@planner/setRange": {
      return {
        ...state,
        range: action.range
      };
    }

    case "@planner/setLat": {
      return {
        ...state,
        lat: action.lat
      };
    }

    case "@planner/setLon": {
      return {
        ...state,
        lon: action.lon
      };
    }

    case "@planner/setActions": {
      return {
        ...state,
        actions: action.actions
      };
    }

    default: {
      return state;
    }
  }
};
