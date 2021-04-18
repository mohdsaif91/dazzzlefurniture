export default (state, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN":
      return {
        ...state,
        adminAccess: action.data
      };
    case "ADMIN_LOGOUT":
      return {
        ...state,
        adminAccess: action.data
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        adminAccess: action.data
      };
    case "GET_CATEGORY_COUNT":
      return {
        ...state,
        category: action.data
      };
    case "START_LOADING":
      console.log("reducer <>? ", action.data);
      return {
        ...state,
        showLoading: action.data
      };
    case "STOP_LOADING":
      return {
        ...state,
        showLoading: action.data
      };
    default:
      return state;
  }
};
