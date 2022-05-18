import React from 'react';
import CTA from './CTA';
import './Header.css';
import NS from '../../assets/ns.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello ! I'm</h5>
        <h1>Nimit Soni</h1>
        <h5 className="text-light">A Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={NS} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

        
      </div>
    {/*<div>
      https://www.youtube.com/watch?v=G-Cr00UYokU&list=WL&index=36
      <br/>
      2.19.00
    </div>*/}
    </header>
  )
}

export default Header