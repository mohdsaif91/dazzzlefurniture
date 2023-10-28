import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "./login.module.scss";
import globalStyle from "../../global.module.scss";

const auth = {
  userName: "admin",
  password: "admin",
};

function Login() {
  const [error, setError] = useState("");
  const userNameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const loginUser = () => {
    console.log(userNameRef.current.value, passwordRef.current.value);
    if (
      auth.userName === userNameRef.current.value &&
      auth.password === passwordRef.current.value
    ) {
      localStorage.setItem("access", "admin");
      navigate("/adminHome");
    } else {
      setError("username or password is incorrect");
    }
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.loginItemContainerParent}>
        <div className={style.loginItemContainer}>
          <div className={style.formItemContainer}>
            <div className={style.labelContainer}>
              <label className={style.formLabel}>UserName</label>
            </div>
            <input
              type="input"
              className={`${style.formInput} ${globalStyle.input}`}
              ref={userNameRef}
            />
          </div>
          <div className={style.formItemContainer}>
            <div className={style.labelContainer}>
              <label className={style.formLabel}>Password</label>
            </div>
            <input
              type="password"
              className={`${style.formInput} ${globalStyle.input}`}
              ref={passwordRef}
            />
          </div>
          {error !== "" && <div className={globalStyle.errorText}>{error}</div>}
          <button
            onClick={() => loginUser()}
            className={`${style.loginBtn} ${globalStyle.btn}`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
