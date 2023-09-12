import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer.jsx";
import Navbar from "./components/NavBar/NavBar";
import {BrowserRouter} from "react-router-dom"
import { ShoppingCartProvider } from "./ShoppingCartContext/ShoppingCartContext.jsx";
import { ShoppingCart } from "./components/ShoppingCart.jsx/ShoppingCart.jsx";
import React, {createContext, useState} from "react"


function App() {
  return (
    <div>
      <ShoppingCartProvider>
        <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<ShoppingCart/>} />
      </Routes>
      </BrowserRouter>
      </ShoppingCartProvider>
      
    </div>
  );
}

export default App;