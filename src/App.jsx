import "./styles/globals.css"
import Navbar from "./components/Navbar.jsx";
import Greeting from "./components/Greeting.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Information from "./components/Information.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
        <Navbar />
        <div className="main-container ">
            <Greeting />
            <AboutMe />
            <Information />
            <Footer />
        </div>

    </>
  )
}

export default App
