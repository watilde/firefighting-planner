export const mapState = {
  threeD: false
};

export default (state = mapState, action) => {
  switch (action.type) {
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
