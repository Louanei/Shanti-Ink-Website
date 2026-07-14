import { Link } from "react-router-dom";
import selfieImg from "../assets/selfie.jpeg";
export default function Home() {
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
                <Link to="myjourney">My Journey</Link>
              </p>
              <p className="portfolio">
                <Link to="portfolio">Portfolio</Link>
              </p>
              <p className="contact">
                <Link to="contact">Contact</Link>
              </p>
            </article>
          </nav>
        </div>
        <br />
        <section id="about">
          <div className="abtme-name">
            <h2>About me</h2>
          </div>
          <div className="abtme-desc">
            <article>
              <p>
                Welcome! My name is Radha, i'm an artist and I have been practicing
                tattooing for the past 5 years. I specialize in Stick and Poke
                tattooing and dotwork. My style inspired heavily from traditional
                Japanese art, nature and geometrical symbolism. I currently practice
                at fnasdkfbaskgb studio. Bookings only, if you're interested in
                getting tattooed. by me please complete the form below. Feel free to
                learn more about me on 'my journey' and support my work by checking
                out my merch page or buymeacoffee. Thanks for browsing!
              </p>
            </article>
          </div>
          <div className="abtme-selfie">
            <img
              src={selfieImg}
              alt="picture of Shanti ink"
              width={300}
              height={400}
            />
          </div>
        </section>
        <main>
          <section>
            <h2>Booking Inquiries</h2>
            <div className="booking-inquiries">
              <p>
                {" "}
                If you are interested in booking a session with me, please fill out
                the form below.
              </p>
              <form
                action="https://formspree.io/f/mojopvjv"
                method="POST"
                encType="multipart/form-data"
                id="booking-form"
              >
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your first name"
                  autoComplete="name"
                  required=""
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  autoComplete="email"
                  required=""
                />
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please include in your message: Concept, Size, Placement, budget and Dates of availability. IF ALL THESE DETAILS ARE NOT PROVIDED YOUR INQUIRY MAY BE IGNORED."
                  required=""
                  defaultValue={""}
                />
                <label htmlFor="reference">Attachments (optional):</label>
                <input
                  type="file"
                  id="reference"
                  name="reference[]"
                  accept="image/*"
                  multiple=""
                />
                <div
                  id="preview-container"
                  style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    margin: "15px 0"
                  }}
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </section>
        </main>
      </div>
      <footer>
        <p>ShantiInk Copyright © Louanei 2026</p>
      </footer>
    </>
  );
}


