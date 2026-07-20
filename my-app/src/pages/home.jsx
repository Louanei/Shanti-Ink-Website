import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import selfieImg from "../assets/selfie.jpeg";
import emailjs from "@emailjs/browser";
import { compressImage } from "../scripts/imageUtils";
import { BookingInquiry } from "../App.jsx";

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
      // Code to compress image attachments so that they stay within EmailJS's 50kg character limit.....
      const compressedFiles = await Promise.all(
        selectedFiles.map((file) => compressImage(file, 500, 0.4))
      );

      
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