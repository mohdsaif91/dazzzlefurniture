export default (state, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        ...state,
        action.data
      };
    default:
      break;
  }
};
