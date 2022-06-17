import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG7 from '../../assets/portfolio7.png'
import IMG8 from '../../assets/portfolio8.png'
import IMG9 from '../../assets/empty-image.png'

const data = [
  {
    id: 1,
    image: IMG8,
    title: 'CB Drive inn(Restaurant app with a client) ',
    skills: 'React, HTML, CSS',
    body: 'The project used React hooks useState and useEffect, and the purpose of the project is to accomplish client’s requirement which motivates customers to be interested in the restaurant. The customer can visit the web application to explorer menus and some info in terms of the restaurant. (Updating back-end features in progress)',
    demo: 'https://cb-drive-inn.netlify.app/',
  },{
    id: 2,
    image: IMG7,
    title: 'Medical appointment system',
    skills: 'HTML, CSS, MySQL, JSP/Servlet, AWS(EC2, S3, RDS)',
    body: 'This is the project which is used JSP/Servlet, HTML, CSS, Bootstrap and MySql. (Detail will be added)',
    github: 'https://github.com/Jonghan-park/Medical-appointment-system',
  },{
    id: 3,
  image: IMG1,
  title: 'Fruits',
  skills: 'React, HTML, CSS',
  body: 'The project used React hooks useState. Each item is loaded from data.js which has 4 different kinds of fruits including id, name, quantities and image and displays on a form from a list component.',
  github: 'https://github.com/Jonghan-park/fruit-basket',
  demo: 'https://jonghan-fruit.netlify.app/',
  },{
    id: 4,
    image: IMG3,
    title: 'Reviews',
    skills: 'React, HTML, CSS',
    body: 'This is the project for getting used to useState. data is loaded from a data class.(Detail will be added)',
    github: 'https://github.com/Jonghan-park/reviews',
  },{
    id: 7,
    image: IMG9,
    title: 'Project Manager - MERN(Full-stack) // In progress',
    body: 'This is the project which is used React, Node.js, Express and MongoDB for getting used to Full-stack development (Detail will be added)',
    github: 'https://github.com/Jonghan-park/mern-project-manager',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
        data.map(({id, image, title, skills, body, github, demo})=>{
          return(
            <article key={id} className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={image} alt="image1" />
          </div>
          <h3>{title} - {skills}</h3>
          <h4>{body}</h4>
          <br />
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target="_blank">Github</a>
            <a href={demo} className='btn' target="_blank">Demo</a>
          </div>
        </article>
          )
        })
        }
      </div>
    </section>
  )
}

export default Portfolio