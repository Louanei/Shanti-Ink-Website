import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import selfieImg from "../assets/selfie.jpeg";
import emailjs from "@emailjs/browser";
import { compressImage } from "../scripts/imageUtils";

export default function Home() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log("forms are up");
  }, []);

  /* for me to review*/
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const newFiles = files.filter(
      (file) => !selectedFiles.some((f) => f.name === file.name && f.size === file.size)
    );

    const updatedFiles = [...selectedFiles, ...newFiles];
    setSelectedFiles(updatedFiles);

    const newPreviews = newFiles.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setPreviews((prev) => [...prev, ...newPreviews]);
    e.target.value = "";
  };

  const handleRemove = (indexToRemove) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== indexToRemove));
    setPreviews((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;

    try {
      // Compress each image to stay well under EmailJS's 50kb limit
      const compressedFiles = await Promise.all(
        selectedFiles.map((file) => compressImage(file, 500, 0.4))
      );

      // Wrap in HTML <img> tags for email body
      const imageMarkup = compressedFiles
        .map(
          (base64) =>
            `<img src="${base64}" alt="Reference Attachment" style="max-width: 100%; height: auto; border-radius: 8px; margin-top: 10px; display: block;" />`
        )
        .join("");

      const templateParams = {
        from_name: form.name.value,
        from_email: form.email.value,
        message: form.message.value,
        content: imageMarkup,
      };

      const result = await emailjs.send(
        "booking-inquiry",
        "template_6tr9r67",
        templateParams,
        "SKfsdwkuLy5nvBFdm"
      );

      if (result.status === 200) {
        alert("Inquiry sent successfully!");
        form.reset();
        setSelectedFiles([]);
        setPreviews([]);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Oops! There was a problem sending your inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };
  /* review all above */

  function BookingInquiry() {
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
    )
  }

  return (
    <>
        <br />
        <section id="about">
          <div className="abtme-name">
            <h2 strong="true">About me</h2>
          </div>
          <div className="abtme-desc">
            <article>
              <p>
                Welcome! My name is Radha, I&apos;m an artist and I have been practicing
                tattooing for the past 5 years. I specialize in Stick and Poke
                tattooing and dotwork. My style is inspired heavily by traditional
                Japanese art, nature, and geometrical symbolism. Bookings only—if you&apos;re
                interested in getting tattooed by me, please complete the form below. Feel free to
                learn more about me on &apos;My Journey&apos; and support my work by checking
                out my merch page or Buy Me a Coffee. Thanks for browsing!
              </p>
            </article>
          </div>
          <div className="abtme-selfie">
            <img
              src={selfieImg}
              alt="Shanti Ink artist selfie"
              width={300}
              height={400}
            />
          </div>
        </section>
        <main>
 <BookingInquiry/>
        </main>
     
    </>
  );
}