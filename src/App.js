import React, { useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { TheSidebar, TheAside, TheFooter, TheHeader, TheContent } from "./containers/index";
import { setIdToken, setIsLoggedIn, setRefreshToken } from "./redux/actions/auth";
import { getUsers } from "./redux/actions/user";
import { getCustomers } from "./redux/actions/customer";

import "./scss/style.scss";

const Login = React.lazy(() => import("./views/pages/login/Login"));
// const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
// const firebaseAuth = getAuth();

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const App = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { darkMode } = useSelector((state) => state.window);
  const dispatch = useDispatch();
  const classes = classNames("c-app c-default-layout", darkMode && "c-dark-theme");

  useEffect(() => {
    const idToken = localStorage.getItem("idToken") || "";
    const refreshToken = localStorage.getItem("refreshToken") || "";

    if (idToken || refreshToken) {
      dispatch(setIdToken({ idToken: idToken }));
      dispatch(setRefreshToken({ refreshToken: refreshToken }));
      dispatch(setIsLoggedIn({ isLoggedIn: true }));
      dispatch(getUsers());
      dispatch(getCustomers());
    }
  }, [dispatch]);

  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          {!isLoggedIn && (
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/login" />} />
              <Route exact path="/login" name="Login" render={(props) => <Login {...props} />} />
            </Switch>
          )}

          {isLoggedIn && (
            <div className={classes}>
              <Route exact path="/login" redner={() => <Redirect to="/dashboard" />} />
              <Route exact path="/" redner={() => <Redirect to="/dashboard" />} />
              <TheSidebar />
              <TheAside />
              <div className="c-wrapper">
                <TheHeader />
                <div className="c-body">
                  <TheContent />
                </div>
                <TheFooter />
              </div>
            </div>
          )}
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
