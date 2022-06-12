import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward, FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about__icon"></FaAward>
              <h5>Diploma</h5>
              <small>Completed software development course</small>
            </article>
            <article className='about__card'>
              <FaUsers className="about__icon"></FaUsers>
              <h5>Clients</h5>
              <small>1 Client</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className="about__icon"></VscFolderLibrary>
              <h5>Side Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>Passionate of learning full-stack development. Experienced with school projects and assignments made with various programming languages. Knowledge in numerous programming languages including JAVA, JavaScript, HTML, CSS, Bootstrap, SQL, PL/SQL, JSP/SERVLET. </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About