import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopHeader, ShopNav, ShopIndex } from "../../App.jsx";
import { ProductCard, PriceTag, ProductInfo } from "../../App.jsx";
import { Shirt1, Shirt2, Shirt3, Print1, Print2, Print3 } from "../../App.jsx";


export default function Shop() {
  return (
<>
 <ShopHeader label="All Products" className="All-Products-Title"/>
<ShopIndex/>

<main>

<div className="Product-Box">
  <div className="ProductBox-Content">
    <Shirt1 />
  </div>
</div>
 

</main>

</>
  )
}