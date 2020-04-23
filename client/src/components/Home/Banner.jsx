import React from 'react';
import './Home.css';

const Banner = () => {
    return (
    <div className="banner-text shadow-lg p-3 mt-5 rounded">
        <h3>Full Stack Web Developer</h3>
        <hr />
        <p>React | Express | MongoDB | MySQL | Node | JavaScript | jQuery | Bootstrap | CSS | HTML</p>
        <div className="social-links">
            <a href="https://github.com/kachumahara" target="__blank">
                <i className="fa fa-github-square fa-3x" aria-hidden="true"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/kenneth-achumahara-960b5b181/" target="__blank">
                <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.youtube.com/channel/UC5G87W5BBsCpPN3Uiao4pFA?view_as=subscriber" target="__blank">
                <i className="fa fa-youtube-square fa-3x" aria-hidden="true"></i>
            </a>
            
        </div>
    </div>
    )
}

export default Banner;