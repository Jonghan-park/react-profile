import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const data = [
  {
    id: 1,
  image: IMG1,
  title: 'Fruits',
  github: 'https://github.com/Jonghan-park/fruit-basket',
  },
  {
    id: 2,
    image: IMG2,
    title: 'News',
    github: 'https://github.com/Jonghan-park/news',
  },{
    id: 3,
    image: IMG3,
    title: 'Reviews',
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
        data.map(({id, image, title, github})=>{
          return(
            <article key={id} className="portfolio__items">
          <div className="portfolio__item-image">
            <img src={image} alt="image1" />
          </div>
          <h3>{title}</h3>
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