import React from "react";
import Container from "../Container/Container.jsx";
import ImageChangeOnMouseOver from "./imageEffects/ImageChangeOnMouseOver.jsx";
import Row from "../Row/Row.jsx";
import "./Home.css";
import Banner from './Banner.jsx'
const Home = () => {
  return (
    <Container fluid>
      <Row className="row">
        <div
          className="col-md-3 justify-content center shadow-lg p-3 mb-5 rounded"
          id="imdiv"
        >
          <ImageChangeOnMouseOver
            className="card-img justify-content center"
            id="image"
          />
        </div>
        <div className="col-md-5 justify-content center shadow-lg p-3 mb-5 pt-5 rounded">
          <div className="card-body">
          <h2 className="texty">About</h2>
          <br />
            <p className="card-text font-weight-bold" id="bio">
            My name is Kenneth Achumahara, a Software Developer. I earned my first degree in Accounting and most recently obtained a Certificate in Full Stack Web Development from the University of Arizona. With a disciplined mindset, I love taking difficult tasks and rendering valued solutions that are exceptional with unique qualities. Enthusiastic about approaching programming challenges from different angles and collaborating with others to create meaningful applications.
            </p>
          </div>
          <iframe frameborder="0" scrolling="no" src="https://arizona.credly.com/embed.html#/?member_badge_id=23348148" width="180" height="230"></iframe>
        </div>
      </Row>
      <Row>
          <Banner/>
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
