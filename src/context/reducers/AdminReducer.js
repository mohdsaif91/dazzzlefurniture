import { adminActions } from "../actions/adminActions";

export default (state, action) => {
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
      const { categoryCount } = action.data;
      return {
        ...state,
        category: action.data,
        categoryCount: categoryCount
      };
    case adminActions.DELETE_SUCESSFULL:
      const category = {
        category: state.category.category.filter(f => f._id !== action.data.id)
      };
      return {
        ...state,
        category
      };
    case adminActions.ADD_CATEGORY_SUCESS:
      return {
        ...state,
        error: false,
        category: [...state.category.category, action.data]
      };
    case adminActions.ADD_CATEGORY_UNSUCESS:
      return {
        ...state,
        error: true,
        category: action.data
      };
    case adminActions.UPDATED_CATEGORY_SUCESS:
      const updatedValue = action.data;
      console.log(updatedValue, "<>?");
      const updatedCat = state.category.filter(f => {
        if (f._id === updatedValue._id) {
          return updatedValue;
        } else {
          return f;
        }
      });
      return {
        ...state,
        error: false,
        category: updatedCat
      };
    case adminActions.DELETE_UNSUCESSFULL:
    default:
      return state;
  }
};
