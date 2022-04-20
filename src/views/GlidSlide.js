import React, { useContext, useEffect, useMemo, useState } from "react";
import { Badge, Button, Card, Col, Row } from "shards-react";
import Glide from "@glidejs/glide";
import { useHistory } from "react-router-dom";

import { AdminContext } from "../context/state/AdminState";
import { ProductContext } from "../context/state/ProductState";

function GlidSlide(props) {
  const [slider] = useState(
    new Glide(".glide", {
      animationDuration: 500,
      autoplay: 3000,
      dragDistance: false,
      gap: 20,
      hoverMouse: false,
      perView:
        window.screen.width <= 700 ? 1 : window.screen.width <= 900 ? 2 : 3,
      paddings:
        window.screen.width <= 700
          ? "10%"
          : window.screen.width <= 900
          ? "15%"
          : "25%",
      reqwind: true,
      startAt: 0,
      type: "carousel",
    })
  );
  const history = useHistory();
  const viewProduct = (id) => {
    history.push(`/singleProduct/${id}`);
  };

  const hotProductData = props.data || [];
  const hotProductSlider = useMemo(() => {
    let hotProductCard = [];
    if (Object.prototype.toString.call(props.data) === "[object Array]") {
      hotProductCard = hotProductData;
    }
    return (
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="client-cards">
            {hotProductCard.map((m) => (
              <li className="glide__slide slider">
                <Card small className="card-post card-post--1 hot-product">
                  <div
                    // onClick={() => viewCategory()}
                    className="card-post__image card-image"
                    style={{
                      backgroundImage: `url('https://drive.google.com/uc?export=view&id=${m.productImageName}')`,
                    }}
                  >
                    <Badge
                      pill
                      className={`card-post__category bg-${m.categoryName}`}
                    >
                      {m.productName}
                    </Badge>
                    <Button
                      className="shop-now-btn shop-btn-glide"
                      tabIndex="0"
                      onClick={() => viewProduct(m._id)}
                    >
                      View
                    </Button>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }, [props.data]);

  useEffect(() => {
    slider.mount();
  }, [props.data]);

  return hotProductSlider;
}

export default GlidSlide;
