import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill />
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">

        </div>
      </div>
    </section> 
  )
}

export default Experience