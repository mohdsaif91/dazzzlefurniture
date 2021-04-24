import { adminActions } from "../actions/adminActions";

export default (state, action) => {
  console.log(action, "<>? ACTION");
  switch (action.type) {
    case adminActions.ADMIN_LOGIN:
      return {
        ...state,
        adminAccess: action.data
      };
    case adminActions.ADMIN_LOGOUT:
      return {
        ...state,
        adminAccess: action.data
      };
    case adminActions.LOGIN_FAIL:
      return {
        ...state,
        adminAccess: action.data
      };
    case adminActions.GET_CATEGORY_COUNT:
      console.log(action.data, "?><");
      return {
        ...state,
        category: action.data
      };
    case adminActions.START_LOADING:
      return {
        ...state,
        showLoading: action.data
      };
    case adminActions.STOP_LOADING:
      return {
        ...state,
        showLoading: action.data
      };
    case adminActions.DELETE_SUCESSFULL:
      const category = {
        category: state.category.category.filter(f => f._id !== action.data.id)
      };
      return {
        ...state,
        category
      };
    case adminActions.DELETE_UNSUCESSFULL:
    default:
      return state;
  }
};
