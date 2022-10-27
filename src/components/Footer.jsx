import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a target='_blank' href="https://www.facebook.com/gio.pkhovelishvili.7/"><FacebookIcon /></a>
            <a target='_blank' href="https://github.com/pxovelaa"><GithubIcon /></a>
            <a target='_blank' href="https://www.linkedin.com/in/giorgi-pkhovelishvili-8b48701a1/"><LinkedInIcon /></a>
        </div>
        <p>&copy; 2022 pxovela.com </p>
    </div>
  )
}

export default Footer;