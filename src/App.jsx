import "./styles/globals.css"
import { Element } from 'react-scroll';
import Navbar from "./components/Navbar.jsx";
import Greeting from "./components/Greeting.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Information from "./components/Information.jsx";
import Footer from "./components/Footer.jsx";
import ContactMe from "./components/ContactMe.jsx";

function App() {

  return (
    <>
        <Navbar />
        <div className="main-container ">
            <Greeting />
            <Element name="aboutme">
                <AboutMe />
            </Element>
            <Information />
        </div>
        <Element name="contactme">
            <ContactMe />
        </Element>
        <Footer />
    </>
  )
}

export default App
