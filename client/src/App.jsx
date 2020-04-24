import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Wrapper from "./components/Wrapper/Wrapper.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Wrapper>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </React.Fragment>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
