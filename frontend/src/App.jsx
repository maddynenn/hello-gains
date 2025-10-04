import { useState } from 'react'
import './App.css'
import CheckoutForm from './components/CheckoutForm';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '48px 0' }}>
      <CheckoutForm />
    </div>
  )
}

export default App