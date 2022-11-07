import { useContext, createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import { products } from './data';
const AppContext = createContext();

const initialState = {
  loading: false,
  searchValue: '',
  products: [],
  cartItems: [],
  total: 0,
  amount: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProducts = () => {
    dispatch({ type: 'GET_PRODUCTS', payload: products });
  };
  const handlePriceRange = (priceRange) => {
    dispatch({ type: 'GET_PRODUCTS', payload: products });
    dispatch({ type: 'CHANGE_PRICE_RANGE', payload: priceRange });
  };
  const handleCategorySelect = (category) => {
    dispatch({ type: 'GET_PRODUCTS', payload: products });
    dispatch({ type: 'CHANGE_CATEGORY', payload: category });
  };
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        handlePriceRange,
        handleCategorySelect,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
