import React, { useState } from 'react'

function Portfolio() {
    const [projects] = useState([
        {
            name: "The Bloc(complete overhaul of Bloc)",
            deployedLink: "https://the-bloc.herokuapp.com/",
            githubLink: "https://github.com/jmrendon48/bloc-2.0",
            imgId: 0
        },{
            name: "Bloc",
            deployedLink: "https://the-bloc.herokuapp.com/",
            githubLink: "https://github.com/jcc83267/Hrd-Cpy",
            imgId: 1
        }, {
            name: "Budget Tracker",
            deployedLink: "https://jcc83267-budget-tracker.herokuapp.com/",
            githubLink: "https://github.com/jcc83267/19-Budget-Tracker",
            imgId: 2
        }, {
            name: "Event Planner",
            deployedLink: "https://jcc83267.github.io/Event-Planner/",
            githubLink: "",
            imgId: 3
        }, {
            name: "Weather Dashboard",
            deployedLink: "https://jcc83267.github.io/06-Weather-Dashboard/",
            githubLink: "https://github.com/jcc83267/06-Weather-Dashboard",
            imgId: 4
        }, {
            name: "Work Day Scheduler",
            deployedLink: "https://jcc83267.github.io/05-Work-Day-Scheduler/",
            githubLink: "https://github.com/jcc83267/05-Work-Day-Scheduler",
            imgId: 5
        }, {
            name: "Runbuddy",
            deployedLink: "https://the-bloc.herokuapp.com/",
            githubLink: "https://jcc83267.github.io/run-buddy/",
            imgId: 6
        }
    ])
    const listProjects = projects.map((project, i) =>
        <div>
            <br/>
            <span><h3>{project.name}</h3>
               
                    <a href={`${project.deployedLink}`} target="_blank" rel="noreferrer">
                        Deployed link
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                        github link
                    </a></span>
                                               
            <div className={`project${i} divBG`}></div>
            <br/>
        </div>
    )
    console.log(projects[1].name)
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="portfolioBox">
                {listProjects}
            </div>
        </div>
    );
}

export default Portfolio