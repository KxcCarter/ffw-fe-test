const defaultState = [];
const myFontsResponse = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_MY_FONTS':
      return action.payload;
    default:
      return state;
  }
};

export default myFontsResponse;
