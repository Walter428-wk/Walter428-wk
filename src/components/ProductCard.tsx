import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-w-3 aspect-h-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.isNewArrival && (
            <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
              NEW
            </span>
          )}
          {hasDiscount && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
              -{discountPercentage}%
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2 capitalize">{product.category}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">${product.price}</span>
              {hasDiscount && (
                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
            
            {/* Color swatches */}
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border-2 border-gray-300"
                  style={{
                    backgroundColor: color.toLowerCase().includes('white') ? '#ffffff' :
                                   color.toLowerCase().includes('black') ? '#000000' :
                                   color.toLowerCase().includes('gray') ? '#6b7280' :
                                   color.toLowerCase().includes('blue') ? '#3b82f6' :
                                   color.toLowerCase().includes('red') ? '#ef4444' :
                                   color.toLowerCase().includes('green') ? '#10b981' :
                                   color.toLowerCase().includes('pink') ? '#ec4899' :
                                   '#8b5cf6'
                  }}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;