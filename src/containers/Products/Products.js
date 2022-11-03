import { useGlobalContext } from '../../context'
import './Products.scss'

const Products = () => {
  const { products } = useGlobalContext()
  console.log(products)
  return <div>Products</div>
}

export default Products
