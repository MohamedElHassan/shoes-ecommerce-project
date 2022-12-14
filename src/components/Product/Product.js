import { Link } from 'react-router-dom';
import './Product.scss';
import images from '../../images';
const Product = ({ id, name, price, category, image, rating }) => {
  return (
    <>
      <Link to={`/product/${id}`} className="product">
        <div className="product-img">
          <img src={image} alt={name} />
        </div>
        <div className="produtc-info">
          <p>{name}</p>
          <p>${price}</p>
        </div>
        <div className="product-category">
          <p>{category}</p>
        </div>
        {}
      </Link>
    </>
  );
};

export default Product;
