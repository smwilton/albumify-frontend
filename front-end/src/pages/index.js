
import BurgerMenu from '../components/BurgerMenu'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import CardMain from '../components/CardMain'
import Footer from '../components/Footer'
import Helmet from 'react-helmet'
import {useState} from 'react';
 /*setting true to false to true... toggling it}*/
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
    <>
    <Helmet>Albumify Home</Helmet>
    <BurgerMenu isOpen={isOpen} toggle={toggle}/> {/*passing function in so that it works*/}
    <Navbar toggle={toggle}/>
    <HeroSection />
    <CardMain />
   
   <Footer />
    </>
    );
}

export default Home;
