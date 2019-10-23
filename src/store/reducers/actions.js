export const actionsState = [];

export default (state = actionsState, action) => {
  switch (action.type) {
    case "@actions/ADD": {
      return [].concat(state, action.action);
    }

    default: {
      return state;
    }
  }
};
