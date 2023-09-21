import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
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
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End </h2>
                        <span>
                            ReactJS, HTML, CSS, Bootstrap
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Back-End </h2>
                        <span>Java</span>
                    </li>
                    <li className='item'>
                        <h2>Programming Languages </h2>
                        <span>Python, JavaScript, C++, Java</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;
