const defaultState = [];
const tabs = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TABS':
      return action.payload;
    default:
      return state;
  }
};

export default tabs;
