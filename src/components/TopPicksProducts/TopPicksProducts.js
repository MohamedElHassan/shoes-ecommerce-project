import './TopPicksProducts.scss';
import { useGlobalContext } from '../../context';
const TopPicksProducts = () => {
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
  console.log(myProducts);
  return <div>TopPicksProducts</div>;
};

export default TopPicksProducts;
