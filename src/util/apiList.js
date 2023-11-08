const v1 = "/api/v1";
const categoryV1 = `${v1}/category`;
const productV1 = `${v1}/product`;

export const apiList = {
  createCategory: `${categoryV1}/create`,
  getCategory: categoryV1,
  updateCatgory: `${categoryV1}/update`,
  deleteCategory: categoryV1,
  getCategoryName: `${categoryV1}/categoryName`,
  addProduct: `${productV1}/addProduct`,
  allProducts: `${productV1}`,
  updateProduct: `${productV1}/update`,
  deleteProduct: productV1,
};
