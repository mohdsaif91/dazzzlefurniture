import React, { useState } from "react";

import SingleProductCard from "../../Components/Card/SingleProductCard/SingleProductCard";
import hero1 from "../../Img/pageImages/hero1.webp";
import left from "../../Img/icon/left.png";
import right from "../../Img/icon/right.png";
import goldenChair from "../../Img/pageImages/goldenChair.webp";
import goldenChair2 from "../../Img/pageImages/goldenChair2.webp";
import goldenChair3 from "../../Img/pageImages/goldenChair3.webp";
import oneProductImage from "../../Img/pageImages/oneProductImage.webp";
import bestSeller1 from "../../Img/pageImages/bestSeller1.jpg";
import bestSeller2 from "../../Img/pageImages/bestSeller2.jpg";
import bestSeller3 from "../../Img/pageImages/bestSeller3.jpg";
import bestSeller4 from "../../Img/pageImages/bestSeller4.jpg";
import bestSeller5 from "../../Img/pageImages/bestSeller5.jpg";
import bestSeller6 from "../../Img/pageImages/bestSeller6.jpg";
import bestSeller7 from "../../Img/pageImages/bestSeller7.jpg";
import bestSeller8 from "../../Img/pageImages/bestSeller8.jpg";
import bestSeller9 from "../../Img/pageImages/bestSeller9.jpg";
import singleProduct1 from "../../Img/pageImages/singleProduct1.jpg";
import singleProduct2 from "../../Img/pageImages/singleProduct2.jpg";
import leftIcon from "../../Img/icon/left.png";
import rightIcon from "../../Img/icon/right.png";
import getDiscountImg1 from "../../Img/pageImages/getBestDiscount.webp";
import getDiscountImage2 from "../../Img/pageImages/getDiscountImage2.webp";

import style from "./home.module.scss";
import globalStyle from "../../global.module.scss";

const carouselData = [
  {
    id: 1,
    img: hero1,
    desc: "Enlight your world. Make yourself more bright",
    type: "#new Treand",
    title: "Abotar Lighting",
  },
];

const oneProduct = [
  { id: 1, img: oneProductImage, type: "#new Treand", title: "Luxry soft" },
];

const singleProduct = [
  { id: 1, img: singleProduct1 },
  { id: 2, img: singleProduct2 },
];

const weekTopSaleProduct = [
  {
    id: 1,
    productName: "Golden Easy Spot Chair",
    price: "12000",
    img: goldenChair,
    type: "#new Treand",
  },
  {
    id: 2,
    productName: "Golden Easy Spot Chair",
    price: "13000",
    img: goldenChair2,
    type: "#new Treand",
  },
  {
    id: 3,
    productName: "Golden Easy Spot Chair",
    price: "14000",
    img: goldenChair3,
    type: "#new Treand",
  },
];

const bestProductData = [
  {
    id: 1,
    img: bestSeller1,
    type: "#new Treand",
    price: "12000",
    productName: "Golden Easy Spot Chair",
  },
  {
    id: 2,
    img: bestSeller2,
    type: "",
    price: "10000",
    productName: "Golden Easy Spot Chair",
  },
  {
    id: 3,
    img: bestSeller3,
    type: "#new Treand",
    price: "14000",
    productName: "Golden Easy Spot Chair",
  },
  {
    id: 4,
    img: bestSeller4,
    type: "",
    price: "9000",
    productName: "Golden Easy Spot Chair",
  },
  {
    id: 5,
    img: bestSeller5,
    type: "#new Treand",
    price: "15000",
    productName: "Golden Easy Spot Chair",
  },
  {
    id: 6,
    img: bestSeller6,
    type: "",
    price: "1200",
    productName: "Golden Easy Spot Chair",
  },
  {
    id: 7,
    img: bestSeller7,
    type: "#new Treand",
    price: "12000",
    productName: "Golden Easy Spot Chair",
  },
  {
    id: 8,
    img: bestSeller8,
    type: "#new Treand",
    price: "12000",
    productName: "Golden Easy Spot Chair",
  },
  {
    id: 9,
    img: bestSeller9,
    type: "#new Treand",
    price: "12000",
    productName: "Golden Easy Spot Chair",
  },
];

