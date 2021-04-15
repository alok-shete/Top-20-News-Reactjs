const countryReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_COUNTRY":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default countryReducer;
