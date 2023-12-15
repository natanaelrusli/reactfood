import React from "react";
import logo from "../assets/logo.jpg";
import { useCartStore } from "../store/cartStore";

export default function Navbar({ handleShowCart }) {
  const { totalQuantity } = useCartStore();

  return (
    <div id='main-header'>
      <div id='title'>
        <img src={logo} alt='react food logo' />
        <h1>REACTFOOD</h1>
      </div>

      <div onClick={handleShowCart} id='nav-right'>
        Cart ({totalQuantity})
      </div>
    </div>
  );
}
