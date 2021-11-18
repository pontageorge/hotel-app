import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Homepage from "./components/Homepage/Homepage";

import "./config.css";

function Main() {
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Hotel App</title>
        </Helmet>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default Main;
