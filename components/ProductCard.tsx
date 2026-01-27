import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  showBuyButton?: boolean; // <--- NOVA PROPRIEDADE OPCIONAL
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showBuyButton = true }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name} 
          // ADICIONADO: decoding="async" ajuda a não bloquear a renderização
          decoding="async"
          loading="lazy"
          width="400"  // Adicionado: valor base para ajudar o navegador
          height="300" // Adicionado
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col h-full min-h-[160px]">
        <div className="flex-1">
          <h3 className="font-serif text-lg font-bold text-rosen-dark mb-2 leading-tight">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* SÓ MOSTRA SE showBuyButton FOR VERDADEIRO (O padrão é true) */}
        {showBuyButton && (
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <span className="text-xl font-bold text-rosen-wine">
              {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
            <button 
              onClick={() => addToCart(product)}
              className="bg-rosen-gold text-rosen-brown p-2 rounded-full hover:bg-yellow-500 transition-colors shadow-sm"
              title="Adicionar ao Carrinho"
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductCard;