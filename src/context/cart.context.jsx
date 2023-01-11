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

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  cartItemCount: 0,
  setCartItemCount: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const addItemsToCart = (itemToAdd) => {
    setCartItems(addToCartHelper(cartItems, itemToAdd));
  };

  useEffect(() => {
    const itemCount = cartItems.reduce((agg, currentElement) => {
      return agg + currentElement.quantity;
    }, 0);
    setCartItemCount(itemCount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemsToCart,
    cartItemCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
