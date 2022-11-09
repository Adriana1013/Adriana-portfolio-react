import React from "react";

function Project(props) {
  return (
    <div>
      {props.listProjects.map((listProjects) => (
        <div className="container1">
        <a href={listProjects.live} target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL + listProjects.image} alt="projectphotos" className="image1" />
           </a>
            <p key={listProjects.id}>
             {listProjects.title}
                  </p>
                {listProjects.description}
                <div>
                  <h4>Languages:</h4> {listProjects.languages}
                </div>
             <div>
                <p></p>
                <a href={listProjects.repository} target="_blank" rel="noreferrer" > View my github repository</a>
                <p></p>
                <a href={listProjects.deployed} target="_blank" rel="noreferrer" > Check out my app! </a>
            </div>
        </div>
      ))}
    </div>
);
}

export default Project;