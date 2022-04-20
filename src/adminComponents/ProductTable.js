import React, { useContext } from "react";
import { Badge, Button, Card, CardBody, CardHeader, Col } from "shards-react";

import { AdminContext } from "../context/state/AdminState";

function ProductTable() {
  const { addHotProduct, adminProduct } = useContext(AdminContext);

  const tableData = adminProduct ? adminProduct : [];

  const addHotProductFun = (productId, hotFlag) => {
    const productIdObj = {
      hotProductId: productId,
      hotFlag: !hotFlag,
    };
    addHotProduct(productIdObj);
  };

  return (
    <Col>
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Hot Product Table</h6>
        </CardHeader>
        <CardBody className="p-0 pb-3">
          <table className="table mb-0">
            <thead className="bg-light">
              <tr>
                <th scope="col" className="border-0">
                  #
                </th>
                <th scope="col" className="border-0">
                  Category Name
                </th>
                <th scope="col" className="border-0">
                  Product Name
                </th>
                <th scope="col" className="border-0">
                  Product Image
                </th>
                <th scope="col" className="border-0">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((m, index) => (
                <tr key={m._id}>
                  <td>{index + 1}</td>
                  <td>{m.categoryName}</td>
                  <td>{m.productName}</td>
                  <td>
                    <Card
                      small
                      className="card-post mb-2 card-post--aside card-post--1"
                    >
                      <div
                        className="card-post__image"
                        style={{
                          backgroundImage: `url('https://drive.google.com/uc?export=view&id=${m.productImageName}')`,
                        }}
                      ></div>
                    </Card>
                  </td>
                  <td>
                    <CardBody>
                      <div className="mt-5">
                        {m.hotProduct ? (
                          <Button
                            theme="danger"
                            onClick={() =>
                              addHotProductFun(m._id, m.hotProduct)
                            }
                            className="mb-2 mr-1"
                          >
                            Remove Hot Product
                          </Button>
                        ) : (
                          <Button
                            onClick={() =>
                              addHotProductFun(m._id, m.hotProduct)
                            }
                            theme="primary"
                            className="mb-2 mr-1"
                          >
                            Add hot product
                          </Button>
                        )}
                      </div>
                    </CardBody>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </Col>
  );
}

export default ProductTable;
