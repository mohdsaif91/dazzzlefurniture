export const productAction = {
  ADD_PRODUCT: "ADD_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  GET_PRODUCT_SUCESSFULL: "GET_PRODUCT_SUCESSFULL",
  PRODUCT_FAILED: "PRODUCT_FAILED"
};

export function getProductSucessfull(data) {
  return {
    type: productAction.GET_PRODUCT_SUCESSFULL,
    data
  };
}
export function deleteProduct(data) {
  return {
    type: productAction.DELETE_PRODUCT,
    data
  };
}

export function addProductSucess(data) {
  return {
    type: productAction.ADD_PRODUCT,
    data
  };
}
