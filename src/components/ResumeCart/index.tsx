import React from 'react';

import { FiShoppingCart } from 'react-icons/fi';
import { Container, Info, Submit } from './styles';
import { useCart } from '../../hooks/cart';
import { useToast } from '../../hooks/toast';

const ResumeCart: React.FC = ({ children }) => {
  const { resetCart } = useCart();
  const { addToast } = useToast();

  function handleClick(): void {
    resetCart();
    addToast({
      type: 'success',
      title: 'Compra efetuada',
      description: 'Compra efetuada com sucesso. Volte sempre!',
    });
  }

  return (
    <Container>
      <Submit type="button" onClick={() => handleClick()}>
        <FiShoppingCart size={24} color="#fff" />
        <p>COMPRAR!</p>
      </Submit>
      <Info>{children}</Info>
    </Container>
  );
};

export default ResumeCart;
