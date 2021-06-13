import { productAction } from "../actions/addProductAction";

export default (state, action) => {
  switch (action.type) {
    case productAction.GET_PRODUCT_SUCESSFULL:
      return {
        ...state,
        error: false,
        allProduct: action.data
      };
    case productAction.GET_PRODUCT_UNSUCESSFULL:
      return {
        ...state,
        error: true,
        allProduct: action.data
      };
    case productAction.START_LOADING:
      return {
        ...state,
        showLoading: action.data
      };
    case productAction.STOP_LOADING:
      return {
        ...state,
        showLoading: action.data
      };
    case productAction.ADD_PRODUCT_SUCESS:
      return {
        ...state,
        error: false,
        allProduct: [...(state.allProduct || []), action.data]
      };
    case productAction.ADD_PRODUCT_FAIL:
      return {
        ...state,
        erro: true,
        allProduct: action.data
      };
    case productAction.UPDATE_PRODUCT_SUCESSFULL:
      const updatedId = action.data;
      const updatedProducts = state.allProduct.map(m => {
        if (m._id === updatedId._id) {
          return updatedId;
        } else {
          return m;
        }
      });
      return {
        ...state,
        error: false,
        allProduct: updatedProducts
      };
    case productAction.GOT_PRODUCT_ID_SUCESSFULL:
      return {
        ...state,
        error: false,
        lastObjectCount: action.data
      };
    case productAction.GOT_PRODUCT_ID_UN_SUCESSFULL:
      return {
        ...state,
        error: true,
        lastObjectCount: action.data
      };
    default:
      return state;
  }
};
