import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login/Login.jsx';
import Registro from './registro/Registro.jsx';
import ProductGallery from "./components/organisms/ProductGallery";
import ShoppingCart from "./components/organisms/ShoppingCart";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingCart />
  </StrictMode>,
)
