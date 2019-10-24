export const plannerState = {
  range: 600000,
  lat: 36.256535392993314,
  lon: -119.2002385680952,
  plans: [],
  dialogOpen: false,
  plan: {}
};

export default (state = plannerState, action) => {
  switch (action.type) {
    case "@planner/setPlan": {
      return {
        ...state,
        plan: action.plan
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

    case "@planner/setPlans": {
      return {
        ...state,
        plans: action.plans
      };
    }

    default: {
      return state;
    }
  }
};
