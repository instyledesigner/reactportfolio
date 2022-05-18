import React from 'react';
import './About.css';
import ME from '../../assets/ns-with-bg.png';
import { FaAward, FaUsers, FaFolderPlus } from 'react-icons/fa';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Nimit Soni" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>15+ Years Working</small>
            </article>

            <article className="about__card">
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>1500+ Worldwide</small>
            </article>

            <article className="about__card">
              <FaFolderPlus className='about__icon' />
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>
          </div>

          <p>
          My name is Nimit Soni. I am a Frontend Website Designer & Developer. I have good command and experience in the field of web design and developing, Adobe Photoshop, Adobe XD, HTML, CSS, SASS, JS/jQuery, Bootstrap, Gulp, GIT, Responsive Website Designing and Developing, Client service and communications, Client’s requirement estimating, Working as per client’s requirement with no or minimum iterations, Web Site speed testing, Web Site Security testing, Adding GA/GTMs, Onetrust Cookie Management, Worked on CMS like Sitecore/Drupal/Wordpress, React, React Material UI.</p>

          <p>I have a Bachelor of Commerce (B.Com) and Advance Diploma in Multimedia degrees from Maharaja Sayajirao University and Arena Multimedia – Aptech Ltd. respectively, both from Gujarat - India and have more than 15 years of experience as a Web Site Designer and Developer.</p>

          <p>In my most recent role, I have achieved many certificates and appreciations for Quality work, Speedy delivery and Team player. I have been in my current company for 9+ years till date started as Web Producer promoted to Sr. Web Producer and to a Build Delivery Team Lead handling team of 3 members 1 QA and 1 Project Manager, later promoted to Sitecore CMS Service team Sr. Web Producer than Service Team Lead handling team of 6 members working in different shifts covering 24 hours 365 days. Finally, as career progression moved to Drupal CMS Service team.</p>

<p>In this React portfolio I have tried to work and show things I know in React like:
</p>
<ul>
  <li><BsFillPatchCheckFill className='about__details-icon' /> Hooks</li>
  <li><BsFillPatchCheckFill className='about__details-icon' /> Form</li>
  <li><BsFillPatchCheckFill className='about__details-icon' /> Icons</li>
  <li><BsFillPatchCheckFill className='about__details-icon' /> Data pulling</li>
  <li><BsFillPatchCheckFill className='about__details-icon' /> Flex & Grid</li>
  <li><BsFillPatchCheckFill className='about__details-icon' /> Carousel</li>
  <li><BsFillPatchCheckFill className='about__details-icon' /> Email Functionality</li>
</ul>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About