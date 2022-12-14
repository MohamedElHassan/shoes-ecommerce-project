import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../../context';
import './CartSummary.scss';

const CartSummary = ({ showBtn = true }) => {
  const { total } = useGlobalContext();
  const [couponCode, setCouponCode] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (couponCode) {
      alert(`You have entered "${couponCode}" coupon code👍`);
      setCouponCode('');
    }
  };
  return (
    <>
      <div className="cart-summary">
        <h3>Summary</h3>
        <div className="sub-total">
          <p>Subtotal</p>
          <h5>${total}</h5>
        </div>
        <div className="shipping-cost">
          <p>Shipping cost</p>
          <h5>${7}</h5>
        </div>
        {showBtn ? (
          <form onSubmit={handleSubmit} className="promo-code">
            <div className="form-data">
              <label htmlFor="promo-code">Have a promo code ?</label>
              <br />
              <input
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                id="promo-code"
                type="text"
                placeholder="Enter Code"
              />
            </div>
            <button type="submit">Apply</button>
          </form>
        ) : null}
        <div className="total">
          <p>Total</p>
          <h5>${total}</h5>
        </div>
        {showBtn ? (
          <Link className="checkout-btn" to="/checkout">
            Proceed to checkout
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default CartSummary;
