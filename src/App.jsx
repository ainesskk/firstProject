import "./styles/globals.css"
import Navbar from "./components/Navbar.jsx";
import Greeting from "./components/Greeting.jsx";

function App() {

  return (
    <>
        <Navbar />
        <div className="main-container">
            <Greeting />
        </div>

    </>
  )
}

export default App
