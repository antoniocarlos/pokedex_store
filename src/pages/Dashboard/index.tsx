import React, { useState, useEffect } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import formatValue from '../../utils/formatValue';
import { useCart } from '../../hooks/cart';
import Cart from '../Cart';
import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  MainContainer,
  ProductContainer,
  ProductImage,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
} from './styles';

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
}

interface Results {
  name: string;
  url: string;
}

interface Response {
  next: string;
  previous: string | null;
  results: Results[];
}

const Dashboard: React.FC = () => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get<Response>('pokemon/?offset=0&limit=12');

      let id = 0;

      const listProducts: Product[] = response.data.results.map((pokemon) => {
        const product = {
          id: String(id),
          title: pokemon.name,
          price: (id + 1) * 101,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            id + 1
          }.png`,
        };

        id += 1;

        return product;
      });

      setProducts(listProducts);
    }

    loadProducts();
  }, []);

  function handleAddToCart(item: Product): void {
    addToCart(item);
  }

  return (
    <Container>
      <Header />
      <MainContainer>
        <ProductContainer>
          {products.map((item) => (
            <Product key={item.title}>
              <ProductImage src={item.imageUrl} />
              <ProductTitle>{item.title}</ProductTitle>
              <PriceContainer>
                <ProductPrice>{formatValue(item.price)}</ProductPrice>
                <ProductButton onClick={() => handleAddToCart(item)}>
                  <FiPlusCircle size={20} color="#fff" />
                </ProductButton>
              </PriceContainer>
            </Product>
          ))}
        </ProductContainer>
      </MainContainer>
      <Cart />
    </Container>
  );
};

export default Dashboard;
