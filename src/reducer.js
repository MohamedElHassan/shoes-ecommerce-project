const reducer = (state, action) => {
  if (action.type === 'GET_PRODUCTS') {
    return { ...state, products: action.payload }
  }
  if (action.type === 'CHANGE_PRICE_RANGE') {
    let newProducts = state.products.filter(
      (product) => product.price <= action.payload
    )
    return {
      ...state,
      products: newProducts,
    }
  }
  if (action.type === 'CHANGE_CATEGORY') {
    let newProducts = state.products.filter(
      (product) =>
        product.category === action.payload ||
        product.category === action.payload
    )
    return {
      ...state,
      products: action.payload === 'All' ? state.products : newProducts,
    }
  }
  return state
}

export default reducer
