import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/profile1.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: 'Simon',
    review: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia minus temporibus, explicabo esse sapiente pariatur quo odit. Sequi sed est excepturi labore. Porro aut necessitatibus doloribus nemo iure doloremque aspernatur?'
  },
  {
    avatar: AVTR1,
    name: 'Simon',
    review: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia minus temporibus, explicabo esse sapiente pariatur quo odit. Sequi sed est excepturi labore. Porro aut necessitatibus doloribus nemo iure doloremque aspernatur?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({avatar, name, review}, index) => {
          return (
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="profile picture" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
             {review}
            </small>
        </SwiperSlide>
        )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials