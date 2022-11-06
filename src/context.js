import { useContext, createContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
import { products } from './data'
const AppContext = createContext()

const initialState = {
  loading: false,
  searchValue: '',
  products: [],
  cart: [],
  total: 0,
  amount: 0,
}
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const getProducts = () => {
    dispatch({ type: 'GET_PRODUCTS', payload: products })
  }
  const handlePriceRange = (priceRange) => {
    dispatch({ type: 'GET_PRODUCTS', payload: products })
    dispatch({ type: 'CHANGE_PRICE_RANGE', payload: priceRange })
  }
  const handleCategorySelect = (category) => {
    dispatch({ type: 'GET_PRODUCTS', payload: products })
    dispatch({ type: 'CHANGE_CATEGORY', payload: category })
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <AppContext.Provider
      value={{
        ...state,
        handlePriceRange,
        handleCategorySelect,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
