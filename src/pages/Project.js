import React from "react";
import img from "./../img/projects/02-big.jpg";
import BtnGitHab from "../components/btnGitHab/btnGitHab";
import { useParams } from "react-router-dom";
import {projects} from'../helpers/projectsList'

export default function Project() {
  const { id } = useParams();
  const project = projects[id]
  

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.habit}</h1>

          <img src={img} alt={project.habit}className="project-details__cover" />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>

          <BtnGitHab link="https://github.com/" />
        </div>
      </div>
    </main>
  );
}
