import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Navbar from './components/navbar/Navbar.jsx'

// pages
import Home from './pages/home/Home.jsx'
import Shop from './pages/product/Shop.jsx'

export default function App() {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Shop" element={<Shop />}/>
          </Routes>
      </div>
    </BrowserRouter>
  )
}