import React, { useState } from 'react';
import { Product } from '../types';

const Products = () => {
  const [filter, setFilter] = useState<string>('todos');

  // Removed prices from the local data representation for the view
  const products: Omit<Product, 'price'>[] = [
    {
      id: 'stollen',
      name: 'Stollen Tradicional',
      description: 'Pão doce alemão com frutas cristalizadas e marzipã.',
      category: 'bolos',
      image: 'https://picsum.photos/400/400?random=11'
    },
    {
      id: 'gugelhupf',
      name: 'Gugelhupf',
      description: 'Bolo tradicional austríaco com formato característico.',
      category: 'bolos',
      image: 'https://picsum.photos/400/400?random=12'
    },
    {
      id: 'lebkuchen',
      name: 'Lebkuchen Tradicional',
      description: 'Biscoitos de gengibre com especiarias alemãs autênticas.',
      category: 'biscoitos',
      image: 'https://picsum.photos/400/400?random=13'
    },
    {
      id: 'zimtsterne',
      name: 'Zimtsterne',
      description: 'Biscoitos de canela em formato de estrela.',
      category: 'biscoitos',
      image: 'https://picsum.photos/400/400?random=14'
    },
    {
      id: 'torta-floresta',
      name: 'Schwarzwälder Kirschtorte',
      description: 'Tradicional torta da Floresta Negra com cerejas.',
      category: 'tortas',
      image: 'https://picsum.photos/400/400?random=15'
    },
    {
      id: 'strudel',
      name: 'Strudel de Maçã',
      description: 'Massa folhada crocante com recheio de maçãs e canela.',
      category: 'tortas',
      image: 'https://picsum.photos/400/400?random=16'
    },
    {
      id: 'marzipa',
      name: 'Marzipã Artesanal',
      description: 'Doce de amêndoas moldado à mão em formatos tradicionais.',
      category: 'doces-finos',
      image: 'https://picsum.photos/400/400?random=17'
    },
    {
      id: 'pralines',
      name: 'Pralinés Alemães',
      description: 'Chocolates finos com recheios tradicionais.',
      category: 'doces-finos',
      image: 'https://picsum.photos/400/400?random=18'
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'bolos', label: 'Bolos' },
    { id: 'biscoitos', label: 'Biscoitos' },
    { id: 'tortas', label: 'Tortas' },
    { id: 'doces-finos', label: 'Doces Finos' }
  ];

  const filteredProducts = filter === 'todos' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="pb-20">
      {/* Page Hero */}
      <section className="bg-rosen-wine py-16 text-center text-white mb-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Nossos Produtos</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Descubra os sabores únicos da tradição alemã em nossos doces artesanais
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full border-2 transition-all font-medium ${
                filter === cat.id
                  ? 'bg-rosen-brown text-white border-rosen-brown'
                  : 'bg-transparent text-rosen-brown border-rosen-brown hover:bg-rosen-brown hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
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