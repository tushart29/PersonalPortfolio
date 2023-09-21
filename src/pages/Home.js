import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import cplus from '../assets/images/c++.png'
import css from '../assets/images/css-3.png'
import flask from '../assets/images/flask.png'
import html from '../assets/images/html.png'
import java from '../assets/images/java.png'
import js from '../assets/images/js.png'
import python from '../assets/images/python.png'
import react from '../assets/images/react.png'

import '../styles/Home.css';

function Home() {
    // Define the LinkedIn and GitHub profile URLs
    const linkedInURL = 'https://www.linkedin.com/in/tushartho/';
    const githubURL = 'https://github.com/tushart29';
    const emailUrl = 'mailto:tushar.thonupunoori@gmail.com'; // Add 'mailto:' to create an email link

    return (
        <div className='home'>
            <div className='about'>
                <h2>Hi, My Name is Tushar</h2>
                <div className='prompt'>
                    <p className='aboutMy'>
                        I am studying Computer Science at the University of Washington
                    </p>
                    {/* Add anchor tags for the LinkedIn, GitHub, and Email icons */}
                    <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                    </a>
                    <a href={githubURL} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>
                    <a href={emailUrl} target="_blank" rel="noopener noreferrer">
                        <EmailIcon />
                    </a>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <div className='icon-row'>
                    <div className='icon-container'>
                        <img src={react} alt="React" />
                        <span>React</span>
                    </div>
                    <div className='icon-container'>
                        <img src={python} alt="Python" />
                        <span>Python</span>
                    </div>
                    <div className='icon-container'>
                        <img src={js} alt="JavaScript" />
                        <span>JavaScript</span>
                    </div>
                    <div className='icon-container'>
                        <img src={css} alt="CSS" />
                        <span>CSS</span>
                    </div>
                    <div className='icon-container'>
                        <img src={html} alt="HTML" />
                        <span>HTML</span>
                    </div>
                    <div className='icon-container'>
                        <img src={java} alt="Java" />
                        <span>Java</span>
                    </div>
                    <div className='icon-container'>
                        <img src={cplus} alt="C++" />
                        <span>C++</span>
                    </div>
                    <div className='icon-container'>
                        <img src={flask} alt="Flask" />
                        <span>Flask</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
