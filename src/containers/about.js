import AboutImg from '../assets/aboutImg.webp'

function about() {

  
    return (
    <div className="aboutContainer" id="about">
        <h2 className="aboutContainerTitle">À PROPOS DE MOI</h2>
            <div className="aboutContainerTextImg">
                <img src={AboutImg} className='aboutContainerImg' alt='Illustration homme sur son ordinateur'></img>
                    <div className='aboutContainerText'>
                        <h3>Je suis développeur Front End basé à Nice, France 📍</h3>
                        <p>Mon aventure dans le monde du développement web a débuté en autodidacte, où j'ai exploré la création de sites, notamment en utilisant WordPress.<br/><br/>
                        Pour parfaire mes connaissances et obtenir une base solide, j'ai choisi de me former avec OpenClassroom. Cette expérience m'a fourni les bases nécessaires pour maîtriser les technologies web, la programmation, et l'intégration web.<br/><br/>
                        Je suis motivé par mon désir de rester à la pointe de la technologie et de créer des expériences web captivantes et plaisantes.</p>
                    </div>    
            </div>
    </div> 
    );
  }
  
  export default about;