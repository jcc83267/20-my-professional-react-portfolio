import React from 'react'

function Resume() {
    return (
        <section id="resume">
            <h1>RESUME</h1>
            <h2>Links</h2>
            <a href='https://docs.google.com/document/d/1j70liyjAmyYhZi7nocstKTIvebQatJL3iLviNn8Amu0/edit?usp=sharing' target="_blank" rel="noreferrer">
                Resume Link
            </a>
            <h2>Front-end Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>javaScript</li>
                <li>jQuery</li>
                <li>responisive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h2>Back-end Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySql, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
            </ul>
        </section>
    );
}

export default Resume