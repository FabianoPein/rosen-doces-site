import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // Importando o carrinho
import { ShoppingCart } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { productsList } from '../data/products';


const Products = () => {
  const [filter, setFilter] = useState<string>('todos');
  const { addToCart } = useCart(); // Hook para usar a função

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'bolos', label: 'Bolos' },
    { id: 'biscoitos', label: 'Biscoitos' },
    { id: 'tortas', label: 'Tortas' },
    { id: 'doces-finos', label: 'Doces Finos' }
  ];
  
  // Lógica de filtro usando a lista importada (productsList)
  const filteredProducts = filter === 'todos' 
    ? productsList 
    : productsList.filter(p => p.category === filter);

  return (
    <div className="pb-20">
      <PageHero 
        title="Nossos Produtos" 
        subtitle="Descubra os sabores únicos da tradição alemã em nossos doces artesanais." 
      />

      <div className="container mx-auto px-4">
  
  {/* Filters */}
  <div className="flex flex-wrap justify-center gap-4 mb-12">
    {categories.map(cat => (
      <button
        key={cat.id}
        onClick={() => setFilter(cat.id)}
        className={`px-6 py-2 rounded-full border-2 transition-all font-medium ${
          filter === cat.id
            /* ESTADO ATIVO (CLICADO): Fundo e Borda com a nova cor #C95A54 */
            ? 'bg-[#C95A54] text-white border-[#8D2924]'
            
            /* ESTADO INATIVO: Texto e Borda com a nova cor, Fundo transparente */
            /* HOVER: Ao passar o mouse, preenche com a nova cor */
            : 'bg-transparent text-[#C95A54] border-[#8D2924] hover:bg-[#C95A54] hover:text-white'
        }`}
      >
        {cat.label}
      </button>
    ))}
  </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col h-full min-h-[160px]">
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-bold text-rosen-dark mb-2 leading-tight">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>

                {/* Preço e Botão */}
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

              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            Nenhum produto encontrado nesta categoria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;