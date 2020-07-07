import React from 'react';

import { FiShoppingCart } from 'react-icons/fi';
import { Container, Info, Submit } from './styles';
import { useCart } from '../../hooks/cart';

const ResumeCart: React.FC = ({ children }) => {
  const { resetCart } = useCart();

  function handleClick(): void {
    resetCart();
  }

  return (
    <Container>
      <Submit type="button" onClick={() => handleClick()}>
        <FiShoppingCart size={24} color="#fff" />
        FINALIZAR COMPRA!
      </Submit>
      <Info>{children}</Info>
    </Container>
  );
};

export default ResumeCart;
