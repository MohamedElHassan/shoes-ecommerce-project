import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { Cart, Products, Dashboard } from './containers'
import { Register, Login, SingleProductPage, Error404 } from './components'
import Layout from './Layout'
import './App.scss'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
