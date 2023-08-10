import React from "react";
import Home from "./JsonServer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./LayoutPage";
import NewNames from "./NewNames";
import NameDetails from "./NameDetails";
import NotFound from "./NotFound";
import "./App.css";
function Appj() {
  return (
    <Router>
      <div className="home">
        <Layout />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/newnames" element={<NewNames />} />

          <Route path="/names/:id" element={<NameDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Appj;
