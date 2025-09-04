import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const { id, name, price, inStock } = product;

  const className = `${styles.card} ${!inStock ? `${styles.outOfStockClass} outOfStockClass` : ''}`;

  return (
    <div className={className}>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
};

export default ProductCard;