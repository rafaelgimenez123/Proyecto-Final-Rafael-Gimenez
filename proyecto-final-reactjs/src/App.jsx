import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer.jsx";
import Navbar from "./components/NavBar/NavBar";
import {BrowserRouter} from "react-router-dom"
import React, {createContext, useState} from "react"
import CartProvider from "./context/CartProvider.jsx"
import CartView from "./components/CartView.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

function App() {
  return (
    <CartProvider>
      
        <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="/chekout" element={<Checkout/>} />
      </Routes>
      </BrowserRouter>
      
      
      </CartProvider>
  );
}

export default App;