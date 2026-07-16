import {StrictMode } from "react"; 
import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/home";
import MyJourney from "./pages/myjourney";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import selfieImg from "./assets/selfie.jpeg";

import "./App.css";

function Header () {
  return (
    <header>
          <h1>Shanti Ink</h1>
          <h3>Tattoo</h3>
          <p>Brighton local Independent Artist &amp; Stick and Poke Professional</p>
 </header>
  )
  };


  function MenuLinks ({ to, label, className }) {
    return (
      <p className={className}>
        <Link to={to}>{label}</Link>
      </p>
    );
  }

function App () {

  return (


    <>
      <title>Shanti Ink Tattoo v1</title>
      <div className="onimask">
<Header/>
        <div className="index">
          <nav>
            <article id="index">
              <MenuLinks to="/" label="Home" className="home" />
              <MenuLinks to="/myjourney" label="My Journey" className="myjourney" />
              <MenuLinks to="/portfolio" label="Portfolio" className="portfolio" />
              <MenuLinks to="/shop" label="Shop" className="shop" />
              <MenuLinks to="/contact" label="Contact" className="contact" />
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
       <p className="tc"><Link to="/Terms and Conditions">Terms and Conditions</Link></p>
       <p className="pp"><Link to="/Privacy and Policies">Privacy and Policies</Link></p>
      </footer>
    </>
  )
}


export default App
