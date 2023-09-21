import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css"
function Footer() {
    const linkedInURL = 'https://www.linkedin.com/in/tushartho/';
    const githubURL = 'https://github.com/tushart29';
    return (
        <div className='footer'>

            <div className='socialMedia'>
                <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href={githubURL} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
            </div>

        </div>
    )
}

export default Footer
