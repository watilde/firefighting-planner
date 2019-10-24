export const appState = {
  dateTime: "2018-08-01T10:10",
  searchWord: "",
  drawerOpen: false
};

export default (state = appState, action) => {
  switch (action.type) {
    case "@app/setDateTime": {
      return {
        ...state,
        dateTime: action.dateTime
      };
    }

    case "@app/setSearchWord": {
      return {
        ...state,
        searchWord: action.searchWord
      };
    }

    case "@app/toggleDrawer": {
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      };
    }

    default: {
      return state;
    }
  }
};
