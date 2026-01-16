import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';
import doceiras from '../assets/doceiras-tradicao.png';
import docesTradicionais from '../assets/doces-tradicionais.png';

const About = () => {
  return (
    <div className="pb-20">
      <section className="bg-rosen-brown py-16 text-center text-white mb-12">
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
          <div className="space-y-6 text-rosen-muted leading-relaxed">
            <h2 className="font-serif text-3xl font-bold text-rosen-dark">Tradição que Atravessa Gerações</h2>
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
          {/* Mudança aqui: grid-cols-1 para celular, md:grid-cols-2 para computador */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
              src={docesTradicionais} 
              alt="Nossos doces" 
              className="rounded-lg shadow-lg w-full h-full object-cover md:transform md:translate-y-8"
            />
            <img 
              src={doceiras}
              alt="Doceiras Atuais" 
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl p-12 shadow-xl mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-rosen-dark mb-4">Nossos Valores</h2>
            <p className="text-rosen-muted">Os princípios que guiam nossa paixão</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-rosen-wine/10 text-rosen-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Tradição</h3>
              <p className="text-sm text-gray-600">Receitas familiares preservadas há gerações</p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-rosen-gold/10 text-rosen-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Qualidade</h3>
              <p className="text-sm text-gray-600">Ingredientes selecionados e processos artesanais</p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-rosen-brown/10 text-rosen-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Família</h3>
              <p className="text-sm text-gray-600">Negócio familiar com valores humanos</p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Dedicação</h3>
              <p className="text-sm text-gray-600">Tempo e cuidado em cada criação</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-rosen-wine rounded-2xl p-12 text-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-6">Nosso Compromisso</h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg opacity-90">
            Continuamos comprometidos em preservar a autenticidade da tradição alemã, 
            criando momentos especiais através dos nossos doces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-rosen-gold mb-2">100%</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Artesanal</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rosen-gold mb-2">4+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Gerações</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rosen-gold mb-2">1000+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Clientes Felizes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;