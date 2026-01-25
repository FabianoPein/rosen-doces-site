import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext'; // Importando o carrinho
import { ShoppingCart } from 'lucide-react';
import imgLuisen from '../assets/luisenKekse.png';
import imgNatal from '../assets/doces-natal.jpg';
import imgMelado from '../assets/doces-melado.jpg';
import imgMel from '../assets/doces-mel.jpg';
import imgNinho from '../assets/doces-leite-ninho.jpg';
import imgRosquinha from '../assets/doces-redondinha.jpg';
import imgFerradura from '../assets/doces-ferradura.jpg';
import imgGoiabinha from '../assets/doces-goiabinha.jpg';


const Products = () => {
  const [filter, setFilter] = useState<string>('todos');
  const { addToCart } = useCart(); // Hook para usar a função

  // LISTA DE PRODUTOS COM PREÇOS REAIS
  const products: Product[] = [
    {
      id: 'luisen',
      name: 'Luisenkekse',
      description: 'A receita que viajou da Alemanha direto para nossa família!',
      category: 'doces-finos',
      price: 15.00, // Adicionei preço
      image: imgLuisen
    },
    {
      id: 'natal',
      name: 'Bolacha de Natal',
      description: 'Os ramos do pinheiro 🎄 simbolizam resistência, vitalidade e renovação, pois mantém suas folhas verdes durante o ano todo, mesmo nas estações mais frias',
      category: 'biscoitos',
      price: 12.00, // Adicionei preço
      image: imgNatal
    },
    {
      id: 'melado',
      name: 'Bolacha de Melado',
      description: 'Bolacha de melado, uma receita que une sabores intensos e a doçura natural do melado. Essa iguaria conquista paladares há gerações 🥰',
      category: 'biscoitos',
      price: 12.00, // Adicionei preço
      image: imgMelado
    },
    {
      id: 'mel',
      name: 'Bolacha de Mel',
      description: 'Feitas com a receita tradicional da família, nossas bolachas de mel trazem o sabor e o aconchego das origens.',
      category: 'biscoitos',
      price: 12.00,
      image: imgMel
    },
    {
      id: 'ninho',
      name: 'Cookies de Leite Ninho',
      description: 'Conheça essa novidade deliciosa.',
      category: 'doces-finos',
      price: 15.00,
      image: imgNinho
    },
    {
      id: 'redondinha',
      name: 'Rosquinha de Chocolate',
      description: 'Rosquinhas amanteigadas com cobertura de chocolate.',
      category: 'doces-finos',
      price: 15.00, 
      image: imgRosquinha
    },
    {
      id: 'ferradura',
      name: 'Ferradura de Chocolate',
      description: 'Ferraduras amanteigadas com as pontas cobertas de chocolate.',
      category: 'doces-finos',
      price: 15.00,
      image: imgFerradura
    },
    {
      id: 'goiabinha',
      name: 'Amanteigados com Goiabada',
      description: 'Um café quentinho e nossas clássicas bolachinhas de goiabinha — a combinação perfeita pra adoçar o dia! ❤️',
      category: 'biscoitos',
      price: 12.00,
      image: imgGoiabinha
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
      <section className="bg-[#C95A54] py-16 text-center text-white mb-12">
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