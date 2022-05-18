import React from 'react';
import { BsLinkedin, BsGithub, BsDribbble } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/instyledesigner/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/instyledesigner" target='_blank' rel='noreferrer'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials