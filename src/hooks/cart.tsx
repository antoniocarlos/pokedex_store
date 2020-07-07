import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

interface Product {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
  resetCart(): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    function loadProducts(): void {
      const storageProducts = localStorage.getItem('@GoMarketplace:products');

      if (storageProducts) {
        setProducts([...JSON.parse(storageProducts)]);
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    (product) => {
      const productExist = products.find((p) => p.id === product.id);

      if (productExist) {
        setProducts(
          products.map((p) =>
            p.id === product.di
              ? { ...product, quantity: product.quantity + 1 }
              : p,
          ),
        );
      } else {
        setProducts([...products, { ...product, quantity: 1 }]);
      }
      localStorage.setItem('@GoMarketplace:products', JSON.stringify(products));
    },
    [products],
  );

  const increment = useCallback(
    (id) => {
      const newProduct = products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );

      setProducts(newProduct);

      localStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(newProduct),
      );
    },
    [products],
  );

  const decrement = useCallback(
    (id) => {
      const interProduct = products.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      });
      setProducts(interProduct.filter((p) => p.quantity > 0));
      localStorage.setItem('@GoMarketplace:products', JSON.stringify(products));
    },
    [products],
  );

  const resetCart = useCallback(() => {
    const interProducts: Product[] = [];
    setProducts(interProducts);
    localStorage.setItem(
      '@GoMarketplace:products',
      JSON.stringify(interProducts),
    );
  }, []);

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, resetCart, products }),
    [products, addToCart, increment, decrement, resetCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
