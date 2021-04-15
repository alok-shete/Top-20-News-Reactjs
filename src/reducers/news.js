const newsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEWS":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default newsReducer;
