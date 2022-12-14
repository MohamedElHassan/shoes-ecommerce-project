import './FeaturedProducts.scss';
import { useGlobalContext } from '../../context';

const FeaturedProducts = () => {
  const { products } = useGlobalContext();
  const myProducts = products
    .filter((product, index) => {
      if (index >= 3) {
        return false;
      } else {
        return true;
      }
    })
    .map((product) => {
      return { product };
    });
  return <div>FeaturedProducts</div>;
};

export default FeaturedProducts;
