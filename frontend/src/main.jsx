import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './landing_page/Home/HomePage.jsx'
import SignUp from './landing_page/SignUp/SignUp.jsx'
import AboutPage from './landing_page/About/AboutPage.jsx'
import ProductPage from './landing_page/Products/ProductPage.jsx'
import PricingPage from './landing_page/Pricing/PricingPage.jsx'
import SupportPage from './landing_page/Support/SupportPage.jsx'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import NotFound404 from './landing_page/NotFound404.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/products' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/supports' element={<SupportPage />} />
      <Route path='*' element={<NotFound404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
