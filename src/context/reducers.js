import {notification, message} from 'antd';


export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ADD_TO_FAV = 'ADD_TO_FAV';
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV';


//Add to cart
const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    item => item.id === product.id
  );

  //Add to cart notification
const key = 'updatable';
    
const addToCartNotification = () => {
    message.loading({ content: 'Adding product to cart...', key });
    setTimeout(() => {
        message.success({ content: `Product ${product.title} added to cart!`, key, duration: 2 });
    }, 1000);
}

const increaseQuantityNotification = () => {
  message.loading({ content: 'Increase product quantity...', key });
  setTimeout(() => {
      message.success({ content: `Quantity added for ${product.title}!`, key, duration: 2 });
  }, 1000);
}

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
    addToCartNotification();
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
    increaseQuantityNotification();
  }
  return { ...state, cart: updatedCart };
};

//Remove from cart
const removeProductFromCart = (productId, state) => {
  console.log('Removing product with id: ' + productId);
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  };
  updatedItem.quantity--;
    updatedCart.splice(updatedItemIndex, 1);
  return { ...state, cart: updatedCart };
};

//Add to favorite
const addProductToFav = (product, state) => {
    const updatedFav = [...(state.fav || [])];
    const updatedItemIndex = updatedFav.findIndex(
      item => item.id === product.id
    );

    const openNotificationWithIcon =(type, placement) => {
      notification[type]({
        message: `${product.title} added to favorite.`,
        placement
      });
    };
  
    if (updatedItemIndex < 0) {
        updatedFav.push({ ...product, quantity: 1});
        openNotificationWithIcon('success', 'bottomRight');
    } 
    return { ...state, fav: updatedFav };
}

//Remove from favorite
const removeProductFromFav = (productId, state) => {
   const updatedFav = [...state.fav];
   const updatedItemIndex = updatedFav.findIndex(item => item.id === productId);

   const updatedItem = {
       ...updatedFav[updatedItemIndex]
   }

   updatedFav.splice(updatedItemIndex, 1);

   return { ...state, fav: updatedFav };
}

export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state);
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state);
    case ADD_TO_FAV:
        return addProductToFav(action.product, state);
    case REMOVE_FROM_FAV:
        return removeProductFromFav(action.productId, state);
    default:
      return state;
  }
};