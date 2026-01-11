import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-doces-alemanes.png';
import doceiras from '../assets/doceiras-tradicao.png';
import imgRedondinha from '../assets/doces-redondinha.jpg';
import imgMelado from '../assets/doces-melado.jpg';
import imgNatal from '../assets/doces-natal.jpg';

const Home = () => {
  const highlights = [
    {
      id: 'rosquinha-chocolate',
      name: 'Rosquinha de Chocolate',
      description: 'Doces amanteigados com cobertura de chocolate ao leite.',
      image: imgRedondinha,
      category: 'biscoitos' as const
    },
    {
      id: 'doce-melado',
      name: 'Doce de Melado',
      description: 'Uma receita que une sabores intensos e a doçura do melado.',
      image: imgMelado,
      category: 'biscoitos' as const
    },
    {
      id: 'doce-natal',
      name: 'Doce de Natal',
      description: 'Símbolo de resistência, vitalidade e renovação.',
      image: imgNatal,
      category: 'biscoitos' as const
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Regina Kleinschmidt',
      text: 'Os doces da Rosen me transportam para a Alemanha! O Lebkuchen é simplesmente perfeito, igual ao que minha avó fazia. Qualidade excepcional!',
      since: 'Cliente desde 2022'
    },
    {
      id: 2,
      name: 'Frau Just',
      text: 'Encomendei para uma festa e todos os convidados perguntaram de onde eram os doces. A apresentação e o sabor são impecáveis. Super recomendo!',
      since: 'Cliente desde 2023'
    },
    {
      id: 3,
      name: 'Helga Müller',
      text: 'Sou alemã e posso afirmar: estes são os doces mais autênticos que encontrei no Brasil. A Rosen preserva a verdadeira tradição!',
      since: 'Cliente desde 2021'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg}
            alt="Doces Alemães Artesanais" 
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-shadow-lg leading-tight">
            Tradição Alemã em <span className="text-rosen-gold">Cada Doce!</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Doces artesanais feitos com carinho, seguindo receitas tradicionais alemãs passadas de geração em geração.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/produtos" 
              className="bg-rosen-gold text-rosen-brown font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors transform hover:-translate-y-1 shadow-lg"
            >
              Nossos Produtos
            </Link>
            <Link 
              to="/contato"
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-rosen-brown transition-colors transform hover:-translate-y-1"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-rosen-dark mb-4">Nossos Destaques</h2>
            <p className="text-rosen-muted text-lg">Conheça alguns dos nossos doces mais apreciados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {highlights.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-rosen-brown mb-2">{product.name}</h3>
                  <p className="text-rosen-muted text-sm mb-4 min-h-[40px]">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/produtos" className="inline-flex items-center gap-2 text-rosen-wine font-bold border-b-2 border-rosen-wine hover:text-rosen-gold hover:border-rosen-gold transition-colors pb-1">
              Ver todos os produtos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-br from-rosen-cream to-[#f0e6d2]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src={doceiras}
                  alt="Doceiras Rosen" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-rosen-gold p-6 rounded-lg shadow-lg hidden md:block">
                  <p className="font-serif text-rosen-brown font-bold text-2xl">80+ Anos</p>
                  <p className="text-sm text-rosen-brown">de tradição</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif text-4xl font-bold text-rosen-dark mb-6">Nossa História</h2>
              <p className="text-rosen-muted mb-6 leading-relaxed">
                A Rosen nasceu do amor pela tradição alemã e pela arte de fazer doces. 
                Cada receita que preparamos vem de gerações passadas, trazendo o sabor 
                autêntico da Alemanha para sua casa.
              </p>
              <p className="text-rosen-muted mb-8 leading-relaxed">
                Trabalhamos apenas com ingredientes selecionados e seguimos métodos 
                artesanais que garantem a qualidade e o sabor único dos nossos produtos.
              </p>
              <Link to="/sobre" className="bg-rosen-wine text-white px-8 py-3 rounded-lg hover:bg-rosen-brown transition-colors inline-block">
                Conheça Nossa História
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-rosen-dark mb-4">O Que Dizem Nossos Clientes</h2>
            <p className="text-rosen-muted">Experiências reais de quem já provou nossos doces</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.id} className="bg-rosen-cream/30 p-8 rounded-xl border border-rosen-gold/20">
                <div className="flex gap-1 text-rosen-gold mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-rosen-dark italic mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-rosen-brown">{t.name}</p>
                  <p className="text-xs text-rosen-muted">{t.since}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;