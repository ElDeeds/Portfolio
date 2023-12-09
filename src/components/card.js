import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { /*faCode,*/ faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Card({ project }) {
  const { image, title, description, languages, /*codeLink,*/ siteLink, languageLogos } = project;
  

  return (
    <div className="card">
      <div className='cardImg'>
        <div className='cardImgContainer'>
          <img src={image} alt={`Aperçu du site ${title}`} loading="lazy"/>
        </div>
      </div>
      <div className="cardContent">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className='cardContentTechTitle'>
          <h3 className='cardContentTitle'>Compétences utilisées</h3>
        </div>
        <div className='cardContentTech'>
          {languageLogos.map((logo, index) => (
            <img className='languageLogos' src={logo} alt={`Logo ${languages[index]}`} key={languages[index]} />
          ))}
        </div>
        <div className='cardContentLinks'>
          {/* <a href={codeLink} target="_blank" rel='noreferrer'>Code <FontAwesomeIcon className='cardIcon' icon={faCode} /></a> */}
          <a href={siteLink} target="_blank" rel='noreferrer'>Demo live <FontAwesomeIcon className='cardIcon' icon={faArrowUpRightFromSquare} /></a>
        </div>
      </div>
    </div>
  );
}

export default Card;