function Home() {
  const [currentCarouselImg, setCurrentCarouselImg] = useState(0);
  const [singleImageCounter, setSingleImageCounter] = useState(0);
  return (
    <div className={globalStyle.uiContainer}>
      <div className={style.heroContainer}>
        <div className={style.heroInfoContainer}>
          <div className={style.heroImageContainer}>
            <img
              src={carouselData[currentCarouselImg].img}
              className={style.carouselItem}
              alt="Carousel"
            />
            <div className={style.verticalDevider} />
            <div className={style.heroImgDesc}>
              <div className={style.trend}>
                {carouselData[currentCarouselImg].type}
              </div>
              <div className={style.desc}>
                {carouselData[currentCarouselImg].desc}
              </div>
              <h1 className={style.title}>
                {carouselData[currentCarouselImg].title}
              </h1>
              <button className={style.shopNowBtn}>Shop now</button>
            </div>
          </div>
        </div>
        <div className={style.carouselController}>
          <div className={style.controllerContainer}>
            <div className={style.btnItem}>
              <img src={left} className={style.btnIcon} alt="left Icon" />
            </div>
            <div className={style.btnItem}>
              <img src={right} className={style.btnIcon} alt="left Icon" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.topWeekContainer}>
        <h4 className={style.pageTitle}>This Week Top Sales</h4>
        <div className={style.weekTopSaleProducts}>
          {weekTopSaleProduct.map((m) => (
            <SingleProductCard data={m} topProduct={true} />
          ))}
        </div>
      </div>
      <div className={style.oneProductContainer}>
        <div className={style.productContainer}>
          <div className={style.productDetails}>
            <div className={style.heroImgDesc}>
              <div className={style.trend}>{oneProduct[0].type}</div>
              <h1 className={style.title}>{oneProduct[0].title}</h1>
              <button className={style.shopNowBtn}>Buy now</button>
            </div>
          </div>
          <div className={style.productImage}>
            <img
              src={oneProduct[0].img}
              alt="One Product"
              className={style.oneProductImage}
            />
          </div>
        </div>
      </div>
      <div className={style.bestSellerContainer}>
        <div className={style.productsContainer}>
          <h1 className={style.productHeading}>
            Best Sellers
            <div className={style.headingUnderline} />
          </h1>
          <div className={style.bestProductContainer}>
            {bestProductData.slice(0, 3).map((m) => (
              <SingleProductCard data={m} key={m.id} />
            ))}
          </div>
        </div>
        <div className={style.imageContainer}>
          <img
            src={singleProduct[singleImageCounter].img}
            alt="product Image"
            className={style.singleProductImage}
          />
          <div className={style.btnParentContainer}>
            <div className={style.btnContainer}>
              <img
                src={leftIcon}
                alt="leftArrow"
                className={`${style.singleImageBtn} ${style.leftIcon}`}
              />
            </div>
            <div className={style.btnContainer}>
              <img
                src={rightIcon}
                alt="leftArrow"
                className={`${style.singleImageBtn} ${style.rightIcon}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={style.discountContainer}>
        <div className={style.innerContainer}>
          <img
            src={getDiscountImg1}
            alt="Sofa"
            className={style.getDescountOneImg}
          />
          <div className={style.discountTextContainer}>
            <div className={style.discountBlurText}>Best Sale</div>
            <div className={style.discountMainText}>Get Best Discount</div>
            <div className={style.discountSubText}>
              It is a long established fact that a reader will be distracted by
              the readable content
            </div>
            <button className={style.shopNowBtn}>Shop Now</button>
          </div>
          <img
            src={getDiscountImage2}
            alt="Sofa"
            className={style.getDescountTwoImg}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
