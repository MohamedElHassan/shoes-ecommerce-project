import { useGlobalContext } from '../../context';
import { Product, ProductsFilter } from '../../components';
import './Products.scss';

const Products = () => {
  fetch('http://shoes-ecommerce-se.ezyro.com/products')
    .then((res) => res.josn)
    .then((data) => console.log(data));
  const { products } = useGlobalContext();
  return (
    <>
      <div className="products-container section__padding">
        <ProductsFilter />
        {/* foreach */}
        <div></div>
        {/* endforeach */}
        <div className="products">
          {products.length !== 0 ? (
            products.map((product) => {
              return <Product key={product.id} {...product} />;
            })
          ) : (
            <h1>No Products Found</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
