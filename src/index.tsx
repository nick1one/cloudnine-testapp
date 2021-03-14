import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalFonts from "./fonts/fonts";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from "./store";
import AllSalons from "./views/AllSalons";
import SalonInfo from "./views/SalonInfo";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <GlobalFonts />
        <Switch>
          <Route exact path="/">
            <AllSalons />
          </Route>
          <Route path="/salon-info/:id">
            <SalonInfo />
          </Route>
        </Switch>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
