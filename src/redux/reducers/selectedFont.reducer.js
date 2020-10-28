const defaultState = {};
const selectedFont = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_FONT':
      return action.payload;
    default:
      return state;
  }
};

export default selectedFont;
