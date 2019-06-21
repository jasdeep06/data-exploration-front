import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Exploration from "../components/Exploration";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/exploration" component={Exploration}></Route>
    </BrowserRouter>
  );
};

export default AppRouter;
