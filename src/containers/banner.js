import React, { useState } from 'react';
import LogoHtml from '../assets/htmlLogo.webp';
import LogoCss from '../assets/cssLogo.webp';
import LogoJs from '../assets/jsLogo.webp';
import LogoSass from '../assets/sassLogo.webp';
import LogoReact from '../assets/reactLogo.webp';
import Popup from '../components/popup';
import programmingLanguages from '../data/languagesArray';

function Banner() {
  const [htmlImageScale, setHtmlImageScale] = useState(1);
  const [cssImageScale, setCssImageScale] = useState(1);
  const [jsImageScale, setJsImageScale] = useState(1);
  const [sassImageScale, setSassImageScale] = useState(1);
  const [reactImageScale, setReactImageScale] = useState(1);

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleMouseEnter = (image, setScale) => {
    setScale(1.1);
  }

  const handleMouseLeave = (image, setScale) => {
    setScale(1);
  }

  const openPopup = () => {
    setIsOpenPopup(true);
  }

  const closePopup = () => {
    setIsOpenPopup(false);
  }

  return (
    <div className='banner' id='index'>
      <div className='bannerTextImg'>
        <div className='bannerText'>
            <h1 className='bannerTextTitle'>Développeur Web <br/> Intégrateur</h1>
            <p className='bannerTextAbout'>Bonjour, je m'appelle Dylan. <br/> Je suis développeur Front-end React Junior.</p>
        </div>
        <div className='memojiImg'>

        </div>
      </div>
      <div className='bannerSkills'>
        <p className='bannerSkillsTitle'>Mes compétences <br/> (Cliquez pour plus d'infos) </p>
        <div className='bannerSkillsLogos'>
          <div className='bannerSkillsLogos1'>
            <img
              className='htmlLogo logo'
              src={LogoHtml}
              alt='Logo HTML'
              onMouseEnter={() => handleMouseEnter(programmingLanguages[0], setHtmlImageScale)}
              onMouseLeave={() => handleMouseLeave('html', setHtmlImageScale)}
              style={{ transform: `scale(${htmlImageScale})` }}
              onClick={() => {
                setSelectedLanguage(programmingLanguages[0]);
                openPopup();
              }}
            />
            <img
              className='cssLogo logo'
              src={LogoCss}
              alt='Logo CSS'
              onMouseEnter={() => handleMouseEnter(programmingLanguages[1], setCssImageScale)}
              onMouseLeave={() => handleMouseLeave('css', setCssImageScale)}
              style={{ transform: `scale(${cssImageScale})` }}
              onClick={() => {
                setSelectedLanguage(programmingLanguages[1]);
                openPopup();
              }}
            />
            <img
              className='jsLogo logo'
              src={LogoJs}
              alt='Logo JavaScript'
              onMouseEnter={() => handleMouseEnter(programmingLanguages[2], setJsImageScale)}
              onMouseLeave={() => handleMouseLeave('js', setJsImageScale)}
              style={{ transform: `scale(${jsImageScale})` }}
              onClick={() => {
                setSelectedLanguage(programmingLanguages[2]);
                openPopup();
              }}
            />
          </div>
          <div className='bannerSkillsLogos2'>
            <img
              className='sassLogo logo'
              src={LogoSass}
              alt='Logo SASS'
              onMouseEnter={() => handleMouseEnter(programmingLanguages[3], setSassImageScale)}
              onMouseLeave={() => handleMouseLeave('sass', setSassImageScale)}
              style={{ transform: `scale(${sassImageScale})` }}
              onClick={() => {
                setSelectedLanguage(programmingLanguages[3]);
                openPopup();
              }}
            />
            <img
              className='reactLogo logo'
              src={LogoReact}
              alt='Logo React'
              onMouseEnter={() => handleMouseEnter(programmingLanguages[4], setReactImageScale)}
              onMouseLeave={() => handleMouseLeave('react', setReactImageScale)}
              style={{ transform: `scale(${reactImageScale})` }}
              onClick={() => {
                setSelectedLanguage(programmingLanguages[4]);
                openPopup();
              }}
            />
          </div>
        </div>
      </div>
      {isOpenPopup && selectedLanguage && (
        <Popup
          setIsOpenPopup={closePopup}
          title={selectedLanguage.title}
          description={selectedLanguage.description}
        />
      )}

    </div>
  );
}

export default Banner;
