import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 1. Importamos los componentes de navegación
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './login/Login.jsx';
import Registro from './registro/Registro.jsx';
import ProductGallery from "./components/organisms/ProductGallery";
import ShoppingCart from "./components/organisms/ShoppingCart";
import Header from "./components/organisms/Header";
import CheckoutPreview from "./components/organisms/CheckoutPreview";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. El BrowserRouter maneja la URL. El basename es vital para GitHub Pages */}
    <BrowserRouter basename="/Reto_fullstack">
      
      {/* El Header se queda afuera de Routes para que sea persistente en toda la web */}
      <Header />

      <main className="min-h-screen bg-[#F8F5F0]">
        <Routes>
          {/* 3. Definimos qué componente se muestra según la dirección (path) */}
          <Route path="/" element={<ProductGallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/carrito" element={<ShoppingCart />} />
          <Route path="/checkout" element={<CheckoutPreview />} />
          
          {/* Ruta de respaldo por si el usuario escribe algo mal */}
          <Route path="*" element={<ProductGallery />} />
        </Routes>
      </main>

    </BrowserRouter>
  </StrictMode>,
)