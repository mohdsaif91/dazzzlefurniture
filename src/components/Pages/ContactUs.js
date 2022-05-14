import React, { useContext, useEffect, useState } from "react";

import Phone from "../../images/phone-solid.svg";
import Mail from "../../images/envelope-solid.svg";
import Location from "../../images/location-dot-solid.svg";
import Facebook from "../../images/facebook-brands.svg";
import Instagram from "../../images/instagram-brands.svg";
import WhatsApp from "../../images/whatsapp-brands.svg";
import { mobileValidation } from "../../util";
import { AdminContext } from "../../context/state/AdminState";

const initialStata = {
  customerName: "",
  mobileNumber: "",
  message: "",
};

const initialBusniessStata = {
  mobileNumber: "",
  emailId: "",
  address: "",
  facebookUrl: "",
  instagramUrl: "",
  whatsAppUrl: "",
};

function ContactUs() {
  const [message, setMessage] = useState({ ...initialStata });
  const [validForm, setValidForm] = useState(false);
  const [busniessInfoData, setBusniessInfoData] = useState({
    ...initialBusniessStata,
  });

  const { sendEnquery, getBusniessInfo, busniessInfo } =
    useContext(AdminContext);

  useEffect(() => {
    if (!busniessInfo) {
      getBusniessInfo();
    } else {
      setBusniessInfoData(busniessInfo);
    }
  }, [busniessInfo]);

  const clearForm = () => {
    setMessage({ ...initialStata });
  };

  const sendEnqueryMethod = () => {
    sendEnquery(message);
    setMessage({ ...initialStata });
  };

  console.log(busniessInfoData);

  return (
    <div className="contact-us-container">
      <div className="contact-us-hero">
        <div className="h1-title">Let’s Start a Conversation</div>
        <div className="sub-text-contact">
          Any Question or Remarks? Just write us message!
        </div>
      </div>
      <div className="main-contact-us">
        <div className="pallet">
          <div className="main-text-contact">Contact Information</div>
          <div className="sub-text-contact">
            Fill in the form our team will get back to you in 24 hours
          </div>
          <div className="contact-info-container">
            <div className="icon-text">
              <img alt="" src={Phone} className="contact-icon" />
              <span className="phone-text">
                <a
                  className="no-link-style"
                  href={`tel:+91${busniessInfoData.mobileNumber}`}
                >
                  {`+91 ${busniessInfoData.mobileNumber}`}
                </a>
              </span>
            </div>
            <div className="icon-text">
              <img alt="" src={Mail} className="contact-icon" />
              <span className="phone-text">
                <a
                  className="no-link-style"
                  href={`mailto:${busniessInfoData.emailId}`}
                >
                  {busniessInfoData.emailId}
                </a>
              </span>
            </div>
            <div className="icon-text">
              <img alt="" src={Location} className="contact-icon" />
              <span className="phone-text address-text">
                {busniessInfoData.address}
              </span>
            </div>
          </div>
          <div className="socila-media-container">
            <div className="outter-container-fb">
              <img alt="" src={Facebook} className="contact-icon" />
            </div>
            <div className="outter-container-fb">
              <img alt="" src={Instagram} className="contact-icon" />
            </div>
            <div className="outter-container-fb">
              <img alt="" src={WhatsApp} className="contact-icon" />
            </div>
          </div>
        </div>
        <div className="contact-us-form">
          <div className="form-control-contact-us">
            <input
              type="text"
              value={message.customerName}
              onChange={(e) =>
                setMessage({ ...message, customerName: e.target.value })
              }
              className="input-tag"
              placeholder="Customer name"
            />
            <input
              type="text"
              value={message.mobileNumber}
              onChange={(e) => {
                setValidForm(mobileValidation(e.target.value));
                setMessage({ ...message, mobileNumber: e.target.value });
              }}
              className="input-tag"
              placeholder="Mobile Number"
            />
            <textarea
              type="text"
              className="input-tag"
              placeholder="Message"
              value={message.message}
              onChange={(e) =>
                setMessage({ ...message, message: e.target.value })
              }
              cols={4}
              rows={4}
            />
            <div className="btn-container-contact-us">
              <button className="btn danger" onClick={clearForm}>
                Clear
              </button>
              <button
                disabled={
                  !validForm &&
                  message.customerName === "" &&
                  message.message === ""
                }
                className={`btn primary ${
                  validForm &&
                  message.customerName !== "" &&
                  message.message !== ""
                    ? ""
                    : "disable-btn"
                }`}
                onClick={sendEnqueryMethod}
              >
                Send Mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ${
//   validForm &&
//   message.customerName !== "" &&
//   message.message !== ""
//     ? ""
//     : "disable-btn"
// }

export default ContactUs;
