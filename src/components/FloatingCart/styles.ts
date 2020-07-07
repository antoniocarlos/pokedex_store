import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  top: 0px;
  left: 0px;
  background: #e83f5b;
  height: 150px;
  padding: 0 20px;
  align-items: center;
`;

export const CartPricing = styled.p`
  padding: 20px;
`;

export const CartTotalPrice = styled.p`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const CartButton = styled.button`
  flex-direction: row;
  background: #e83f5b;

  flex: 1;
  padding: 20px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const CartButtonText = styled.p`
  font-weight: bold;
  color: #fff;
  margin-left: 15px;
  flex: 1;
  margin-right: auto;
`;
