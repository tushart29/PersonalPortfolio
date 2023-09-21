import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css"
function Footer() {
    const linkedInURL = 'https://www.linkedin.com/in/tushartho/';
    const githubURL = 'https://github.com/tushart29';
    const emailUrl = 'mailto:tushar.thonupunoori@gmail.com'; // Add 'mailto:' to create an email link

    return (
        <div className='footer'>

            <div className='socialMedia'>
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
    )
}

export default Footer
