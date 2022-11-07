import { useGlobalContext } from '../../context';
import './Cart.scss';
const Cart = () => {
  const { cartItems, total } = useGlobalContext();
  console.log(cartItems);
  return (
    <>
      <div className="cart-title">
        <h2>Your Cart</h2>
        <h4>({cartItems.length} items)</h4>
      </div>
      <div className="cart">
        <div className="cart-items">
          {cartItems.map((item) => {
            const { id, name, image, price, category } = item;
            return (
              <div key={id} className="item">
                {name}
              </div>
            );
          })}
        </div>
        <div className="cart-summary">Total {total}</div>
      </div>
    </>
  );
};

export default Cart;
