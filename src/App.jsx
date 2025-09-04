import { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 200, inStock: true },
    { id: 2, name: 'Phone',  price: 50, inStock: false },
    { id: 3, name: 'Tablet', price: 100, inStock: true },
  ]);

  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <h1>Product Dashboard</h1>
      <ProductList products={products} onRemove={handleRemove} />
    </>
  );
};

export default App;