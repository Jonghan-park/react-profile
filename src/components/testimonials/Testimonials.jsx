import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/profile1.png'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="profile picture" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia minus temporibus, explicabo esse sapiente pariatur quo odit. Sequi sed est excepturi labore. Porro aut necessitatibus doloribus nemo iure doloremque aspernatur?
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials