import React from "react";
import { useNavigate } from "react-router-dom";

import map from "../../Img/icon/map.png";
import phone from "../../Img/icon/phone.png";
import email from "../../Img/icon/email.png";
import facebook from "../../Img/icon/facebook.png";
import instagram from "../../Img/icon/instagram.png";
import send from "../../Img/icon/send.png";

import style from "./footer.module.scss";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className={style.footerContainer}>
      <div className={style.one}>
        <div className={style.footerLogoContainer}>
          <h2 className={style.companyText} onClick={() => navigate("/")}>
            DazzleFurniture World
          </h2>
          <div className={style.logoDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </div>
        </div>
      </div>
      <div className={style.one}>
        <h2 className={style.companyText}>Contact</h2>
        <ul className={style.contactContainer}>
          <li className={style.contactItem}>
            <img src={map} className={style.contactIcon} alt="map" />
            <h5 className={style.footerText}>No 40 Baria Sreet 133/2</h5>
          </li>
          <li className={style.contactItem}>
            <img src={phone} className={style.contactIcon} alt="map" />
            <span>
              <a className={style.phoneNumber} href="tel:15618003666666">
                +(91) 1800-366-6666
              </a>
            </span>
          </li>
          <li className={style.contactItem}>
            <img src={email} className={style.contactIcon} alt="map" />
            <h5 className={style.footerText}>abc@gmail.com</h5>
          </li>
          {/* <li className={style.contactItem}>
            <img src={map} className={style.contactIcon} alt="map" />
            <h5 className={style.footerText}>No 40 Baria Sreet 133/2</h5>
          </li> */}
        </ul>
      </div>
      <div className={style.one}>
        <h2 className={style.companyText}>Connect with us</h2>
        <div className={style.socialMediaContainer}>
          <img src={facebook} className={style.contactIcon} alt="facebook" />
          <img src={instagram} className={style.contactIcon} alt="instgram" />
        </div>
      </div>
      <div className={style.one}>
        <h2 className={style.companyText}>News letter</h2>
        <div className={style.newsLetterText}>Suscribe to our news letter</div>
        <div className={style.inputContainerFooter}>
          <input className={style.footerInput} placeholder="Your e-mail" />
          <img src={send} className={style.contactIconInput} alt="send" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
