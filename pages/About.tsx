import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';
import doceiras from '../assets/doceiras-tradicao.png';
import docesTradicionais from '../assets/doces-tradicionais.png';

const About = () => {
  return (
    // Fundo Creme Harmonizado (#FDF6F0)
    <div className="bg-[#FDF6F0] pb-20">
      
      {/* Hero Section - COR DA MARCA (#A63E39) */}
      <section className="bg-[#C95A54] py-16 text-center text-white mb-12 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Nossa História</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Uma jornada de tradição, sabor e amor que começou há gerações.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Texto com cor Café Escuro (#3B110F) */}
          <div className="space-y-6 text-[#3B110F] leading-relaxed text-lg">
            <h2 className="font-serif text-3xl font-bold text-[#8D2924]">Tradição que Atravessa Gerações</h2>
            <div className="w-20 h-1 bg-[#E6B325] rounded-full"></div>
            
            <p>
              A nossa história começou de forma simples, em casa. Tudo teve início quando começamos a produzir doces para a família. O sabor caseiro logo conquistou os vizinhos e,
               de pedido em pedido, o hobby virou coisa séria. No começo, unimos forças com os parentes, mas o destino tinha outros planos. Com a crescente demanda aqui em Testo Central, 
               decidimos focar na nossa comunidade e abrir nosso próprio espaço. Desde 1996, o que era uma produção caseira se transformou oficialmente na Rosen Doces Artesanais.              
            </p>
            <p>
              O segredo das nossas receitas vem de muito antes de 1996. É uma herança trazida pelos nossos imigrantes. Nossa mãe aprendeu a confeitaria
               com a Oma, que aprendeu com a bisavó, que aprendeu com a tataravó, essa em questão também era doceira. Produzimos desde os clássicos amanteigados, bolacha de Natal, 
               rosquinhas de chocolate, até resgatamos receitas antigas e raras como o Schneekuchen. Também inovamos com novos queridinhos, como os Cookies de Leite Ninho, mas sem nunca perder a essência.
               Recentemente começamos a produzir o Luisenkekse.
            </p>
            <p>   
              Hoje, continuamos essa tradição com o mesmo amor e dedicação, preparando 
              cada doce artesanalmente e mantendo vivos os segredos familiares que tornam 
              nossos produtos únicos e especiais.
            </p>
          </div>
          
          {/* Imagens (Mantendo layout responsivo) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
              src={docesTradicionais} 
              alt="Nossos doces" 
              className="rounded-lg shadow-xl w-full h-full object-cover md:transform md:translate-y-8 border-4 border-white"
            />
            <img 
              src={doceiras}
              alt="Doceiras Atuais" 
              className="rounded-lg shadow-xl w-full h-full object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* Values - Cards Brancos com Ícones na Paleta */}
        <div className="bg-white rounded-2xl p-12 shadow-xl mb-20 border-t-4 border-[#E6B325]">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#3B110F] mb-4">Nossos Valores</h2>
            <p className="text-gray-600">Os princípios que guiam nossa paixão</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Tradição (Vinho) */}
            <div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-[#8D2924]/10 text-[#8D2924] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#8D2924] group-hover:text-white transition-colors">
                <Heart size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#3B110F]">Tradição</h3>
              <p className="text-sm text-gray-600">Receitas familiares preservadas há gerações</p>
            </div>

            {/* Card 2: Qualidade (Dourado) */}
            <div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-[#E6B325]/10 text-[#E6B325] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#E6B325] group-hover:text-white transition-colors">
                <Award size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#3B110F]">Qualidade</h3>
              <p className="text-sm text-gray-600">Ingredientes selecionados e processos artesanais</p>
            </div>

            {/* Card 3: Família (Café) */}
            <div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-[#3B110F]/10 text-[#3B110F] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#3B110F] group-hover:text-white transition-colors">
                <Users size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#3B110F]">Família</h3>
              <p className="text-sm text-gray-600">Negócio familiar com valores humanos</p>
            </div>

            {/* Card 4: Dedicação (Vinho de novo, substituindo o azul) */}
            <div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow group">
              <div className="w-16 h-16 bg-[#8D2924]/10 text-[#8D2924] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#8D2924] group-hover:text-white transition-colors">
                <Clock size={28} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#3B110F]">Dedicação</h3>
              <p className="text-sm text-gray-600">Tempo e cuidado em cada criação</p>
            </div>
          </div>
        </div>

        {/* Stats - Fundo Vinho (#8D2924) e Números Dourados (#E6B325) */}
        <div className="bg-[#8D2924] rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="font-serif text-3xl font-bold mb-6">Nosso Compromisso</h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg opacity-90">
            Continuamos comprometidos em preservar a autenticidade da tradição alemã, 
            criando momentos especiais através dos nossos doces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#E6B325] mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Artesanal</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#E6B325] mb-2">4+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Gerações</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#E6B325] mb-2">1000+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Clientes Felizes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;