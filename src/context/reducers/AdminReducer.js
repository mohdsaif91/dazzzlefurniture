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
    default:
      return state;
  }
};
