import {StrictMode } from "react"; 
import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/home";
import MyJourney from "./pages/myjourney";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import selfieImg from "./assets/selfie.jpeg";

function App () {

  return (


    <>
      <title>Shanti Ink Tattoo v1</title>
      <div className="onimask">
        <header>
          <h1>Shanti Ink</h1>
          <h3>Tattoo</h3>
          <p>Brighton local Independent Artist &amp; Stick and Poke Professional</p>
        </header>
        <div className="index">
          <nav>
            <article id="index">
                <p className="home">
                <Link to="/">Home</Link>
              </p>
              <p className="myjourney">
                <Link to="/myjourney">My Journey</Link>
              </p>
              <p className="portfolio">
                <Link to="/portfolio">Portfolio</Link>
              </p>
              <p className="contact">
                <Link to="/contact">Contact</Link>
              </p>
            </article>
          </nav>
        </div>
    
         <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myjourney" element={<MyJourney />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </main>
      </div>
      <footer>
        <p>ShantiInk Copyright © Louanei 2026</p>
      </footer>
    </>
  )
}

export default App
