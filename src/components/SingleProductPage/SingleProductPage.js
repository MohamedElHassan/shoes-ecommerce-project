import { useParams } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import './SingleProductPage.scss'
import { products } from '../../data'
const SingleProductPage = () => {
  const params = useParams()
  let paramsId = parseInt(params.id)
  const product = products.filter((product) => product.id === paramsId)
  const { name, price, category, image, description } = product[0]
  return (
    <>
      <div className="sp-product section__padding section__margin">
        <div className="sp-product-img">
          <img src={image} alt={name} />
        </div>
        <div className="sp-product-content">
          <h2>{name}</h2>
          <div className="sp-product-category">
            <p>{category}</p>
          </div>
          <h3>${price}</h3>
          <p className="sp-product-description">{description}</p>
          <button type="button" className="addToCart-btn primary-btn">
            Add to cart
          </button>
          <button type="button" className="favorite-btn primary-btn">
            Favorite <FaHeart />
          </button>
        </div>
      </div>
    </>
  )
}

export default SingleProductPage
