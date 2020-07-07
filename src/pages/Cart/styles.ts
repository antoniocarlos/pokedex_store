import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  min-width: 500px;
  max-height: calc(100vh - 150px);

  background: #a3a3a3;
`;

export const ProductContainer = styled.div`
  border-radius: 5px;
  flex: 1;
  flex-direction: row;

  height: calc(100vh - 200px);

  padding: 16px;
  overflow: auto;
`;

export const ProductList = styled.div`
  flex: 1;
  padding: 0 10px;
`;

export const Product = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  background: #fff;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 5px;
  flex: 1;
  flex-direction: row;
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.4);
`;

export const ProductImage = styled.img`
  margin-right: 16px;
  height: 92px;
  width: 92px;
`;

export const ProductTitleContainer = styled.div`
  font-size: 16px;
  margin-left: 5px;
`;

export const ProductTitle = styled.p`
  font-size: 16px;
`;

export const ProductPriceContainer = styled.div`
  flex-direction: column;
`;

export const TotalContainer = styled.div`
  flex-direction: row;
  margin-top: 8px;
`;

export const ProductSinglePrice = styled.p`
  font-size: 12px;
  color: #a0a0b3;
  margin-top: 8px;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  margin-top: 5px;

  font-size: 16px;
  color: #e83f5b;
`;

export const ProductQuantity = styled.p`
  font-weight: bold;
  margin-top: 5px;
  margin-right: 10px;

  font-size: 16px;
  color: #e83f5b;
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
`;

export const ActionButton = styled.button`
  background: #fff;
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
  border-radius: 50%;
  border: 0;
`;

export const TotalProductsContainer = styled.div`
  position: absolute;
  bottom: 0px;

  flex-direction: row;
  background: #e83f5b;

  padding: 20px 40px;
  justify-content: space-between;
  align-items: center;
`;

export const TotalProductsText = styled.p`
  font-size: 16px;
  color: #fff;

  flex: 1;
  font-weight: bold;
`;

export const SubtotalValue = styled.p`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
