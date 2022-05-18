import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
    github: 'https://github.com/',
    demo:'https://picsum.photos/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Adipisicing consectetur adipisicing elit',
    github: 'https://github.com/',
    demo:'https://picsum.photos/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
    github: 'https://github.com/',
    demo:'https://picsum.photos/'
  },
  {
    id:4,
    image: IMG4,
    title: 'Adipisicing sit, amet consectetur  elit',
    github: 'https://github.com/',
    demo:'https://picsum.photos/'
  },
  {
    id:5,
    image: IMG5,
    title: 'Consectetur lorem ipsum dolor sit, amet consectetur adipisicing elit',
    github: 'https://github.com/',
    demo:'https://picsum.photos/'
  },
  {
    id:6,
    image: IMG6,
    title: 'Consectetur dolor sit, amet adipisicing elit',
    github: 'https://github.com/',
    demo:'https://picsum.photos/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <p>Below are just dummy content to show React Data pulling functionality.</p>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a></div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio