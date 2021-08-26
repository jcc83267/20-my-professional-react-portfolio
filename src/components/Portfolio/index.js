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
            description: "Hello! Welcome to the Bloc. The Bloc is a social media site gamers can flock to and find unbiased and honest game reviews. By searching for a game title, users can view an archive of game reviews written by other Bloc users. They can also choose to write their own thoughts and experiences into their own reviews to be discovered by other Bloc users on their visit. The Bloc also allows for people to follow each other in order to show support towards one another.",
            skills: ['Node, ', 'React, ', 'Apollo, ', 'GraphQL, ', 'Mongo, ', 'JavaScript, ', 'jQuery'],
            imgId: img6
        }, {
            name: "Bloc",
            deployedLink: "https://bloc-v1.herokuapp.com/",
            githubLink: "https://github.com/jcc83267/Hrd-Cpy",
            description: "Our goal is to create an application that allows gamers to share their thoughts and opinions on video game titles with peers. Bloc provides a platform for gamers to write reviews available to others who are curious or looking to purchase a game.",
            skills: ['Bootstrap, ', 'JQuery, ', 'bcrypt, ', 'connect-session-sequelize, ', '.env, ', 'express, ', 'express handlebars, ', 'express session, ', 'mysql2, ', 'node fetch, ', 'path, ', 'sequelize, ', 'jest, ', 'nodemailer'],
            imgId: img0
        }, {
            name: "Budget Tracker",
            deployedLink: "https://jcc83267-budget-tracker.herokuapp.com/",
            githubLink: "https://github.com/jcc83267/19-Budget-Tracker",
            description: "This is a Progressive Web Application(PWA) project that will track a persons budget. This site gives the user a fast and easy way to track their money whether they're connected to the internet or not.",
            skills: ['JavaScript, ','MongoDB, ','Node, ','Express, ','Mongoose, ','IndexedBD, ','Service Worker'],
            imgId: img1
        }, {
            name: "Event Planner",
            deployedLink: "https://jcc83267.github.io/Event-Planner/",
            githubLink: "https://github.com/jcc83267/Event-Planner",
            description: "Pulling two API's this website allows the user to search nearby restaurants and events. The user is able to either manually input a zipcode of their choice, or click a button that grabs their location's zipcode for them. Five choices of restaurants and events show up giving the user multiple options to decide within their tastes.",
            skills: ['HTML, ', 'CSS, ', 'BULMA, ', 'JAVASCRIPT, ', 'JQUERY'],
            imgId: img2
        }, {
            name: "Weather Dashboard",
            deployedLink: "https://jcc83267.github.io/06-Weather-Dashboard/",
            githubLink: "https://github.com/jcc83267/06-Weather-Dashboard",
            description: "A website created to take a city as an input and display the weather today(shows temperature, humidity, wind speed, and uv index) and to show a 5 day forecast(shows basic weather forecast, temperature, and humidity). This also saves past cities searched into local storage",
            skills: ['HTML, ','CSS, ','JavaScript, ','Bootstrap, ','moment.js'],
            imgId: img3
        }, {
            name: "Work Day Scheduler",
            deployedLink: "https://jcc83267.github.io/05-Work-Day-Scheduler/",
            githubLink: "https://github.com/jcc83267/05-Work-Day-Scheduler",
            description: "A website created to Schedule a typical work day hours(8am-5pm).",
            skills: ['HTML, ','CSS, ','JavaScript, ','Bootstrap, ', 'JQuery, ','moment.js'],
            imgId: img4
        }, //{
        //     name: "Runbuddy",
        //     deployedLink: "https://the-bloc.herokuapp.com/",
        //     githubLink: "https://jcc83267.github.io/run-buddy/",
        //     description: "",
        //     skills: "",
        //     imgId: img5
        // }
    ])
    const listProjects = projects.map((project, i) =>
        <div>
            <br />
            <span><h3>{project.name}</h3>

                <a href={`${project.deployedLink}`} target="_blank" rel="noreferrer">
                    -Deployed Link
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                    -Github Link
                </a></span>
                <p>Built With: {project.skills}</p>
                <p className='description-text'>{project.description}</p>

            <div className='divBG'
                style={{
                    backgroundImage: `url(${project.imgId})`
                }}
                onClick={() => window.open(`${project.deployedLink}`, "_blank")}
            ></div>
            <br />
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