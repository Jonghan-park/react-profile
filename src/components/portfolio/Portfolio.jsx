import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="image1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/Jonghan-park" className='btn' target="_blank">Github</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio