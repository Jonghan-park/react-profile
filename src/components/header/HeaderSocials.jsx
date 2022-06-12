import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/jonghan-park/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/Jonghan-park" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials