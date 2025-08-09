import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import PaymentInstructions from './PaymentInstructions.tsx'
import Affiliates from './Affiliates.tsx'
import Contact from './Contact.tsx'
import Form from './Form.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/dp">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/payment" element={<PaymentInstructions />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
