import "./styles/globals.css"
import Navbar from "./components/Navbar.jsx";
import Greeting from "./components/Greeting.jsx";
import AboutMe from "./components/AboutMe.jsx";

function App() {

  return (
    <>
        <Navbar />
        <div className="main-container ">
            <Greeting />
            <AboutMe />
        </div>

    </>
  )
}

export default App
