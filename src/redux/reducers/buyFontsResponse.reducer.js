const defaultState = {};
const buyFontsResponse = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_BUY_FONTS':
      return action.payload;
    default:
      return state;
  }
};

export default buyFontsResponse;
