/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Button } from "shards-react";
import { Carousel } from "react-responsive-carousel";
import CountUp from "react-countup";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { AdminContext } from "../context/state/AdminState";
import { ProductContext } from "../context/state/ProductState";
import { Link, useHistory } from "react-router-dom";
import GlidSlide from "./GlidSlide";
import B1 from "../images/bottom1.webp";
import B2 from "../images/bottom2.webp";
import B3 from "../images/bottom3.webp";

const initialData = {
  // First list of posts.
  PostsListOne: [
    {
      backgroundImage: require("../images/content-management/1.jpeg"),
      category: "Business",
      categoryTheme: "dark",
      author: "Anna Kunis",
      authorAvatar: require("../images/avatars/1.jpg"),
      title: "Conduct at an replied removal an amongst",
      body: "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
      date: "28 February 2019",
    },
    {
      backgroundImage: require("../images/content-management/2.jpeg"),
      category: "Travel",
      categoryTheme: "info",
      author: "James Jamerson",
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "Off tears are day blind smile alone had ready",
      body: "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
      date: "29 February 2019",
    },
    {
      backgroundImage: require("../images/content-management/3.jpeg"),
      category: "Technology",
      categoryTheme: "royal-blue",
      author: "Jimmy Jackson",
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "Difficult in delivered extensive at direction",
      body: "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
      date: "29 February 2019",
    },
    {
      backgroundImage: require("../images/content-management/4.jpeg"),
      category: "Business",
      categoryTheme: "warning",
      author: "John James",
      authorAvatar: require("../images/avatars/3.jpg"),
      title: "It so numerous if he may outlived disposal",
      body: "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
      date: "29 February 2019",
    },
  ],

  // Second list of posts.
  PostsListTwo: [
    {
      backgroundImage: require("../images/content-management/5.jpeg"),
      category: "Travel",
      categoryTheme: "info",
      author: "Anna Ken",
      authorAvatar: require("../images/avatars/0.jpg"),
      title: "Attention he extremity unwilling on otherwise cars backwards yet",
      body: "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
      date: "29 February 2019",
    },
    {
      backgroundImage: require("../images/content-management/6.jpeg"),
      category: "Business",
      categoryTheme: "dark",
      author: "John James",
      authorAvatar: require("../images/avatars/1.jpg"),
      title:
        "Totally words widow one downs few age every seven if miss part by fact",
      body: "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
      date: "29 February 2019",
    },
  ],

  // Third list of posts.
  PostsListThree: [
    {
      author: "John James",
      authorAvatar: require("../images/avatars/1.jpg"),
      title: "Had denoting properly jointure which well books beyond",
      body: "In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom work...",
      date: "29 February 2019",
    },
    {
      author: "John James",
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "Husbands ask repeated resolved but laughter debating",
      body: "It abode words began enjoy years no do ﻿no. Tried spoil as heart visit blush or. Boy possible blessing sensible set but margaret interest. Off tears...",
      date: "29 February 2019",
    },
    {
      author: "John James",
      authorAvatar: require("../images/avatars/3.jpg"),
      title: "Instantly gentleman contained belonging exquisite now direction",
      body: "West room at sent if year. Numerous indulged distance old law you. Total state as merit court green decay he. Steepest merit checking railway...",
      date: "29 February 2019",
    },
  ],

  // Fourth list of posts.
  PostsListFour: [
    {
      backgroundImage: require("../images/content-management/7.jpeg"),
      author: "Alene Trenton",
      authorUrl: "#",
      category: "News",
      categoryUrl: "#",
      title: "Extremity so attending objection as engrossed",
      body: "Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be...",
      date: "29 February 2019",
    },
    {
      backgroundImage: require("../images/content-management/8.jpeg"),
      author: "Chris Jamie",
      authorUrl: "#",
      category: "News",
      categoryUrl: "#",
      title: "Bed sincerity yet therefore forfeited his",
      body: "Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye. Sufficient unpleasing and...",
      date: "29 February 2019",
    },
    {
      backgroundImage: require("../images/content-management/9.jpeg"),
      author: "Monica Jordan",
      authorUrl: "#",
      category: "News",
      categoryUrl: "#",
      title: "Object remark lively all did feebly excuse our",
      body: "Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel not seeing...",
      date: "29 February 2019",
    },
    {
      backgroundImage: require("../images/content-management/10.jpeg"),
      author: "Monica Jordan",
      authorUrl: "#",
      category: "News",
      categoryUrl: "#",
      title: "His followed carriage proposal entrance",
      body: "For county now sister engage had season better had waited. Occasional mrs interested far expression directly as regard...",
      date: "29 February 2019",
    },
  ],
  categoryVisible: false,
};

