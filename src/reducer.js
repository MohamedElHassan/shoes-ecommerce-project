const reducer = (state, action) => {
  if (action.type === 'GET_PRODUCTS') {
    return { ...state, products: action.payload }
  }
  return state
}

export default reducer
