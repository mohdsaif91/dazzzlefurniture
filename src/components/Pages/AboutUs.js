import React from "react";
import { useHistory } from "react-router-dom";

import bulbImage from "../../images/bulb-img.png";
import Location from "../../images/location-dot-solid.svg";

function AboutUs() {
  const history = useHistory();

  return (
    <div className="about-us-container">
      <div className="hero-section-aboutus">
        <div className="about-us-heading">
          Getting
          <br />
          better and
          <br />
          better together
        </div>
      </div>
      <div className="section-2-about-us">
        <div className="container-text">
          <h4 class="heading">Experience new way of designing</h4>
          <p class="heading-para">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.&nbsp;Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="container-text">
          <h4 class="heading">Experience the shop</h4>
          <p class="heading-para">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.&nbsp;Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="container-text">
          <h4 class="heading">Experience wood-work items</h4>
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
              <h4 className="item-heading">Simple Creative</h4>
              <p className="item-para">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
          <div className="item-1 extra-margin-96">
            <img className="item-1-img" src={bulbImage} alt="" />
            <div>
              <h4 className="item-heading">Design Quaility</h4>
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
            <button
              className="contact-us-btn"
              onClick={() => history.push("/contactus")}
            >
              contact us
            </button>
          </div>
        </div>
      </div>
      <div className="section-4-about-us">
        <div className="section-4-heading">Visit Our Store</div>
        <div className="address-section-4">
          <div className="icon-container-about-us">
            <img alt="" src={Location} className="location-icon" />
            <div className="icon-container-about-us-text">
              <div className="icon-container-about-us-city">Mumbai</div>
              <div className="icon-container-about-us-address">
                4 Copley Place, 7th Floor, Boston, MA 6
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
