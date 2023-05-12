import React from 'react'
import { projects } from '../helpers/projectsList'
import Project from '../components/project/Project';
import './StyleGog.css'


export default function Projects() {
    return (
        <div className='Goog'>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Good A Habits</h2>
                    <ul className="projects">

                    {projects.map ((project, index) =>{
                        return <Project key={index} title={project.title} img={project.img}/>;
                    }
                    )}

                    </ul>
                </div>
            </main>
        </div>
    );
}
