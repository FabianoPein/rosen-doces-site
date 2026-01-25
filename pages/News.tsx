import React from 'react';
import { Calendar, User, Clock, Share2 } from 'lucide-react';
import { BlogPost } from '../types';

const News = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Especiarias Alemãs: O Segredo dos Nossos Sabores",
      date: "15/01/2025",
      category: "Curiosidades",
      author: "Rosen",
      readTime: "5 min",
      excerpt: "Descubra como as especiarias tradicionais alemãs transformam nossos doces em experiências únicas de sabor.",
      content: [
        "As especiarias são a alma da confeitaria alemã. Cada receita tradicional carrega consigo uma combinação única de sabores.",
        "Na Rosen, utilizamos especiarias importadas diretamente da Alemanha, garantindo a autenticidade que nossos clientes merecem.",
        "O segredo está não apenas na qualidade das especiarias, mas também no conhecimento de como combiná-las."
      ]
    },
    {
      id: 2,
      title: "Nova Linha de Doces Sazonais de Inverno",
      date: "10/01/2025",
      category: "Novos Produtos",
      author: "Rosen",
      readTime: "3 min",
      excerpt: "Apresentamos nossa coleção especial de doces para o inverno, com sabores que aquecem o coração.",
      content: [
        "O inverno chegou e com ele nossa linha especial de doces sazonais!",
        "Destacamos o novo Glühwein Kuchen, um bolo inspirado no tradicional vinho quente alemão.",
        "Todos os doces desta linha utilizam ingredientes sazonais e receitas que remetem às tradições de inverno."
      ]
    },
    {
      id: 3,
      title: "A Arte do Marzipã: Tradição que Se Molda",
      date: "05/01/2024",
      category: "Tradição",
      author: "Rosen",
      readTime: "7 min",
      excerpt: "Conheça a história e as técnicas por trás da criação dos nossos marzipãs artesanais.",
      content: [
        "O marzipã é uma das confecções mais nobres da tradição alemã.",
        "Na Rosen, cada peça de marzipã é moldada à mão, seguindo técnicas centenárias.",
        "Além do sabor incomparável, nossos marzipãs são verdadeiras obras de arte comestíveis."
      ]
    }
  ];

  const handleShare = (title: string) => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Link copiado para a área de transferência!');
    }
  };

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'Curiosidades': return 'bg-rosen-gold/20 text-rosen-brown';
      case 'Novos Produtos': return 'bg-rosen-wine/20 text-rosen-wine';
      default: return 'bg-rosen-brown/20 text-rosen-brown';
    }
  };

  return (
    <div className="pb-20">
      <section className="bg-[#C95A54] py-16 text-center text-white mb-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Novidades & Curiosidades</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Fique por dentro das tradições, novos sabores e histórias da culinária alemã.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          {posts.map(post => (
            <article key={post.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                <span className={`px-3 py-1 rounded-full font-bold ${getCategoryColor(post.category)}`}>
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-gray-500">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <User size={14} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h2 className="font-serif text-3xl font-bold text-rosen-dark mb-4 hover:text-rosen-wine transition-colors cursor-pointer">
                {post.title}
              </h2>

              <div className="prose max-w-none text-gray-600 mb-8 space-y-4">
                {post.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-6 flex justify-between items-center">
                <span className="text-sm text-gray-400">Gostou? Compartilhe!</span>
                <button 
                  onClick={() => handleShare(post.title)}
                  className="flex items-center gap-2 text-rosen-wine hover:text-rosen-brown font-medium transition-colors"
                >
                  <Share2 size={18} />
                  Compartilhar
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-20 bg-rosen-brown rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="font-serif text-3xl font-bold mb-4">Não Perca Nenhuma Novidade</h2>
          <p className="mb-8 opacity-90 max-w-lg mx-auto">
            Assine nossa newsletter e receba em primeira mão sobre novos sabores, 
            promoções especiais e curiosidades da tradição alemã.
          </p>
          <form className="max-w-md mx-auto flex gap-2" onSubmit={(e) => { e.preventDefault(); alert('Inscrito com sucesso!'); }}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-rosen-gold"
              required 
            />
            <button type="submit" className="bg-rosen-gold text-rosen-brown font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors">
              Inscrever
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default News;