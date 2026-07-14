export default function Myjourney() {
  return (
  <>
  <main>
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
  </main>
  <footer>
    <p>ShantiInk Copyright &copy; Louanei 2026</p>
  </footer>
</>
  )
}