import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {ShoppingIcon, CartIconContainer, Itemcount} from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <Itemcount>{cartCount}</Itemcount>
    </CartIconContainer>
  );
};

export default CartIcon;