import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jonghan</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/jonghan-park"><FaGithubSquare /></a>
        <a href="https://www.linkedin.com/in/jonghan-park/"><FaLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jonghan Park. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer