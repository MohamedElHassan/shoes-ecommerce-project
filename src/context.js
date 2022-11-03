import { useContext, createContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
import { products } from './data'
const AppContext = createContext()

const initialState = {
  loading: false,
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
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <AppContext.Provider
      value={{
        ...state,
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
