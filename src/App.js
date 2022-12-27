import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { Cart, Products, Dashboard, Checkout } from './containers';
import {
  Register,
  Login,
  SingleProductPage,
  Error404,
  LearnThings,
  UploadProduct
} from './components';
import Layout from './Layout';
import './App.scss';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/upload" element={<UploadProduct />} />
          </Route>
          <Route path="*" element={<Error404 />} />
          <Route path="/learn" element={<LearnThings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
