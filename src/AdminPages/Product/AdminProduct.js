import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormItem from "../../Components/Form/FormItem";
import FormImageUpload from "../../Components/Form/FormImageUpload";
import DeleteIcon from "../../Img/delete.png";
import EditIcon from "../../Img/edit.png";
import Loading from "../../util/Loading";
import DropDown from "../../Components/Form/DropDown";
import { getCategory, getCategoryName } from "../../Redux/Slice/CategorySlice";
import Button from "../../Components/Form/Button";
import { getObj } from "../../util/util";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../../Redux/Slice/ProductSlice";

import style from "./adminProduct.module.scss";
const dummy = [
  { id: 1, name: "jack" },
  { id: 2, name: "jill" },
];

const initialData = {
  productImage: "",
  likeCount: 0,
  categoryName: "",
  productName: "",
};

function AdminProduct() {
  const [productData, setProductData] = useState({ ...initialData });
  const [validationError, setValidationError] = useState("");
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(dummy);

  const categoryData = useSelector((state) => state.category);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categoryData.categoryName) {
      dispatch(getCategoryName());
    }
  }, [categoryData]);

  useEffect(() => {
    if (!product.products) {
      dispatch(getAllProduct());
    }
  }, [product]);

  const handleProductUpload = () => {
    if (productData.categoryName === "" || productData.productName === "") {
      setValidationError("Form is not valid");
    } else {
      dispatch(addProduct(getObj(productData)));
    }
  };

  const handleUpdateProduct = () => {
    dispatch(updateProduct(getObj(productData)));
  };

  const removeItem = (objName) => {
    const updateData = name.filter((f) => f.name != objName);
    setName(updateData);
  };

  return (
    <div className={style.parentContainer}>
      {product.loading ? (
        <Loading />
      ) : (
        <>
          <div className={style.container}>
            <h3 className={style.productHeading}>Add Product</h3>
            <div className={style.formContainer}>
              <FormItem
                value={productData.productName}
                label="Product Name"
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    productName: e.target.value,
                  })
                }
              />
              <FormImageUpload
                accept="image/png, image/jpeg"
                name="productImage"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setProductData({
                    ...productData,
                    productImage: e.target.files[0],
                  });
                }}
              />
              {edit && (
                <div className={style.currentlImage}>
                  <h3>Current Image</h3>
                  <img
                    src={`https://furniture2023.s3.ap-south-1.amazonaws.com/product/${productData.productImageName}`}
                    alt="Productm Image"
                    className={style.editProductImage}
                  />
                </div>
              )}
              <DropDown
                defaultSelected={"no data"}
                setCategory={(data) =>
                  setProductData({ ...productData, categoryName: data })
                }
                options={categoryData.categoryName || []}
              />
              <Button
                className={style.submitBtn}
                onClick={() =>
                  edit ? handleUpdateProduct() : handleProductUpload()
                }
                text={edit ? "Update" : "submit"}
              />
              {edit && (
                <Button
                  className={style.cancleBtn}
                  onClick={() => {
                    setProductData({ ...initialData });
                    setEdit(false);
                  }}
                  text="Cancle"
                />
              )}
            </div>
            {validationError !== "" && validationError && (
              <div className={style.error}>{validationError}</div>
            )}
          </div>
          <div className={style.container}>
            <h3 className={style.productHeading}>Product List</h3>
            <ul className={style.productList}>
              {Array.isArray(product.products) &&
                product.products.map((m) => (
                  <li className={style.productListItem} key={m._id}>
                    <img
                      src={`https://furniture2023.s3.ap-south-1.amazonaws.com/product/${m.productImageName}`}
                      alt="Productm Image"
                      className={style.productImage}
                    />
                    <div className={style.productNameCat}>
                      <div className={style.productName}>{m.productName}</div>
                      <div className={style.productCat}>{m.categoryName}</div>
                    </div>
                    <div className={style.productAction}>
                      <img
                        onClick={() => {
                          setEdit(true);
                          setProductData({ ...m });
                        }}
                        alt=""
                        src={EditIcon}
                        className={style.categoryImageAction}
                      />
                      <img
                        onClick={() => {
                          const deleteData = {
                            id: m._id,
                            imageId: m.productImageName,
                          };
                          console.log(m._id, " <>");
                          dispatch(deleteProduct(deleteData));
                        }}
                        alt=""
                        src={DeleteIcon}
                        className={style.categoryImageAction}
                      />
                    </div>
                  </li>
                ))}
            </ul>
            <ul>
              {name.map((m) => (
                <li onClick={() => removeItem(m.name)}>{m.name}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminProduct;
