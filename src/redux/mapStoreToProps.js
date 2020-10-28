const mapStoreToProps = (reduxState) => {
  return {
    store: reduxState,
    myFonts: reduxState.myFontsResponse,
    buyFonts: reduxState.buyFontsResponse,
  };
};

export default mapStoreToProps;
