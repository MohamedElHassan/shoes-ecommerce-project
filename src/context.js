import { useContext, createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import { products } from './data';
const AppContext = createContext();

const initialState = {
  loading: false,
  searchValue: '',
  products: [],
  cartItems: [],
  alert: { msg: '', show: false, type: '' },
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
  const removeCartItem = (id) => {
    dispatch({ type: 'REMOVE_CART_ITEM', payload: id });
  };
  const setTotalAndAmount = () => {
    dispatch({ type: 'GET_TOTAL_AND_AMOUNT' });
  };
  const toggleAmount = (type, id) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { type, id } });
  };
  const setAlert = (alert) => {
    dispatch({ type: 'SET_ALERT', payload: alert });
  };
  useEffect(() => {
    setTotalAndAmount();
  }, [state.cartItems]);

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
        removeCartItem,
        toggleAmount,
        setAlert,
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
