export const mapState = {
  compass: false,
  cordinates: false,
  viewControls: false,
  threeD: false,
  layer: { label: "Select leyer", tag: "_" }
};

export default (state = mapState, action) => {
  switch (action.type) {
    case "@map/setLayer": {
      return {
        ...state,
        layer: action.layer
      };
    }
    case "@map/toggleThreeD": {
      return {
        ...state,
        threeD: !state.threeD
      };
    }
    case "@map/toggleCompass": {
      return {
        ...state,
        compass: !state.compass
      };
    }
    case "@map/toggleCordinates": {
      return {
        ...state,
        cordinates: !state.cordinates
      };
    }
    case "@map/toggleViewControls": {
      return {
        ...state,
        viewControls: !state.viewControls
      };
    }
    default: {
      return state;
    }
  }
};
