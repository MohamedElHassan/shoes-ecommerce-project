import { useGlobalContext } from '../../context';
import { FaRegTrashAlt, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import './Cart.scss';
import { Link } from 'react-router-dom';
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
                        onClick={() => removeCartItem(cartID)}
                        className="remove-btn"
                      >
                        <FaRegTrashAlt />
                      </button>
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
                    </div>
                    <div className="amount">Amount : {amount}</div>
                  </div>
                  <div className="item-price">
                    <h3>${price}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-summary">Total : ${total}</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
