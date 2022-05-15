import React from 'react'
import {BsTwitter} from  'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://twitter.com" target="_blank"><BsTwitter /></a>
        <a href="https://github.com" target="_blank"><BsGithub /></a>
        <a href="https://dribble.com" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials