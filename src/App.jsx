import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Accessories from './pages/Accessories'
import Laptops from './pages/Laptops'
import Gaming from './pages/Gaming'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/laptops' element={<Laptops />} />
          <Route path='/gaming' element={<Gaming />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  )
}

export default App
