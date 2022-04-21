import "./App.css";
// import Main from "./pages/home/main";
// import Card from "./components/Card/card";
import Main from "./pages/home/Index";
// import KodinganLama from "./components/kodinganLama";
import React, { useEffect, useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { getToken } from "./auth/getToken";
import LoginPage from "./pages/Login/Login";
import TokenContext from "./contex/contex";

function App() {
  const [token, setToken] = useState("");
  const value = useMemo(() => ({ token, setToken }), [token]);

  // Check if the token is available
  useEffect(() => {
    if (!token) {
      setToken(getToken());
    }
  }, []);

  return (
    <TokenContext.Provider value={value}>
      <Router>
        <Switch>
          <Route path="/create-playlist">
            {!token ? (
              <Redirect exact from="/create-playlist" to="/" />
            ) : (
              <Main />
            )}
          </Route>
          <Route path="/">
            {token ? (
              <Redirect exact from="/" to="/create-playlist" />
            ) : (
              <LoginPage />
            )}
          </Route>
        </Switch>
      </Router>
    </TokenContext.Provider>
  );
}

export default App;
