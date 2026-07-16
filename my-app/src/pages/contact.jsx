import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
     <h2>Contact</h2>;

  <main>
<h6>Email</h6>
    <p>shantiink@gmail.com</p>
    <h6>Instagram</h6>
    <p><a href="https://www.instagram.com/shantiiink/" target="_blank">@shantiiink</a></p>
    <br/>
    <p>For any Tattoo quotes or booking inquires, please send a request using the</p><p><Link to="/">Contact form</Link></p>
  </main>
</>
  )
}
