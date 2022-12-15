import React, { useState } from 'react';

import { useGlobalContext } from '../../context';
import { CartSummary } from '../../components';
import './Checkout.scss';
import { redirect } from 'react-router-dom';
const Checkout = () => {
  const { cartItems, total, amount } = useGlobalContext();

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
    redirect('/register');
  };
  return (
    <>
      <div className="app-checkout section__padding">
        <h1>Checkout</h1>
        <div className="checkout">
          <div className="checkout-fields">
            <form onSubmit={handleSubmit}>
              <div className="name-input-container">
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
              </div>
              <input
                className="address-input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="address"
              />
              <div className="city-information">
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
              </div>
              <button className="primary-btn" type="submit">
                {amount > 1 ? `Purchase ${amount} Shoeses`: `Purchase ${amount} Shoes`}
              </button>
            </form>
          </div>
          <CartSummary showBtn={false} />
        </div>
      </div>
    </>
  );
};

export default Checkout;
