import React from "react";

import bulbImage from "../../images/bulb-img.png";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="hero-section-aboutus">
        <div className="about-us-heading">
          Ready
          <br />
          to work
          <br /> with us ?
        </div>
      </div>
      <div className="section-2-about-us">
        <div className="container-text">
          <h4 class="heading">Design Trends</h4>
          <p class="heading-para">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.&nbsp;Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="container-text">
          <h4 class="heading">Sustainable designs</h4>
          <p class="heading-para">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.&nbsp;Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="container-text">
          <h4 class="heading">Recycled Materials</h4>
          <p class="heading-para">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.&nbsp;Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
      <div className="section-3-about-us">
        <div className="layout-row">
          <div className="item-1">
            <img className="item-1-img" src={bulbImage} alt="" />
            <div>
              <h4 className="item-heading">STRATEGY</h4>
              <p className="item-para">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
          <div className="item-1 extra-margin-64">
            <img className="item-1-img" src={bulbImage} alt="" />
            <div>
              <h4 className="item-heading">STRATEGY</h4>
              <p className="item-para">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
          <div className="item-1 extra-margin-96">
            <img className="item-1-img" src={bulbImage} alt="" />
            <div>
              <h4 className="item-heading">STRATEGY</h4>
              <p className="item-para">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
          <div className="item-1 h-100-about-us">
            <div className="main-heading">
              we make life exciting with our designs
            </div>
            <button className="contact-us-btn">contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
