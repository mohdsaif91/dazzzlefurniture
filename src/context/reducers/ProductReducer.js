import { productAction } from "../actions/addProductAction";

export default (state, action) => {
  switch (action.type) {
    case productAction.GET_PRODUCT_SUCESSFULL:
      return {
        ...state,
        product: action.data
      };

    default:
      return state;
  }
};
