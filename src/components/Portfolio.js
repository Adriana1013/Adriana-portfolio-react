import React from "react";
import Project from "./Project"

  const listProjects = [
    {
    id: 0,
    title: "Password Generator",
    languages: "HTML, CSS, JavaScript",
    image: "react-portfolio/react-portfolio/public/Password Generator.png",
    description: "Generates a password that meets certain criteria so that you can create a strong password that provides greater security",
    repository: "https://github.com/Adriana1013/Homework-week-03",
    deployed: "https://adriana1013.github.io/Homework-week-03/",
  },

  {
    id: 1,
    title: "Work Day Scheduler",
    languages: "HTML, CSS, JavaScript",
    image: "react-portfolio/react-portfolio/src/Assets/WorkDayPlanner.jpeg",
    description: "A daily planner to help keep your busy day organized",
    repository: "https://github.com/Adriana1013/Homework-week-05",
    deployed: "https://adriana1013.github.io/Homework-week-05/",
  },

  {
    id: 2,
    title: "Project #1: INtertain",
    languages: "HTML, CSS, JavaScript",
    image: "react-portfolio/react-portfolio/src/Assets/WorkDayPlanner.jpeg",
    description: "A book, board game and movie generator for a night in!",
    repository: "https://github.com/NW-Bootcamp-Team1/Night-In",
    deployed: "https://nw-bootcamp-team1.github.io/Night-In/home-page/index",
  },

  {
    id: 3,
    title: "README Generator",
    languages: "JavaScript",
    image: "react-portfolio/react-portfolio/src/Assets/readmegenerator.png",
    description: "A high-quality README.md that's generated using a command-line application based off of user inputs",
    repository: "https://github.com/Adriana1013/Homework-Week-09",
    deployed: "https://drive.google.com/file/d/1FvhqAi-Cx9UvLI4nNcPaSUmd8uuRaJvG/view?usp=sharing",
  },

  {
    id: 4,
    title: "E-commerce Back End",
    languages: "JavaScript",
    image: "../Assets/ECommerce.png",
    description: "The back end for an e-commerce site",
    repository: "https://github.com/Adriana1013/Homework-week-13",
    deployed: "https://drive.google.com/file/d/1P8gnaj7ThuEkDvKa65pp5StRin6xcA0x/view?usp=sharing",
  },

  {
    id: 5,
    title: "Project #2: Crunch Track",
    languages: "JavaScript, CSS, Handlebars",
    image: "react-portfolio/react-portfolio/src/Assets/crunchtrack.png",
    description: "An interactive workout plan for anyone",
    repository: "https://github.com/Crunch-Track-Team-5/CrunchTrack",
    deployed: "https://arcane-citadel-77295.herokuapp.com/",
  },
];

function Portfolio() {
return (
<section>
  <div>
    <h1 className="App">Adriana's Current Projects!</h1>
  </div>
  <div>
    <ul className="proj">
        <li>
            <Project listProjects={listProjects}/>
        </li>
    </ul>
  </div>
</section>
);

}

export default Portfolio;