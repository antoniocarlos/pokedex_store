import styled from 'styled-components';

import { shade } from 'polished';

// export const Header = styled.header``;

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;

export const MainContainer = styled.div`
  flex: 2 1;
  min-width: 700px;
  padding: 16px;
  background-color: #e6e6e6;

  min-height: calc(100vh - 150px);
  overflow: auto;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// export const ProductList = styled(
//   FlatList as new () => FlatList<Product>,
// ).attrs({
//   numColumns: 2,
// })`
//   flex: 1;
//   padding: 0 10px;
// `;

export const Product = styled.div`
  background: #fff;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 8px;
  max-width: 500px;
  flex: 1;
  box-shadow: 0px 2px 6px -2px rgba(0, 0, 0, 0.4);
`;

export const ProductImage = styled.img`
  height: 122px;
  width: 122px;
  align-self: center;
`;

export const ProductTitle = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

export const PriceContainer = styled.div`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #e83f5b;
`;

export const ProductButton = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
