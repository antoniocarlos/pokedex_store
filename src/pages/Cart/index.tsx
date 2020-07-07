import React, { useMemo } from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import {
  Container,
  ProductContainer,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductSinglePrice,
  TotalContainer,
  ProductPrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
  TotalProductsText,
  SubtotalValue,
} from './styles';

import { useCart } from '../../hooks/cart';

import ResumeCart from '../../components/ResumeCart';

import formatValue from '../../utils/formatValue';

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const { increment, decrement, products } = useCart();

  function handleIncrement(id: string): void {
    increment(id);
  }

  function handleDecrement(id: string): void {
    decrement(id);
  }

  const cartTotal = useMemo(() => {
    const totalValue = products.reduce((accumulator, product) => {
      const subTotal = product.price * product.quantity;

      return accumulator + subTotal;
    }, 0);
    // O reduce sabe qual é o tipo do accumulator pelo tipo de variavelinicial

    return formatValue(totalValue);
  }, [products]);

  const totalItensInCart = useMemo(() => {
    const totalValue = products.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0);

    return totalValue;
  }, [products]);

  return (
    <Container>
      <ProductContainer>
        {products.map((item) => (
          <Product key={item.title}>
            <ProductImage src={item.imageUrl} />
            <ProductTitleContainer>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPriceContainer>
                <ProductSinglePrice>
                  {formatValue(item.price)}
                </ProductSinglePrice>

                <TotalContainer>
                  <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>

                  <ProductPrice>
                    {formatValue(item.price * item.quantity)}
                  </ProductPrice>
                </TotalContainer>
              </ProductPriceContainer>
            </ProductTitleContainer>
            <ActionContainer>
              <ActionButton
                // testID={`increment-${item.id}`}
                onClick={() => handleIncrement(item.id)}
              >
                <FiPlusCircle color="#E83F5B" size={20} />
              </ActionButton>
              <ActionButton
                // testID={`decrement-${item.id}`}
                onClick={() => handleDecrement(item.id)}
              >
                <FiMinusCircle color="#E83F5B" size={20} />
              </ActionButton>
            </ActionContainer>
          </Product>
        ))}
      </ProductContainer>
      <ResumeCart>
        <TotalProductsText>{`${totalItensInCart} itens`}</TotalProductsText>
        <SubtotalValue>{cartTotal}</SubtotalValue>
      </ResumeCart>
    </Container>
  );
};

export default Cart;
