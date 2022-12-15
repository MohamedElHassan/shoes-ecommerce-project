import { useGlobalContext } from '../../context';
import {
  FaRegTrashAlt,
  FaChevronUp,
  FaChevronDown,
  FaHeart,
} from 'react-icons/fa';
import { TopPicksProducts } from '../../components';
import { Link } from 'react-router-dom';
import { CartSummary } from '../../components';
import './Cart.scss';
const Cart = () => {
  const { cartItems, removeCartItem, toggleAmount, amount } =
    useGlobalContext();

  if (cartItems.length === 0) {
    return (
      <>
        <div className="no-cart-items">
          <h2>No Items in the Cart, Go add Them</h2>
          <Link className="primary-btn" to="/products">
            Go to Products
          </Link>
        </div>
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
          <CartSummary />
        </div>
      </div>
      <TopPicksProducts />
    </>
  );
};

export default Cart;
