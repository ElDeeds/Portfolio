import GitHubLogo from '../assets/gitHubLogo.webp';

function Footer() {
    return  (
        <footer className="footer">
        <div className="footerText">
            <p>Copyright © 2023. Tous droits réservés</p>
          </div>
          <a className='gitLink' href='https://github.com/ElDeeds' target="_blank" rel='noreferrer'><img className='gitLogo' src={GitHubLogo} alt='Logo gitHub'/></a>
        </footer>
      );
    }
    

export default Footer;