import React, { useState } from 'react'
import img0 from '../../assets/images/website-screenshots/0.png.png'
import img1 from '../../assets/images/website-screenshots/1.png.png'
import img2 from '../../assets/images/website-screenshots/2.png.png'
import img3 from '../../assets/images/website-screenshots/3.png.png'
import img4 from '../../assets/images/website-screenshots/4.png.png'
import img5 from '../../assets/images/website-screenshots/5.png.png'
import img6 from '../../assets/images/website-screenshots/6.png.png'

function Portfolio() {
    const [projects] = useState([
        {
            name: "The Bloc(complete overhaul of Bloc)",
            deployedLink: "https://the-bloc.herokuapp.com/",
            githubLink: "https://github.com/jmrendon48/bloc-2.0",
            imgId: img6
        },{
            name: "Bloc",
            deployedLink: "https://bloc-v1.herokuapp.com/",
            githubLink: "https://github.com/jcc83267/Hrd-Cpy",
            imgId: img0
        }, {
            name: "Budget Tracker",
            deployedLink: "https://jcc83267-budget-tracker.herokuapp.com/",
            githubLink: "https://github.com/jcc83267/19-Budget-Tracker",
            imgId: img1
        }, {
            name: "Event Planner",
            deployedLink: "https://jcc83267.github.io/Event-Planner/",
            githubLink: "",
            imgId: img2
        }, {
            name: "Weather Dashboard",
            deployedLink: "https://jcc83267.github.io/06-Weather-Dashboard/",
            githubLink: "https://github.com/jcc83267/06-Weather-Dashboard",
            imgId: img3
        }, {
            name: "Work Day Scheduler",
            deployedLink: "https://jcc83267.github.io/05-Work-Day-Scheduler/",
            githubLink: "https://github.com/jcc83267/05-Work-Day-Scheduler",
            imgId: img4
        }, {
            name: "Runbuddy",
            deployedLink: "https://the-bloc.herokuapp.com/",
            githubLink: "https://jcc83267.github.io/run-buddy/",
            imgId: img5
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
                                               
            <div className='divBG'
            style={{
                backgroundImage: `url(${project.imgId})`
            }}
            onClick={()=> window.open(`${project.deployedLink}`, "_blank")}
            ></div>
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