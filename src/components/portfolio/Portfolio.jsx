import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const data = [
  {
    id: 1,
  image: IMG1,
  title: 'Fruits - React(useState)',
  body: 'This is the project for getting used to useState. A data has fruits, and data is mapped in a list class.',
  github: 'https://github.com/Jonghan-park/fruit-basket',
  },
  {
    id: 2,
    image: IMG2,
    title: 'News',
    body: 'This is the project for getting used to useState and useEffect. News is loaded from news api source.',
    github: 'https://github.com/Jonghan-park/news',
  },{
    id: 3,
    image: IMG3,
    title: 'Reviews',
    body: 'This is the project for getting used to useState and useEffect. News is loaded from news api source.',
    github: 'https://github.com/Jonghan-park/reviews',
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