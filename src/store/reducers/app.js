export const appState = {
  time: "2018-08-01T10:10",
  searchWord: ""
};

export default (state = appState, action) => {
  switch (action.type) {
    case "@app/setTime": {
      return {
        ...state,
        time: action.time
      };
    }

    case "@app/setSearchWord": {
      return {
        ...state,
        searchWord: action.searchWord
      };
    }

    default: {
      return state;
    }
  }
};
