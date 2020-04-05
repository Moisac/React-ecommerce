import React, { useReducer } from 'react';

import ShopContext from './shop-context';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT, ADD_TO_FAV, REMOVE_FROM_FAV } from './reducers';

const GlobalState = props => {
  const products = [
    { 
      id: 'p1', 
      title: 'Premier Cropped Skinny Jean',
      price: 380.00,
      new_price: 349.00,
      category: 'Womens',
      brand: 'Zara',
      badges: ['New', 'Sale'],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/premier1.jpg'),
      images: [
        require('../images/products/premier1.jpg'),
        require('../images/products/premier2.jpg'),
        require('../images/products/premier3.jpg'),
      ]
    },
    { 
      id: 'p2', 
      title: 'Tailored Fit Mesh-Panel Polo', 
      price: 400.00, 
      category: 'Womens', 
      brand: 'Zara', 
      badges: [],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/tailored1.jpg'),
      images: [
        require('../images/products/tailored1.jpg'),
        require('../images/products/tailored2.jpg'),
        require('../images/products/tailored3.jpg'),
      ]
    },
    { 
      id: 'p3', 
      title: 'Relaxed-Fit Cotton Shirt', 
      price: 280.00, 
      category: 'Womens', 
      brand: 'Guess', 
      badges: [],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/relaxed1.jpg'),
      images: [
        require('../images/products/relaxed1.jpg'),
        require('../images/products/relaxed2.jpg'),
        require('../images/products/relaxed3.jpg'),
      ]
    },
    { 
      id: 'p4', 
      title: 'Viscose-Cashmere Scarf',
      price: 190.00, 
      category: 'Womens',
      brand: 'Lacoste', 
      badges: ['New',],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/viscose1.jpg'),
      images: [
        require('../images/products/viscose1.jpg'),
        require('../images/products/viscose2.jpg'),
      ]
    },
    { 
      id: 'p5', 
      title: 'Slim Fit Cotton Oxford Shirt', 
      price: 500.00, 
      category: 'Womens', 
      brand: 'Levi\'s', 
      badges: [],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/slim1.jpg'),
      images: [
        require('../images/products/slim1.jpg'),
        require('../images/products/slim2.jpg'),
        require('../images/products/slim3.jpg'),
        require('../images/products/slim4.jpg'),
      ]
    },
    { 
      id: 'p6', 
      title: 'Rounded Cat Eye Sunglasses', 
      price: 180.00, 
      category: 'Womens', 
      brand: 'Polo', 
      badges: [],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/rounded1.jpg'),
      images: [
        require('../images/products/rounded1.jpg'),
        require('../images/products/rounded2.jpg'),
      ]
    },
    { 
      id: 'p7', 
      title: 'Two-Tone Sleeveless Dress', 
      price: 340.00, 
      category: 'Womens', 
      brand: 'Guess', 
      badges: ['New', 'Sale'],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/two1.jpg'),
      images: [
        require('../images/products/two1.jpg'),
        require('../images/products/two2.jpg'),
        require('../images/products/two3.jpg'),
        require('../images/products/two4.jpg'),
      ]
    },
    { 
      id: 'p8', 
      title: 'Skinny Fit Stretch Mesh Polo', 
      price: 220.00, 
      category: 'Womens', 
      brand: 'Polo', 
      badges: ['Sale'],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/skinny1.jpg'),
      images: [
        require('../images/products/skinny1.jpg'),
        require('../images/products/skinny2.jpg'),
        require('../images/products/skinny3.jpg'),
      ]
    },
    { 
      id: 'p9', 
      title: 'Reversible Down Vest', 
      price: 180.00, 
      category: 'Womens', 
      brand: 'Zara', 
      badges: [],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/reversible1.jpg'),
      images: [
        require('../images/products/reversible1.jpg'),
        require('../images/products/reversible2.jpg'),
        require('../images/products/reversible3.jpg'),
      ]
    },
    { 
      id: 'p10', 
      title: 'Ocean Wash Linen Sport Shirt', 
      price: 220.00, 
      category: 'Mens', 
      brand: 'Zara', 
      badges: [],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/ocean1.jpg'),
      images: [
        require('../images/products/ocean1.jpg'),
        require('../images/products/ocean2.jpg'),
        require('../images/products/ocean3.jpg'),
      ]
    },
    { 
      id: 'p11', 
      title: 'Standard Fit Sport Shirt', 
      price: 340.00, 
      category: 'Mens', 
      brand: 'Zara', 
      badges: ['New', 'Sale'],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/standard1.jpg'),
      images: [
        require('../images/products/standard1.jpg'),
        require('../images/products/standard2.jpg'),
        require('../images/products/standard3.jpg'),
        require('../images/products/standard4.jpg'),
      ]
    },
    { 
      id: 'p12', 
      title: 'Custom Fit Soft-Touch Polo', 
      price: 80.00, 
      category: 'Mens', 
      brand: 'Lacoste', 
      badges: [],
      image_thumb: require('../images/products/custom1.jpg'),
      images: [
        require('../images/products/custom1.jpg'),
        require('../images/products/custom2.jpg'),
      ]
    },
    { 
      id: 'p13', 
      title: 'Heritage Sunglasses', 
      price: 160.00, 
      category: 'Mens', 
      brand: 'Zara', 
      badges: ['New', 'Sale'],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/heritange1.jpg'),
      images: [
        require('../images/products/heritange1.jpg'),
        require('../images/products/heritage2.jpg'),
        require('../images/products/heritage3.jpg'),
      ]
    },
    { 
      id: 'p14', 
      title: 'Faxon Canvas Low-Top Sneaker', 
      price: 460.00, 
      category: 'Mens', 
      brand: 'Zara', 
      badges: [],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/faxon1.jpg'),
      images: [
        require('../images/products/faxon1.jpg'),
        require('../images/products/faxon2.jpg'),
        require('../images/products/faxon3.jpg'),
        require('../images/products/faxon4.jpg')
      ]
    },
    { 
      id: 'p15', 
      title: 'Douglas Calfskin Buckle Belt', 
      price: 120.00, 
      category: 'Mens', 
      brand: 'Levi\'s', 
      badges: ['Sale'],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/douglas1.jpg'),
      images: [
        require('../images/products/douglas1.jpg'),
        require('../images/products/douglas2.jpg'),
        require('../images/products/douglas3.jpg'),
      ]
    },
    { 
      id: 'p16', 
      title: 'Vachetta Sahara Duffel Bag', 
      price: 360.00, 
      category: 'Mens', 
      brand: 'Levi\'s', 
      badges: ['New'],
      description: 'A polo shirt, by definition, has a collar, a placket with two or three buttons, and sometimes a pocket. Also known as a golf shirt and a tennis shirt, the polo shirt has its roots in tennis. In the 19th and early 20th centuries, tennis players wore long-sleeved white button-up shirts whose sleeves had to be rolled up, also known as “tennis whites.”',
      image_thumb: require('../images/products/vachetta1.jpg'),
      images: [
        require('../images/products/vachetta1.jpg'),
        require('../images/products/vachetta2.jpg'),
        require('../images/products/vachetta3.jpg'),
        require('../images/products/vachetta4.jpg'),
      ]
    },
  ];
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
  const [favState, dispatchFav] = useReducer(shopReducer, { fav: [] });

  const addProductToCart = product => {
      dispatch({ type: ADD_PRODUCT, product: product });
  };

  const removeProductFromCart = productId => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
  };

  const addProductToFav = product => {
      dispatchFav({type: ADD_TO_FAV, product: product });
  }

  const removeProductFromFav = productId => {
      dispatchFav({ type: REMOVE_FROM_FAV, productId: productId })
  }

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        fav: favState.fav,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        addProductToFav: addProductToFav,
        removeProductFromFav: removeProductFromFav,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;