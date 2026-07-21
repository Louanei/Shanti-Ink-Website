/* WELCOME to the mess space */


/* IMPORTS*/
import {StrictMode } from "react"; 
import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/home";
import MyJourney from "./pages/myjourney";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Shop from "./pages/shop/shop";
import ShopPrints from "./pages/shop/shop-prints";
import ShopTshirts from "./pages/shop/shop-tshirts";
import selfieImg from "./assets/selfie.jpeg";

import "./App.css";
import './index.css';

/*COMPONENTS AND PROPS */

/*shop */
export function ShopHeader({label, className}) {
    return (
      <header>
        <h2 className={className}>{label}</h2>
      </header>
    );
  }

  export function ShopNav({ to, label, className }) {
    return (
      <li className={className}>
        <Link to={to}>{label}</Link>
      </li>
    );
  }

  export function ShopIndex() {
    return (
      <div className="shopindex">
      <ul>
<ShopNav to="/Shop" label="All" className="All-Products-Nav"/>
<ShopNav to="/ShopTshirts" label="T-shirts" className="Tshirts-Products-Nav"/>
<ShopNav to="/ShopPrints" label="Prints" className="Prints-Products-Nav"/>
</ul>
</div>
    )
  }

  export function ProductCard({ to, className, src, alt, title, label }) {
  return (
    <div className="ProductCard">
      <Link to={to} className="Product-Link" title={title}>
        <div className="ProductCard-Box">
        <img className="ProductCard-Box-Content" 
        src={src}
        alt={alt}
        srcset={`
        ${images.small} 320w, 
        ${images.medium} 600w, 
        ${images.large} 960w
        `}
        sizes="(max-width: 600px) 100vw, 356px"
        loading="lazy">
        </img>
        </div>
       
      </Link>
    </div>
  )
}

  /* had to look into this one */
  export function PriceTag({amount, currency = 'GBP'}) {
    const formattedPrice = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: currency,
    }). format(amount);
  }
}

  export function ProductPrice({amount, currency}){
  return(
    <>
    <PriceTag amount={amount} currency={currency} />
    </>
  )}

  export function ProductPage() {
    return(
    <>
    <div className="Product-Box">
      <div className="Product-Box-Content">
        </div>
      </div>

</>
)
  }

/* I WAS GONNA MAKE THIS INTO A PROP BUT I DECIDED TO MAKE IT A COMPONENT - whoops didnt mean to caps, anyway i decided to make it a component because it seemed to be quite complicated and not just a simple reused function */



  /* trying to make a component first time. */
export function BookingInquiry ({
  handleSubmit,
  handleFileChange,
  handleRemove,
  previews = [],
  isSubmitting = false,
}) {
    return(
                <section>
            <h2>Booking Inquiries</h2>
            <div className="booking-inquiries">
              <p>
                If you are interested in booking a session with me, please fill out
                the form below.
              </p>
              <form id="booking-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your first name"
                  autoComplete="name"
                  required
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  autoComplete="email"
                  required
                />
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please include in your message: Concept, Size, Placement, Budget, and Dates of availability for an appointment."
                  required
                />
                <label htmlFor="reference">Attachments (optional):</label>
                <input
                  type="file"
                  id="reference"
                  name="reference[]"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                />

                <div
                  id="preview-container"
                  style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    margin: "15px 0",
                  }}
                >
                  {previews.map((item, index) => (
                    <div key={index} style={{ position: "relative" }}>
                      <img
                        src={item.url}
                        alt="attachment preview"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "4px",
                          border: "1px solid #ffde74",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemove(index)}
                        style={{
                          position: "absolute",
                          top: "-5px",
                          right: "-5px",
                          background: "red",
                          color: "white",
                          border: "none",
                          borderRadius: "50%",
                          width: "18px",
                          height: "18px",
                          fontSize: "10px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </section>
    );
  }

/*Component*/
export function Header () {
  return (
    <header>
          <h1>Shanti Ink</h1>
          <h3>Tattoo</h3>
          <p>Brighton local Independent Artist &amp; Stick and Poke Professional</p>
 </header>
  )
  };


/* trying a prop for first time */
 export function MenuLinks ({ to, label, className }) {
    return (
      <p className={className}>
        <Link to={to}>{label}</Link>
      </p>
    );
  }




  /* THE ACTUAL APP*/

function App () {

  return (

/* LOGO AND NAV */
    <>
      <title>Shanti Ink Tattoo v1</title>
      <div className="onimask">
<Header/>
        <div className="index">
          <nav>
            <article id="index">
              <MenuLinks to="/" label="Home" className="home" />
              <MenuLinks to="/myjourney" label="My Journey" className="myjourney" />
              <p className="portfolio"><a href="https://www.instagram.com/shantiiink/" target="_blank" rel="noopener noreferrer">Portfolio</a></p>
              <MenuLinks to="/shop" label="Shop" className="shop" />
              <MenuLinks to="/contact" label="Contact" className="contact" />
            </article>
          </nav>
        </div>
    
         <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myjourney" element={<MyJourney />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/ShopTshirts" element={<ShopTshirts />} /> 
          <Route path="/ShopPrints" element={<ShopPrints />} />
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