export default function BlogPosts() {
  const [data, setData] = useState({ ...initialData });

  const { getCategoryCount, category } = useContext(AdminContext);
  const { getProductState } = useContext(ProductContext);

  const history = useHistory();

  useEffect(() => {
    if (!category.category) {
      getCategoryCount();
    }
  }, [category]);

  const getProduct = (e) => {
    getProductState(e.target.id);
    history.push({
      pathname: "/product",
      state: { categoryName: e.target.id },
    });
  };
  const categoryData = !category.category ? [] : category.category;

  return (
    <Container fluid className="main-content-container px-4 home-container">
      <Carousel
        showArrows={false}
        className="mb-4 mt-4"
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <Card small className="card-post card-post--1">
            <div className="card-post__image card-image hero-1">
              <div className="hero-content-2 center">
                <h2 className="hero-text">
                  Creative Design <br /> Modern &amp; Exclusive Furniture
                </h2>
                <Link to="/products">
                  <a href="#" className="shop-now-btn" tabindex="0">
                    SHOP NOW
                  </a>
                </Link>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card small className="card-post card-post--1">
            <div className="card-post__image card-image hero-2">
              <div className="hero-content-2 center">
                <h2 className="hero-text">
                  Beautiful <br /> CraftmenShip
                </h2>
                <Link to="/products">
                  <a href="#" className="shop-now-btn" tabindex="0">
                    SHOP NOW
                  </a>
                </Link>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card small className="card-post card-post--1">
            <div className="card-post__image card-image hero-3">
              <div className="hero-content-2 center">
                <h2 className="hero-text">
                  Green up <br /> Your Lifestyle
                </h2>
                <Link to="/products">
                  <a href="#" className="shop-now-btn" tabindex="0">
                    SHOP NOW
                  </a>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Carousel>
      <div className="hero-text-container">
        <div class="hero-text-row">
          <div>
            <div class="main-hero-text-small">HISTORY SINCE 1998</div>

            <h2 className=" main-hero-text">
              Welcome to Dazzle
              <br />
              furniture
              <br />
              Store - Amazing
            </h2>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12 wow fadeInRight">
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.{" "}
              <strong>Suspendisse faucibus</strong> sed dolor eget posuere. Sed
              id interdum urna faucibus sed dolor eget posuere.
            </p>
            <p>
              Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis
              lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem
              ipsum dolor sit amet dolor eget posuere.
            </p>

            <div class="name-black">
              <span>JONT HENRRY</span> - CEO
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", margin: "20px auto", textAlign: "center" }}>
        <Row>
          <Col lg="12" md="12" sm="12" className="mb-4">
            <Button
              size="lg"
              theme="white"
              onClick={() =>
                setData({ ...data, categoryVisible: !data.categoryVisible })
              }
            >
              <i
                className={
                  data.categoryVisible ? "fa fa-caret-up" : "fa fa-caret-down"
                }
              />{" "}
              Categories
            </Button>
          </Col>
          <Col lg="1" md="1"></Col>

          <Col lg="10" md="10" sm="12" className="mb-4">
            {data.categoryVisible &&
              categoryData.map(({ categoryName }) => (
                // <Link to="/products">
                <Button
                  size="sm"
                  id={categoryName}
                  onClick={(e) => getProduct(e)}
                  theme="white"
                >
                  {categoryName}
                </Button>
                // </Link>
              ))}
          </Col>
          <Col lg="1" md="1"></Col>
        </Row>
        {/* <div
          className="expander-container"
          // style={{
          //   backgroundImage: 'url("http://lorempixel.com/g/220/220/people/")'
          // }}
        >
          <div
            id="expandContent"
            className="expander-content-collapsed"
            onClick={() => expand}
          >
            <h2 id="expandH2" className="expander-inactive">
              Categories
            </h2>
            {data.categoryVisible && (
              <div id="expandInfo" className="expander-invisible">
                <p>Here's a little text that will be shown once expanded</p>
                <a className="button" href="#">
                  Click to View
                </a>
              </div>
            )}
          </div>
        </div> */}
      </div>

      <div className="glide-container">
        {category.hotProduct && <GlidSlide data={category.hotProduct} />}
      </div>
      {/* <Row>
        {PostsListOne.map((post, idx) => (
          <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
            <Card small className="card-post card-post--1">
              <div
                onClick={() => viewCategory()}
                className="card-post__image card-image"
                style={{ backgroundImage: `url(${post.backgroundImage})` }}
              >
                <Badge
                  pill
                  className={`card-post__category bg-${post.categoryTheme}`}
                >
                  {post.category}
                </Badge>
              </div>
            </Card>
          </Col>
        ))}
      </Row> */}
      <div class="slick-track" role="listbox">
        <div
          class="itemtservice slick-slide slick-current slick-active"
          data-slick-index="0"
          aria-hidden="false"
          tabindex="-1"
          role="option"
          aria-describedby="slick-slide30"
        >
          <div class="box-service col-lg-12">
            <div class="number">1</div>

            <div class="info">
              <h4 class="title">SHIPPING &amp; RETURN</h4>

              <p class="content">
                If your glasses aren't perfect, return them within 30 days for a
                full refund. We'll even pay shipping.
              </p>
            </div>
          </div>
        </div>
        <div
          class="itemtservice slick-slide slick-active"
          data-slick-index="1"
          aria-hidden="false"
          tabindex="-1"
          role="option"
          aria-describedby="slick-slide31"
        >
          <div class="box-service col-lg-12">
            <div class="number">2</div>

            <div class="info">
              <h4 class="title">SAFE PAYMENT</h4>

              <p class="content">
                Pay with the world's most popular and secure payment methods
              </p>
            </div>
          </div>
        </div>
        <div
          class="itemtservice slick-slide slick-active"
          data-slick-index="2"
          aria-hidden="false"
          tabindex="-1"
          role="option"
          aria-describedby="slick-slide32"
        >
          <div class="box-service col-lg-12">
            <div class="number">3</div>

            <div class="info">
              <h4 class="title">SHOP WITH CONFIDENCE</h4>

              <p class="content">
                Our Buyer Protection covers your purchase from click to
                delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* --- */}
      <div className="show-biz ">
        <div className="carosule-container">
          <Carousel
            showArrows={false}
            className="mb-4 mt-4 "
            autoPlay={true}
            infiniteLoop={true}
          >
            <Card small className="card-post card-post--1">
              <img className="carousel-img" src={B1} alt="" />
            </Card>
            <Card small className="card-post card-post--1">
              <img className="carousel-img" src={B2} alt="" />
            </Card>
            <Card small className="card-post card-post--1">
              <img className="carousel-img" src={B3} alt="" />
            </Card>
          </Carousel>
        </div>
        <div className="number-container gradient-background">
          <div className="parent-box">
            <div className="home-box">
              <h3 className="count-heading">
                <CountUp end={166} duration={4} />+
              </h3>
              <p className="para-heading">Satisfied Customer</p>
            </div>
            <div className="home-box">
              <h3 className="count-heading">
                <CountUp end={1000} duration={4} />+
              </h3>
              <p className="para-heading">Custome designs</p>
            </div>
          </div>
          <div className="parent-box">
            <div className="home-box">
              <h3 className="count-heading">
                <CountUp end={166} duration={4} />+
              </h3>
              <p className="para-heading">
                Our current team count, ​vulputate enim nulla aliquet
              </p>
            </div>
            <div className="home-box">
              <h3 className="count-heading">
                <CountUp end={190} duration={4} />+
              </h3>
              <p className="para-heading">
                Countries where OurApp is available
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* --------- */}
      <div className="bottom-img-container">
        <div className="left-img img-style-home">
          <div className="text-container-bottom-img-container-left">
            <h3 className="h3-bottom-img">
              <b>Stylish </b>
              <br />
              In Living Space
            </h3>
            <Link to="/products">
              <button className="shop-now-btn">Shop now</button>
            </Link>
          </div>
        </div>
        <div className="right-img img-style-home">
          <div className="text-container-bottom-img-container-right">
            <h3 className="h3-bottom-img">
              <b>Mix {`&`} Match </b>
              <br />
              Your Style
            </h3>
            <Link to="/products">
              <button className="shop-now-btn">Shop now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* --- */}
      {/* Second Row of Posts */}
      {/* <Row>
        {PostsListTwo.map((post, idx) => (
          <Col lg="6" sm="12" className="mb-4" key={idx}>
            <Card small className="card-post card-post--aside card-post--1">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url('${post.backgroundImage}')` }}
              >
                <Badge
                  pill
                  className={`card-post__category bg-${post.categoryTheme}`}
                >
                  {post.category}
                </Badge>
              </div>
              <CardBody>
                <h5 className="card-title">
                  <a className="text-fiord-blue" href="#">
                    {post.title}
                  </a>
                </h5>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row> */}

      {/* Third Row of Posts */}
      {/* <Row>
        {PostsListThree.map((post, idx) => (
          <Col lg="4" key={idx}>
            <Card small className="card-post mb-4">
              <CardBody>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted">{post.body}</p>
              </CardBody>
              <CardFooter className="border-top d-flex">
                <div className="card-post__author d-flex">
                  <a
                    href="#"
                    className="card-post__author-avatar card-post__author-avatar--small"
                    style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                  >
                    Written by James Khan
                  </a>
                  <div className="d-flex flex-column justify-content-center ml-3">
                    <span className="card-post__author-name">
                      {post.author}
                    </span>
                    <small className="text-muted">{post.date}</small>
                  </div>
                </div>
                <div className="my-auto ml-auto">
                  <Button size="sm" theme="white">
                    <i className="far fa-bookmark mr-1" /> Bookmark
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row> */}

      {/* Fourth Row of posts */}
      {/* <Row>
        {PostsListFour.map((post, idx) => (
          <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
            <Card small className="card-post h-100">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url('${post.backgroundImage}')` }}
              />
              <CardBody>
                <h5 className="card-title">
                  <a className="text-fiord-blue" href="#">
                    {post.title}
                  </a>
                </h5>
                <p className="card-text">{post.body}</p>
              </CardBody>
              <CardFooter className="text-muted border-top py-3">
                <span className="d-inline-block">
                  By
                  <a className="text-fiord-blue" href={post.authorUrl}>
                    {post.author}
                  </a>{" "}
                  in
                  <a className="text-fiord-blue" href={post.categoryUrl}>
                    {post.category}
                  </a>
                </span>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row> */}
    </Container>
  );
}
