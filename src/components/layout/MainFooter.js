import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Store } from "../../flux";
import { AdminContext } from "../../context/state/AdminState";

import Logo from "../../images/shards-dashboards-logo.svg";
import Facebook from "../../images/facebook-brands.svg";
import Instagram from "../../images/instagram-brands.svg";
import WhatsApp from "../../images/whatsapp-brands.svg";

const initialBusniessStata = {
  mobileNumber: "",
  emailId: "",
  address: "",
  facebookUrl: "",
  instagramUrl: "",
  whatsAppUrl: "",
};

const MainFooter = ({ contained, menuItems, copyright }) => {
  const [busniessInfoData, setBusniessInfoData] = useState({
    ...initialBusniessStata,
  });

  const sideBar = Store.getSidebarItems();

  const { getBusniessInfo, busniessInfo } = useContext(AdminContext);

  useEffect(() => {
    if (!busniessInfo) {
      getBusniessInfo();
    }
    if (busniessInfo) {
      setBusniessInfoData(busniessInfo);
    }
  }, [busniessInfo]);

  const openSocial = (data) => {
    console.log("a");
    window.open(data, "_blank");
  };

  const openWA = (data) => {
    window.open(`whatsapp://send?phone=+91${data}`, "_blank");
  };

  return (
    <footer id="colophon" className=" site-footer">
      <div className="footer-top">
        <div className="container-full">
          <div className="row pl-4 pr-4">
            <div className="footer-column col-xs-12 col-sm-4 col-md-4">
              <div className="footer-column-inner">
                <div className="widget widget_nav_menu widget_menu_horizontal">
                  <div className="widget-inner">
                    <div className="menu--container">
                      <ul className="menu">
                        {sideBar.map((m) => (
                          <li>
                            <a href={`${m.to}`}>{m.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-column col-xs-12 col-sm-4 col-md-4">
              <div className="footer-column-inner">
                <div className="widget widget_text widget-logo-copyright text-center">
                  <div className="textwidget">
                    <div className="img-text-container mb-4">
                      <a href="/">
                        <img
                          src={Logo}
                          className="p2-4"
                          alt="[Demo Theme] - Dazzle furniture"
                        />
                      </a>
                      <div className="logo-text pl-3">Dazzle furniture</div>
                    </div>

                    <p>© 2018 Dazzle Funrniture - All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-column col-xs-12 col-sm-4 col-md-4">
              <div className="footer-column-inner">
                <div className="text-center widget widget_text">
                  <div className="textwidget">
                    {/* pull-right */}
                    <div className="style-default">
                      <p>Follow Us On Social</p>
                      <div className="socila-media-container">
                        <div className="circle-social">
                          <div className="outter-container-fb">
                            <img
                              alt=""
                              onClick={() =>
                                openSocial(busniessInfoData.facebookUrl)
                              }
                              src={Facebook}
                              className="contact-icon footer-icon"
                            />
                          </div>
                        </div>
                        <div className="circle-social">
                          <div className="outter-container-fb">
                            <img
                              alt=""
                              onClick={() =>
                                openSocial(busniessInfoData.instagramUrl)
                              }
                              src={Instagram}
                              className="contact-icon footer-icon"
                            />
                          </div>
                        </div>
                        <div className="circle-social">
                          <div className="outter-container-fb">
                            <img
                              alt=""
                              onClick={() =>
                                openWA(busniessInfoData.whatsAppUrl)
                              }
                              src={WhatsApp}
                              className="contact-icon footer-icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

MainFooter.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,
  /**
   * The menu items array.
   */
  menuItems: PropTypes.array,
  /**
   * The copyright info.
   */
  copyright: PropTypes.string,
};

MainFooter.defaultProps = {
  contained: false,
  copyright: "Copyright © 2018 DesignRevision",
  menuItems: [
    {
      title: "Home",
      to: "#",
    },
    {
      title: "Services",
      to: "#",
    },
    {
      title: "About",
      to: "#",
    },
    {
      title: "Products",
      to: "#",
    },
    {
      title: "Blog",
      to: "#",
    },
  ],
};

export default MainFooter;
