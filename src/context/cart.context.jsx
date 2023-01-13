import { createContext, useState, useEffect } from "react";

const addToCartHelper = (cartItems, itemToAdd) => {
  const ifExistedValue = cartItems.find((cardItem) => {
    return cardItem.id === itemToAdd.id;
  });

  if (ifExistedValue) {
    return cartItems.map((cartItem) => {
      return cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  //Items not present.
  return [
    ...cartItems,
    {
      ...itemToAdd,
      quantity: 1,
    },
  ];
};

const removerCartItem = (cartItems, removeCartItem) => {
  const ifExistedValue = cartItems.find((cardItem) => {
    return cardItem.id === removeCartItem.id;
  });
  if (ifExistedValue.quantity === 1) {
    return cartItems.filter((cardItem) => cardItem.id !== removeCartItem.id);
  } else {
    return cartItems.map((cartItem) => {
      return cartItem.id === removeCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartItemCount: 0,
  setCartItemCount: () => {},
  cartTotal: 0,
  clearItemFromCart: () => {},
  removeItemsFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotal,setCartTotal] = useState(0);

  const addItemsToCart = (itemToAdd) => {
    setCartItems(addToCartHelper(cartItems, itemToAdd));
  };

  const removeItemsFromCart = (removeCartItem) => {
    setCartItems(removerCartItem(cartItems, removeCartItem));
  };

  const clearItemFromCart = (cartItem) => {
    setCartItems(cartItems.filter((cardItem) => cardItem.id !== cartItem.id));
  };
  useEffect(() => {
    const itemCount = cartItems.reduce((agg, currentElement) => {
      return agg + currentElement.quantity;
    }, 0);
    setCartItemCount(itemCount);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce((agg, currentElement) => {
      return agg + currentElement.quantity * currentElement.price;
    }, 0);
    setCartTotal(total);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    cartItemCount,
    cartTotal,
    removeItemsFromCart,
    clearItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
