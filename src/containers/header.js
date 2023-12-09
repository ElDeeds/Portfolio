import React, { useState } from 'react';
import DeedsLogo from '../assets/logoDeeds.webp';

function Header() {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const openSidenav = () => {
    setIsSidenavOpen(true);
  };

  const closeSidenav = () => {
    setIsSidenavOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeSidenav(); // Fermez la navigation latérale si elle est ouverte
    }
  };

  return (
    <>
    <header>
      <nav className="mainNav">
        <a href='#index'><img className="mainNavLogo" src={DeedsLogo} alt='Logo Deeds' /></a>
        <ul className="mainNavMenu">
          <li href="#index" onClick={() => scrollToSection('index')}>Accueil</li>
          <li onClick={() => scrollToSection('projects')}>Projets</li>
          <li href="#about" onClick={() => scrollToSection('about')}>A propos</li>
          <li href="#contact" onClick={() => scrollToSection('contact')}>Contact</li>
          
        </ul>

        <span className="sidenavTrigger" onClick={openSidenav}>&#9776;</span>
        <div className={`sidenav mobile ${isSidenavOpen ? 'open' : ''}`}>
          <p href="#" className="closebtn" onClick={closeSidenav}>&times;</p>
          <a href="#index" onClick={closeSidenav}>Accueil</a>
          <a href="#projects" onClick={closeSidenav}>Projets</a>
          <a href="#about" onClick={closeSidenav}>A propos</a>
          <a href="#contact" onClick={closeSidenav}>Contact</a>
        </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
