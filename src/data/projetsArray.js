import LogoHtml from '../assets/htmlLogo.webp';
import LogoCss from '../assets/cssLogo.webp';
import LogoJs from '../assets/jsLogo.webp';
import LogoSass from '../assets/sassLogo.webp';
import LogoReact from '../assets/reactLogo.webp';
import KasaImg from '../assets/kasaImg.webp';
import NinaImg from '../assets/ninaImg.webp';
import OmfImg from '../assets/omfImg.webp';
import SophieImg from '../assets/sophieBluelImg.webp';

const projets = [
  {
    "id": 1,
    "image": KasaImg,
    "title": "Kasa",
    "description": "Un site de location d'hébergement pour particuliers partout dans le monde. Chaque hébergement a sa page d'informations.",
    "languages": ["React", "SASS"],

    "siteLink": "https://eldeeds.github.io/kasa/",
    "languageLogos": [LogoReact, LogoSass]
  },
  {
    "id": 2,
    "image": OmfImg,
    "title": "ohmyfood",
    "description": "Un site pour faciliter les réservations de restaurant des clients. Chaque restaurant propose un menu sur une page personnalisée.",
    "languages": ["HTML", "SASS"],

    "siteLink": "https://eldeeds.github.io/Projet4-OhmyFood/index.html",
    "languageLogos": [LogoHtml, LogoSass]
  },
  {
    "id": 3,
    "image": NinaImg,
    "title": "Portfolio Nina",
    "description": "Réalisation de l'optimisations des performances, de l'accessibilité et du référencement local du site d'une photographe.",
    "languages": ["HTML", "CSS", "Javascript"],

    "siteLink": "https://eldeeds.github.io/NinaCarducci/",
    "languageLogos": [LogoHtml, LogoCss, LogoJs]
  },
  {
    "id": 4,
    "image": SophieImg,
    "title": "Portfolio Sophie",
    "description": "Dynamisation du site grâce à JavaScript, avec intégration des projets depuis une base de données et mise en place d'un mode administrateur.",
    "languages": ["HTML", "CSS", "Javascript"],

    "siteLink": "https://eldeeds.github.io/FrontEnd-Bluel/",
    "languageLogos": [LogoHtml, LogoCss, LogoJs]
  }
];

export default projets;
