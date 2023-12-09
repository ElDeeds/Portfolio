import Header from '../containers/header'
import Footer from '../containers/footer'
import Banner from '../containers/banner'
import Projets from '../containers/projets'
import About from '../containers/about'
import Contact from '../containers/contact'



function Index() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Projets />
      <Contact />
      <Footer /> 
    </>
  );
}
  
export default Index