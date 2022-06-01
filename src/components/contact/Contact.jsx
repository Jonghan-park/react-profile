import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineEmail />
            <h4>Email</h4>
            <h5>jonghan.park@edu.sait.ca</h5>
            <a href="mailto:jonghan.park@edu.sait.ca" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
          <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+1 (825)712-1504</h5>
            <a href="https://api.whatsapp.com/send?phone=18257121504" target="_blank">Send a message</a>
          </article>
          <div>
            <form action="">
              <input type="text" name='name' placeholder='Your Full Name' required />
              <input type="email" name='email' placeholder='Your Email' required />
              <textarea name="message" rows="7" placeholder='Your Message' required />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact