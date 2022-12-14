import React from 'react';

import { useGlobalContext } from '../../context';
import './TopSellingProducts.scss';

const TopSellingProducts = () => {
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
  return <div>TopSellingProducts</div>;
};

export default TopSellingProducts;
