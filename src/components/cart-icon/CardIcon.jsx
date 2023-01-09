import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../asserts/shopping-bag.svg';

import { CartContext } from '../../context/card.context';
import './cart-icon.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;