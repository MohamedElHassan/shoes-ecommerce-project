import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  useState,
} from 'react';
import reducer from './reducer';
// import { products } from './data';
const AppContext = createContext();

const initialState = {
  loading: false,
  searchValue: '',
  products: [],
  cartItems: [],
  alert: { msg: '', show: false, type: '' },
  total: 0,
  amount: 0,
  auth: 'No clients Found',
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [products, setProducts] = useState([]);
  let visited = false;
  const getProducts = async () => {
    const url = 'http://localhost/projectAPI/read.php';
    // const settings = {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // };
    try {
      const fetchProducts = await fetch(url);
      const theProducts = await fetchProducts.json();
      const products = theProducts.map((product) => {
        let priceInt = parseInt(product.price);

        return { ...product, price: priceInt };
      });
      // return data;
      // console.log(products);
      if (!visited) {
        setProducts(products);
        visited = true;
      }
      dispatch({ type: 'GET_PRODUCTS', payload: products });
    } catch (error) {
      // return error;
      console.log(error);
    }
  };

  // const getProducts = () => {
  //   dispatch({ type: 'GET_PRODUCTS', payload: products });
  // };
  const setAuthUser = (auth) => {
    dispatch({ type: 'SET_AUTH_USER', payload: auth });
  };
  const getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    dispatch({ type: 'GET_CART_ITEMS', payload: cartItems });
  };
  const handlePriceRange = (priceRange) => {
    dispatch({ type: 'GET_PRODUCTS', payload: products });
    dispatch({ type: 'CHANGE_PRICE_RANGE', payload: priceRange });
  };
  // const topPicksProducts = ()=> {
  //   dispatch({ type: 'TOP_PICKS_PRODUCTS', payload: products });
  // }
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
  const removeAllCartItem = () => {
    dispatch({ type: 'REMOVE_ALL_CART_ITEM' });
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
    if (localStorage.getItem('cartItems')) {
      getCartItems();
    }
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
        setAuthUser,
        removeAllCartItem,
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
