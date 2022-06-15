import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
  image: IMG1,
  title: 'Fruits - React(useState)',
  body: 'This is the project for getting used to useState. A data has fruits, and data is mapped in a list class.(Detail will be added)',
  github: 'https://github.com/Jonghan-park/fruit-basket',
  },
  {
    id: 2,
    image: IMG2,
    title: 'News - React(useState & useEffect)',
    body: 'This is the project for getting used to useState and useEffect. News is loaded from news api source.(Detail will be added)',
    github: 'https://github.com/Jonghan-park/news',
  },{
    id: 3,
    image: IMG3,
    title: 'Reviews - React(useState)',
    body: 'This is the project for getting used to useState. data is loaded from a data class.(Detail will be added)',
    github: 'https://github.com/Jonghan-park/reviews',
  },{
    id: 4,
    image: IMG4,
    title: 'Pizza Website - React(Front-end)',
    body: 'This is the project for getting used to React front-end job.(Detail will be added)',
    github: 'https://github.com/Jonghan-park/React_pizza/tree/master/front-pizza',
  },{
    id: 5,
    image: IMG5,
    title: 'Restaurant Website - React(Front-end)',
    body: 'This is the project for getting used to React front-end job.(Detail will be added)',
    github: 'https://github.com/Jonghan-park/restaurant-app',
  },{
    id: 6,
    image: IMG6,
    title: 'College Website - HTML and CSS(Front-end)',
    body: 'This is the project for getting used to HTML and CSS (Detail will be added)',
    github: 'https://github.com/Jonghan-park/HTML_University',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
        data.map(({id, image, title, body, github})=>{
          return(
            <article key={id} className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={image} alt="image1" />
          </div>
          <h3>{title}</h3>
          <h4>{body}</h4>
          <br />
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target="_blank">Github</a>
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