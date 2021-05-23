import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "react-fullscreen-loading";

import routes from "./routes";
import withTracker from "./withTracker";
import { AdminContext } from "./context/state/AdminState";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/shards-dashboards.1.1.0.min.css";

export default () => {
  const [loadingScr, setLoading] = useState(false);
  const { showLoading } = useContext(AdminContext);

  useEffect(() => {
    setLoading(showLoading);
  }, [showLoading]);
  return (
    <div>
      {loadingScr ? (
        <Loading loading background="#007BFF" loaderColor="#F5F6F8" />
      ) : (
        <Router basename={process.env.REACT_APP_BASENAME || ""}>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={withTracker(props => {
                    return (
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                    );
                  })}
                />
              );
            })}
          </Switch>
        </Router>
      )}
    </div>
  );
};
