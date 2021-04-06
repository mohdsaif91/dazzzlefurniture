export default (state, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN":
      return {
        adminAccess: action.data
      };
    case "ADMIN_LOGOUT":
      return {
        adminAccess: action.data
      };
    default:
      return state;
  }
};
