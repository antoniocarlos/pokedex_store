import React, { useMemo } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  Container,
  CartPricing,
  CartButtonText,
  CartTotalPrice,
} from './styles';

import formatValue from '../../utils/formatValue';

import { useCart } from '../../hooks/cart';

const FloatingCart: React.FC = () => {
  const { products } = useCart();

  const cartTotal = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const subTotal = product.price * product.quantity;
      return accumulator + subTotal;
    }, 0);

    return formatValue(total);
  }, [products]);

  const totalItensInCart = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0);

    return total;
  }, [products]);

  return (
    <Container>
      <Link to="/cart">
        <FiShoppingCart size={24} color="#fff" />

        <CartButtonText>{`${totalItensInCart} itens`}</CartButtonText>
      </Link>

      <CartPricing>
        <CartTotalPrice>{cartTotal}</CartTotalPrice>
      </CartPricing>
    </Container>
  );
};

export default FloatingCart;
