import React from 'react'
import './Projects.css'
import ll from '../../assets/img/littleLearners.png';
import Flora from '../../assets/img/Flora.png';
import CrudSys from '../../assets/img/CrudsSystem.png';
import blondi from '../../assets/img/Blondi.png'
import TeaShop from '../../assets/img/TeaShopLandingPage.png';
import Medico from '../../assets/img/Medico.png';
export default function Projects() {
  const portfolioData = [
    {
      id: 1,
      image: ll,
      title: 'Little Learners',
      github: 'https://github.com/WajdMHeshme/Little-Learners.git',
      demo: 'https://wajdmheshme.github.io/Little-Learners/',
      dataAos: "fade-right"
    },
    {
      id: 2,
      image: Flora,
      title: 'Flora',
      github: 'https://github.com/WajdMHeshme/Task4_Adv_Flora.git',
      demo: 'https://wajdmheshme.github.io/Task4_Adv_Flora/',
      dataAos: "fade-up"
    },
    {
      id: 3,
      image: CrudSys,
      title: 'Cruds System',
      github: 'https://github.com/WajdMHeshme/CRUD-system.git',
      demo: 'https://wajdmheshme.github.io/CRUD-system/',
      dataAos: "fade-left"
    },
    {
      id: 4,
      image: blondi,
      title: 'Bondi',
      github: 'https://github.com/WajdMHeshme/Blondi-template.git',
      demo: 'https://wajdmheshme.github.io/Blondi-template/',
      dataAos: "fade-right"
    },
    {
      id: 5,
      image: TeaShop,
      title: 'Tea Shop',
      github: 'https://github.com/WajdMHeshme/Tea-shop.git',
      demo: 'https://wajdmheshme.github.io/Tea-shop/',
      dataAos: "fade-up"
    },
    {
      id: 6,
      image: Medico,
      title: 'Crud System',
      github: 'https://github.com/WajdMHeshme/MEDICIO.git',
      demo: 'https://wajdmheshme.github.io/MEDICIO/',
      dataAos: "fade-left"
    }
  ];

  return (
    <section id='projects' className='projects'>
      <div className='top-section'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container projects-container">
        {
          portfolioData.map(({ id, image, title, github, demo , dataAos }) => (
            <article data-aos= {dataAos} key={id} className='portfolio-item'>
              <div className='portfolio-item-img'>
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className='portfolio-item-btns'>
                <a href={github} target='_blank' className='btn'>Github</a>
                <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}