import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Giorgi</h2>
        <div className="prompt">
          <p>A Fornt-end ( React.js ) developer</p>
          <a target='_blank' href="https://www.linkedin.com/in/giorgi-pkhovelishvili-8b48701a1/"><LinkedInIcon /></a>
          <a onClick={() => window.location = 'mailto:gio.pxovelishvili@gmail.com'}><EmailIcon /></a>
          <a target='_blank' href="https://github.com/pxovelaa"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-end</h2>
            <span>ReactJS, HTML5, CSS, NPM, BootStrap, MaterialUI, Yarn, StyledComponents, Jquery, Git, Figma</span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span>Javascript, TypeScript </span>
          </li>
          <li className="item">
            <h2> Shift-Leader</h2>
            <span>Resolving problems that occur during the shift, time management, Staff control</span>
          </li>
          <li className="item">
            <h2> Sales-Manager</h2>
            <span>Price control, Stock description, FIFO</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
