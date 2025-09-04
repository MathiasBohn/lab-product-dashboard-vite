import ProductCard from './ProductCard';

const ProductList = ({ products = [], onRemove }) => {
  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onRemove={onRemove} />
      ))}
    </>
  );
};

export default ProductList;