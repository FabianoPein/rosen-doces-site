import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';

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
              A história da Rosen começou na pequena cidade alemã de Baden-Württemberg, 
              onde nossa bisavó Rosa desenvolvia receitas que conquistavam toda a vizinhança. 
              Suas técnicas tradicionais e o carinho especial que colocava em cada doce 
              tornaram-se a base da nossa identidade.
            </p>
            <p>
              Quando a família imigrou para o Brasil, trouxe consigo não apenas as receitas, 
              mas toda a paixão pela arte da confeitaria alemã. Cada geração adaptou-se ao 
              novo lar, mas sempre manteve viva a essência dos sabores tradicionais.
            </p>
            <p>
              Hoje, continuamos essa tradição com o mesmo amor e dedicação, preparando 
              cada doce artesanalmente e mantendo vivos os segredos familiares que tornam 
              nossos produtos únicos e especiais.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://picsum.photos/400/500?random=30" 
              alt="Cozinha Antiga" 
              className="rounded-lg shadow-lg w-full h-full object-cover transform translate-y-8"
            />
            <img 
              src="https://picsum.photos/400/500?random=31" 
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