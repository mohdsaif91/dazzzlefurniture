import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Card, Badge } from "shards-react";

import { AdminContext } from "../../context/state/AdminState";

const initialData = {
  themColor: ["dark", "info", "royal-blue", "warning"],
  counter: 0,
};

export default function Categories() {
  const [data, setData] = useState([]);
  const [color, setColor] = useState({ ...initialData });

  const {
    getCategoryCount,
    category: { category },
  } = useContext(AdminContext);
  useEffect(() => {
    if (!category) {
      getCategoryCount();
    }
    setData(category);
  }, [category]);

  const dataArray = data === undefined ? [] : data;
  let counter = 0;
  return (
    <Row>
      {dataArray.map(({ _id, imageName, categoryName }) => {
        if (counter >= 3) {
          counter = 0;
        } else {
          counter++;
        }
        return (
          <Col lg="3" md="6" sm="12" className="m-4" key={_id}>
            <Card small className="card-post card-post--1">
              <div
                className="card-post__image card-image"
                style={{
                  backgroundImage: `url(https://dazzlefurnitureworld.s3.ap-south-1.amazonaws.com/category/${imageName})`,
                }}
              >
                <Badge
                  pill
                  className={`card-post__category bg-${color.themColor[counter]}`}
                >
                  {categoryName}
                </Badge>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
