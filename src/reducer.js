const reducer = (state, action) => {
  if (action.type === 'GET_PRODUCTS') {
    return { ...state, products: action.payload };
  }
  if (action.type === 'GET_CART_ITEMS') {
    return { ...state, cartItems: action.payload };
  }
  if (action.type === 'CHANGE_PRICE_RANGE') {
    let newProducts = state.products.filter(
      (product) => product.price <= action.payload
    );
    return {
      ...state,
      products: newProducts,
    };
  }
  if (action.type === 'CHANGE_CATEGORY') {
    let newProducts = state.products.filter(
      (product) => product.category === action.payload
    );
    return {
      ...state,
      products: action.payload === 'All' ? state.products : newProducts,
    };
  }
  if (action.type === 'ADD_TO_CART') {
    let myCartItem = {
      ...action.payload,
      cartID: new Date().getTime().toString(),
      amount: 1,
    };
    let found = state.cartItems.find(
      (cartItem) => cartItem.id === myCartItem.id
    );
    if (found) {
      const newCartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === found.id) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });

      localStorage.setItem('cartItems', JSON.stringify(newCartItems));

      return {
        ...state,
        cartItems: newCartItems,
      };
    } else {
      localStorage.setItem(
        'cartItems',
        JSON.stringify([...state.cartItems, myCartItem])
      );

      return {
        ...state,
        cartItems: [...state.cartItems, myCartItem],
      };
    }
    // let newCartItems = state.cartItems
    //   ? state.cartItems.map((cartItem) => {
    //       if (cartItem.id === myCartItem.id) {
    //         myCartItem = { ...myCartItem, amount: cartItem.amount + 1 };
    //         return { ...cartItem, amount: myCartItem.amount + 1 };
    //       }
    //       return cartItem;
    //     })
    // : [{}];
    // console.log(newCartItems);
  }
  if (action.type === 'REMOVE_CART_ITEM') {
    let newCartItems = state.cartItems.filter(
      (cartItem) => cartItem.cartID !== action.payload
    );
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));

    return { ...state, cartItems: newCartItems };
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    let newCartItems = state.cartItems
      .map((item) => {
        if (item.cartID === action.payload.id) {
          return {
            ...item,
            amount:
              action.payload.type === 'increase'
                ? item.amount + 1
                : item.amount - 1,
          };
        }
        return item;
      })
      .filter((cartItem) => cartItem.amount > 0);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    return { ...state, cartItems: newCartItems };
  }
  if (action.type === 'GET_TOTAL_AND_AMOUNT') {
    let { total, amount } = state.cartItems.reduce(
      (cartTotal, cartItem) => {
        const { amount, price } = cartItem;
        const itemTotal = price * amount;
        cartTotal.amount += amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  throw new Error('No matching action type');
};

export default reducer;
