export const mapState = {
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
    default: {
      return state;
    }
  }
};
