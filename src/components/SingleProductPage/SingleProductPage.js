import { useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

import { useGlobalContext } from '../../context';
import { products } from '../../data';
import './SingleProductPage.scss';
import { useEffect, useState } from 'react';
const SingleProductPage = () => {
  const [product, setProduct] = useState([]);
  const { addToCart } = useGlobalContext();
  const params = useParams();
  let paramsId = parseInt(params.id);
  // const product = products.filter((product) => product.id === paramsId);
  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost/projectAPI/executedescription.php?pid=${paramsId}`
      );
      const data = await response.json();
      setProduct(data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // fetch(`http://localhost/projectAPI/executedescription.php?pid=${paramsId}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data[0].img_url);
  //     console.log(typeof data[0]);
  //     product = data[0];
  //     // const { name, price, type, img_url, description } = data[0];
  //   });
  const { name, price, type, img_url, description } = product;
  return (
    <>
      <div className="sp-product section__padding section__margin">
        <div className="sp-product-img">
          <img src={img_url} alt={name} />
        </div>
        <div className="sp-product-content">
          <h2>{name}</h2>
          <div className="sp-product-category">
            <p>{type}</p>
          </div>
          <h3>${price}</h3>
          <p className="sp-product-description">{description}</p>
          <button
            type="button"
            className="addToCart-btn primary-btn"
            onClick={() => addToCart({ ...product, id: paramsId })}
          >
            Add to cart
          </button>

          <button
            type="button"
            className="favorite-btn primary-btn"
            onClick={() => alert('Love me❤️')}
          >
            Favorite <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProductPage;
