import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ShopHeader, ShopNav, ShopIndex } from "../../App.jsx";

export default function Shop() {
  return (
<>
<ShopHeader label="Prints" className="Prints-Products-Title"/>
<ShopIndex/>
<main>

</main>

</>
  )
}