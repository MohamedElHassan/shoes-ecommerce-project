import { useGlobalContext } from '../../context';
import {
  FaRegTrashAlt,
  FaChevronUp,
  FaChevronDown,
  FaHeart,
} from 'react-icons/fa';
import { TopPicksProducts } from '../../components';
import { Link } from 'react-router-dom';

import './Cart.scss';
const Cart = () => {
  const { cartItems, total, removeCartItem, toggleAmount, amount } =
    useGlobalContext();

  if (cartItems.length === 0) {
    return (
      <>
        <h2>No Items in the Cart, Go add Them</h2>
        <Link to="/products">Go to Products</Link>
      </>
    );
  }
  return (
    <>
      <div className="app__cart section__padding">
        <div className="cart-title">
          <h2>Your Cart</h2>
          <h4>{amount === 1 ? `(${amount} item)` : `(${amount} items)`}</h4>
        </div>
        <div className="cart">
          <div className="cart-items">
            {cartItems.map((item) => {
              const { name, image, price, category, brand, cartID, amount } =
                item;
              return (
                <div key={cartID} className="item">
                  <div className="item-img">
                    <img src={image} alt={name} />
                  </div>
                  <div className="item-details">
                    <h3>{name}</h3>
                    <h5>
                      {category} {brand}
                    </h5>
                    <div className="btns">
                      <button
                        onClick={() => toggleAmount('decrease', cartID)}
                        className="decrease-btn"
                      >
                        <FaChevronDown />
                      </button>
                      <button
                        onClick={() => toggleAmount('increase', cartID)}
                        className="increase-btn"
                      >
                        <FaChevronUp />
                      </button>
                      <div className="amount">Quantity : {amount}</div>
                    </div>
                    <div className="remove-love-btns">
                      <button
                        onClick={() => alert('Love me❤️')}
                        className="love-btn"
                      >
                        <FaHeart />
                      </button>
                      <button
                        onClick={() => removeCartItem(cartID)}
                        className="remove-btn"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </div>
                  </div>
                  <div className="item-price">
                    <h3>${price}</h3>
                  </div>
                </div>
              );
            })}
          </div>
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
            <form className="promo-code">
              <label htmlFor="promo-code">Have a promo code ?</label>
              <input id="promo-code" type="text" placeholder="Enter Code" />
              <button type="submit">Apply</button>
            </form>
            <div className="total">
              <p>Total</p>
              <h5>${total}</h5>
            </div>
          </div>
        </div>
      </div>
      <TopPicksProducts />
    </>
  );
};

export default Cart;
