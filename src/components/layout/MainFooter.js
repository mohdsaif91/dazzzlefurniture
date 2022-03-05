import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Nav, NavItem, NavLink } from "shards-react";
import { Link } from "react-router-dom";

import Logo from "../../images/shards-dashboards-logo.svg";

const MainFooter = ({ contained, menuItems, copyright }) => {
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
                        <li>
                          <a href="/pages/about-1">About Us</a>
                        </li>
                        <li>
                          <a href="#">Policy</a>
                        </li>
                        <li>
                          <a href="#">Term</a>
                        </li>
                        <li>
                          <a href="/pages/contact-us">Contact</a>
                        </li>
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
                <div className="text-right widget widget_text">
                  <div className="textwidget">
                    <div className="social-media-link style-default pull-right">
                      <label>Follow Us On Social</label>

                      <a
                        href="#"
                        className="facebook"
                        title="Facebook"
                        target="_blank"
                        rel="nofollow"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>

                      <a
                        href="#"
                        className="twitter"
                        title="Twitter"
                        target="_blank"
                        rel="nofollow"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>

                      <a
                        href="#"
                        className="pinterest"
                        title="Pinterest"
                        target="_blank"
                        rel="nofollow"
                      >
                        <i class="fa fa-pinterest-p"></i>
                      </a>

                      <a
                        href="#"
                        className="instagram"
                        title="Instagram"
                        target="_blank"
                        rel="nofollow"
                      >
                        <i class="fa fa-instagram"></i>
                      </a>
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
// <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
//   <Container fluid={contained}>
//     <Row>
//       <Nav>
//         {menuItems.map((item, idx) => (
//           <NavItem key={idx}>
//             <NavLink tag={Link} to={item.to}>
//               {item.title}
//             </NavLink>
//           </NavItem>
//         ))}
//       </Nav>
//       <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
//     </Row>
//   </Container>
// </footer>
// );

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
