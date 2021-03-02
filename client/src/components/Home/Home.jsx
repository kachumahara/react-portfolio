import React from "react";
import Container from "../Container/Container.jsx";
import ImageChangeOnMouseOver from "./imageEffects/ImageChangeOnMouseOver.jsx";
import Row from "../Row/Row.jsx";
import "./Home.css";
import Banner from "./Banner.jsx";
const Home = () => {
  return (
    <Container fluid>
      <Row className="row">
        <div
          className="col-md-4 justify-content center shadow-lg p-3 mb-5 rounded"
          id="imdiv"
        >
          <ImageChangeOnMouseOver
            className="card-img justify-content center"
            id="image"
          />
        </div>
        <div className="col-md-6 justify-content center shadow-lg p-3 mb-5 pt-5 rounded">
          <div className="card-body">
            <h2 className="texty">About Me</h2>
            <br />
            <p className="card-text font-weight-bold" id="bio">
              Project-focused Software Engineer, who demonstrate resilience;
              motivated in learning new and exciting technologies. Knowledgeable
              of backend and frontend development requirements. Adding value in
              any area of involvement with the sole aim of achieving the overall
              goal of my team. With significant experience conducting user
              research and collaborating with developers to create intuitive web
              applications. Meticulous mindset from over 10 years of experience
              in IT Project Management.
            </p>
          </div>
        </div>
      </Row>
      <Row>
        <Banner />
      </Row>
    </Container>
  );
};

export default Home;

// <Container fluid>
// <div></div>
// <div>
// <ImageChangeOnMouseOver />
// </div>
// </Container>
