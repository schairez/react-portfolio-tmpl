import React from 'react';
import './Footer.css'

import githubLogo from '../../assets/icons/github.svg'
import linkedinLogo from '../../assets/icons/linkedin.svg'
import twitterLogo from '../../assets/icons/twitter.svg'

interface FooterProps {
    github?: string;
    linkedin?: string;
    twitter?: string;
}


const Footer: React.FC<FooterProps> = ({github, linkedin, twitter}) => {
    return (
        <footer id="footer">
        <div className="icons">
        <a href="https://github.com/schairez"><img src={githubLogo} alt="github logo"/></a>
        <a href="https://linkedin.com/in/sergiochairez"><img src={linkedinLogo} alt="linkedin logo"/></a>
        <a href="https://twitter.com/sergii_chairez"><img src={twitterLogo} alt=""/></a>
        </div>

        </footer>
);

}; 






export default Footer;