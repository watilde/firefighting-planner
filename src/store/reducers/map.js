export const mapState = {
  compass: false,
  cordinates: false,
  controller: false,
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
    case "@map/toggleController": {
      return {
        ...state,
        controller: !state.controller
      };
    }
    default: {
      return state;
    }
  }
};
