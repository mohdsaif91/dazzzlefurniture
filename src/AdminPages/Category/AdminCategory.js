import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormItem from "../../Components/Form/FormItem";
import FormImageUpload from "../../Components/Form/FormImageUpload";
import Button from "../../Components/Form/Button";
import { getObj } from "../../util/util";
import {
  addCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../../Redux/Slice/CategorySlice";
import DeleteIcon from "../../Img/delete.png";
import EditIcon from "../../Img/edit.png";
import Loading from "../../util/Loading";

import style from "./adminCategory.module.scss";
import globalStyle from "../../global.module.scss";

function AdminCategory() {
  const [edit, setEdit] = useState(false);
  const [category, setCategory] = useState({
    categoryName: "",
    categoryImage: null,
  });
  const [editData, setEditData] = useState({ id: "" });

  const categoryData = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!categoryData.category) {
      dispatch(getCategory());
    }
  }, [categoryData]);

  const handleImageUpload = () => {
    dispatch(addCategory(getObj(category)));
  };

  const handleUpdateCategory = () => {
    console.log(editData, " MAIN <>");
    dispatch(
      updateCategory(editData.categoryImage ? getObj(editData) : editData)
    );
  };

  return (
    <div className={`${style.categoryContainer} ${globalStyle.pagePadding}`}>
      {categoryData.loading ? (
        <Loading />
      ) : (
        <>
          <div className={style.container}>
            <h3 className={style.categoryHeading}>Add Category</h3>
            <div className={style.categoryBox}>
              <div className={style.categoryForm}>
                <FormItem
                  value={category.categoryName}
                  label="Category Name"
                  onChange={(e) =>
                    setCategory({ ...category, categoryName: e.target.value })
                  }
                />
                <FormImageUpload
                  accept="image/png, image/jpeg"
                  name="categoryName"
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    setCategory({
                      ...category,
                      categoryImage: e.target.files[0],
                    });
                  }}
                />
                <Button
                  className={style.submitBtn}
                  onClick={() => handleImageUpload()}
                  text="submit"
                />
              </div>
            </div>
          </div>
          <div className={style.container}>
            <h3 className={style.categoryHeading}>Category list</h3>
            <div className={style.categoryBox}>
              {Array.isArray(categoryData.category) ? (
                <ul className={style.categoryList}>
                  {categoryData.category.map((m) => (
                    <li key={m._id} className={style.categoryListItem}>
                      <div
                        className={`${style.primaryContainer} ${
                          m._id === editData.id && style.opacity
                        }`}
                      >
                        <div className={style.nameAndImage}>
                          <div className={style.categoryName}>
                            {m.categoryName}
                          </div>
                          <img
                            className={style.categoryImage}
                            src={`https://furniture2023.s3.ap-south-1.amazonaws.com/category/${m.imageId}`}
                          />
                        </div>
                        <div className={style.categoryListItemAction}>
                          <img
                            onClick={() => {
                              setEditData({ ...m });
                            }}
                            alt=""
                            src={EditIcon}
                            className={style.categoryImageAction}
                          />
                          <img
                            onClick={() => {
                              const deleteData = {
                                id: m._id,
                                imageId: m.imageId,
                              };
                              dispatch(deleteCategory(deleteData));
                            }}
                            alt=""
                            src={DeleteIcon}
                            className={style.categoryImageAction}
                          />
                        </div>
                      </div>
                      {editData.id === m._id && (
                        <div className={style.secondaryContainer}>
                          <FormItem
                            value={editData.categoryName}
                            label="Category Name"
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                categoryName: e.target.value,
                              })
                            }
                          />
                          <div className={style.editImage}>
                            <FormImageUpload
                              accept="image/png, image/jpeg"
                              name="categoryName"
                              onChange={(e) => {
                                console.log("called MAIN");
                                setEditData({
                                  ...editData,
                                  categoryImage: e.target.files[0],
                                });
                              }}
                            />
                            <img
                              className={style.categoryImage}
                              src={`https://furniture2023.s3.ap-south-1.amazonaws.com/category/${editData.imageId}`}
                            />
                          </div>

                          <div className={style.editBtnContainer}>
                            <Button
                              className={style.editButton}
                              onClick={() => handleUpdateCategory()}
                              text="Update"
                            />
                            <Button
                              className={style.cancleButton}
                              onClick={() =>
                                setEditData({ id: "", data: null })
                              }
                              text="Cancle"
                            />
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <>No Data</>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AdminCategory;
