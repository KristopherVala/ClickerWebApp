const goldReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENTGOLD":
      return state + action.payload;
    default:
      return state;
  }
};
export default goldReducer;
