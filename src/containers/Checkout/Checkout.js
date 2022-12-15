import React, { useState } from 'react';

import { useGlobalContext } from '../../context';
import { CartSummary } from '../../components';
import './Checkout.scss';
const Checkout = () => {
  const { cartItems, total } = useGlobalContext();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  // const [totalPrice, TotalPrice] = useState(0)
  // const [products, setProducts] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submited');
    // use Async Await Code here
  };
  return (
    <>
      <h1>Checkout</h1>
      <div className="checkout">
        <div className="checkout-fields">
          <form onSubmit={handleSubmit}>
            <input
              className="name-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="firstName"
            />
            <input
              className="name-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="lastName"
            />
            <input
              className="address-input"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="address"
            />
            <input
              className="city-input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="city"
            />
            <input
              className="zip-input"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              type="text"
              placeholder="zipCode"
            />
            <button type="submit">Purchase Products</button>
          </form>
        </div>
        <CartSummary showBtn={false} />
      </div>
    </>
  );
};

export default Checkout;
