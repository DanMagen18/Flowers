import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.slug}`} className="product-card-image-link">
        <div className="product-card-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-card-image"
          />
        </div>
      </Link>

      <div className="product-card-content">
        <div className="product-card-header">
          <Link to={`/product/${product.slug}`}>
            <h3 className="product-card-title">{product.name}</h3>
          </Link>
          <span className="product-card-category">{product.category}</span>
        </div>

        <p className="product-card-description">{product.shortDescription}</p>

        <div className="product-card-footer">
          <span className="product-card-price">{product.price}</span>
          <Button to={`/product/${product.slug}`} size="small">
            פרטים נוספים
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
