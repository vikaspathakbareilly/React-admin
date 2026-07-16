import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'
import ProtectedRoute from './gaurd/ProtectedRoute';
import PublicRoute from './gaurd/defaultRoute';
import Login from './pages/login';
import MainLayout from './layouts/MainLayout';
import ProductPage from './pages/product';
function App() {
  const [count, setCount] = useState(0)

  return (

    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoute />}>

        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
    </Routes >
  );
}

export default App
