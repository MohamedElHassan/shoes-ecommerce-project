import { useGlobalContext } from '../../context'
import { Product, ProductsFilter } from '../../components'
import './Products.scss'

const Products = () => {
  const { products } = useGlobalContext()
  return (
    <>
      <div className="products-container section__padding">
        <ProductsFilter />
        <div className="products">
          {products.map((product) => {
            return <Product key={product.id} {...product} />
          })}
        </div>
      </div>
    </>
  )
}

export default Products
