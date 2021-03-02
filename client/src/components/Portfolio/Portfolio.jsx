import React from "react";
// import portfoliPicOne from '../images/11.jpg';
import portfolioPicTwo from "../images/3.jpg";
import portfolioPicThree from "../images/12.jpg";
// import portfolioPicFour from '../images/5.jpg';
import portfolioPicFive from "../images/6.jpg";
import portfolioPicSix from "../images/7.jpg";
import portfolioPicSeven from "../images/9.jpg";
// import portfolioPicEight from '../images/13.jpg';
import portfolioPicNine from "../images/4.jpg";
import portfolioPicTen from "../images/2.jpg";
import portfolioPicEleven from "../images/8.gif";
import portfolioPicTwelve from "../images/16.jpg";
import portfolioPicThirteen from "../images/15.jpg";
import portfolioPicSeveenteen from "../images/17.jpg";
import portfolioPicEighteen from "../images/18.jpg";
import PortfolioItem from "./PortfolioItem.jsx";
import Container from "../Container/Container.jsx";
import "./Portfolio.css";

const data = [
  {
    id: 18,
    title: "Social Media App",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicEighteen,
    url: "https://guarded-brook-94874.herokuapp.com/",
    overview: "React, Redux, Font Awesome, Nodejs, Express, MongoDB, Postman",
  },

  {
    id: 17,
    title: "Amazon Web Page",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicSeveenteen,
    url: "https://e-commerce-2fdd5.web.app/",
    overview: "React, Redux, Material UI, Firebase/Firestore, Stripe",
  },

  {
    id: 2,
    title: "Work Day Scheduler",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicTen,
    url: "https://kachumahara.github.io/dayScheduler/",
    overview: "HTML, Bootrap, jQuery, JavaScript",
  },
  {
    id: 4,
    title: "Workout Tracker",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicNine,
    url: "https://shrouded-reef-36317.herokuapp.com/",
    overview: "MongoDB, Mongoose, Express, Node.js",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicFive,
    url: "https://kachumahara.github.io/WeatherDashboard/",
    overview: "API, AJAX, JavaScript, jQuery",
  },
  {
    id: 7,
    title: "Password Generator",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicSix,
    url: "https://kachumahara.github.io/myFirstPasswordGenerator/",
    overview: "HTML, CSS, JavaScript",
  },
  {
    id: 16,
    title: "Employee Directory",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicTwelve,
    url: "https://kachumahara.github.io/employee-directory/",
    overview: "React, React Hooks, axios, API",
  },
  {
    id: 12,
    title: "Code Quiz Challenge",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicThree,
    url: "https://kachumahara.github.io/codeQuiz/",
    overview: "HTML, CSS, JavaScript",
  },
  {
    id: 3,
    title: "Note Taker",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicTwo,
    url: "https://powerful-garden-52265.herokuapp.com/",
    overview: "Express, Node, local storage, jQuery",
  },
  {
    id: 9,
    title: "Burger App",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicSeven,
    url: "https://evening-caverns-32521.herokuapp.com/",
    overview: "Handlebars, Mysql, Node.js, Express, JavaScript",
  },
  {
    id: 8,
    title: "ReadMe Generator",
    bootcamp: true,
    independent: false,
    favorite: true,
    image: portfolioPicEleven,
    url: "https://kachumahara.github.io/ReadMe-Generator/",
    overview: "Node CLI, Axios, API, JavaScript",
  },
  {
    id: 15,
    title: "Resume",
    bootcamp: false,
    independent: true,
    favorite: true,
    image: portfolioPicThirteen,
    url:
      "https://drive.google.com/file/d/11dCXJYyds7ETHUjPpLem2nEv93LQpF8R/view?usp=sharing",
    overview: "Resume",
  },
];

const Portfolio = () => {
  return (
    <React.Fragment>
      <Container>
        <div className="row m-auto p-auto">
          {data.map((project) => {
            return (
              <PortfolioItem
                key={project.id}
                image={project.image}
                url={project.url}
                title={project.title}
                overview={project.overview}
              />
            );
          })}
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Portfolio;
