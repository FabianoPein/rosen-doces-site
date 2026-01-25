import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send, CheckCircle, X } from 'lucide-react';

const Contact = () => {
  // O teu código do Formspree continua aqui
  const [state, handleSubmit] = useForm("mwvvedza"); 

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* --- INICIO DO POP-UP (MODAL) --- */}
      {state.succeeded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Fundo escuro transparente (Backdrop) */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => window.location.reload()} // Fecha se clicar fora
          ></div>

          {/* O Cartão do Pop-up */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform transition-all scale-100 border-t-4 border-rosen-wine">
            {/* Botão X para fechar no canto */}
            <button 
              onClick={() => window.location.reload()}
              className="absolute top-4 right-4 text-gray-400 hover:text-rosen-wine transition-colors"
            >
              <X size={24} />
            </button>

            {/* Ícone Animado e Texto */}
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="text-green-600 w-12 h-12" />
              </div>
            </div>
            
            <h2 className="text-2xl font-serif font-bold text-rosen-wine mb-2">
              Mensagem Recebida! 🍬
            </h2>
            <p className="text-gray-600 mb-8">
              Obrigado pelo seu contato. A nossa equipe de confeiteiros irá responder o mais breve possível.
            </p>

            <button 
              onClick={() => window.location.reload()}
              className="w-full bg-rosen-wine text-white font-bold py-3 px-6 rounded-lg hover:bg-rosen-gold transition-colors shadow-lg"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      {/* --- FIM DO POP-UP --- */}

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-rosen-wine mb-4">Entre em Contato</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Quer fazer uma encomenda especial ou tem alguma dúvida? Estamos à disposição.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Formulário de Contato */}
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-rosen-wine mb-6">Envie uma Mensagem</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosen-gold focus:border-transparent outline-none transition-all"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input
                id="email"
                type="email" 
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosen-gold focus:border-transparent outline-none transition-all"
                placeholder="seu@email.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosen-gold focus:border-transparent outline-none transition-all resize-none"
                placeholder="Como podemos ajudar?"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-rosen-wine hover:bg-rosen-gold text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? (
                  "Enviando..."
              ) : (
                  <>
                      Enviar Mensagem <Send size={18} />
                  </>
              )}
            </button>
          </form>
        </div>

        {/* Map & Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-1 min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5009269388934!2d-49.16233802654556!3d-26.82401533798795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dee256cc52a205%3A0xa13cb460328cc635!2sTv.%20K%C3%BChlewein%2C%20199%2C%20Pomerode%20-%20SC%2C%2089107-000!5e0!3m2!1spt-BR!2sbr!4v1768152215546!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Rosen Doces"
            ></iframe>
          </div>
          
          <div className="bg-rosen-wine text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-xl mb-2 text-rosen-gold">Visite-nos</h3>
            <p className="opacity-90">
              Estamos localizados na Rota do Imigrante, em Testo Central - Pomerode, em um ambiente acolhedor 
              onde você pode conhecer nossos produtos e sentir o aroma dos doces tradicionais alemães.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


//  SE OPTAR PELO FUNDO ROSA NO INÍCIO, AQUI ESTÁ O CÓDIGO ANTERIOR:
// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// import { Mail, Phone, MapPin, Send, CheckCircle, X } from 'lucide-react';

// const Contact = () => {
//   const [state, handleSubmit] = useForm("mwvvedza"); 

//   return (
//     // 1. Container principal ajustado (removemos o padding fixo do topo para o header encostar)
//     <div className="bg-[#FDF6F0] pb-20">
      
//       {/* --- INICIO DO POP-UP (MODAL) --- */}
//       {state.succeeded && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
//           <div 
//             className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
//             onClick={() => window.location.reload()}
//           ></div>

//           <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform transition-all scale-100 border-t-4 border-rosen-wine">
//             <button 
//               onClick={() => window.location.reload()}
//               className="absolute top-4 right-4 text-gray-400 hover:text-rosen-wine transition-colors"
//             >
//               <X size={24} />
//             </button>

//             <div className="flex justify-center mb-6">
//               <div className="bg-green-100 p-4 rounded-full">
//                 <CheckCircle className="text-green-600 w-12 h-12" />
//               </div>
//             </div>
            
//             <h2 className="text-2xl font-serif font-bold text-rosen-wine mb-2">
//               Mensagem Recebida! 🍬
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Obrigado pelo seu contato. A nossa equipe de confeiteiros irá responder o mais breve possível.
//             </p>

//             <button 
//               onClick={() => window.location.reload()}
//               className="w-full bg-rosen-wine text-white font-bold py-3 px-6 rounded-lg hover:bg-rosen-gold transition-colors shadow-lg"
//             >
//               Fechar
//             </button>
//           </div>
//         </div>
//       )}
//       {/* --- FIM DO POP-UP --- */}

//       {/* 2. NOVA SECÇÃO HERO (Cabeçalho) 
//          - Fundo com a cor #C95A54
//          - Texto branco para contraste
//          - Ocupa toda a largura da tela
//       */}
//       <section className="bg-[#C95A54] py-16 text-center text-white mb-12 shadow-lg">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Entre em Contato</h1>
//           <p className="text-lg opacity-90 max-w-2xl mx-auto">
//             Quer fazer uma encomenda especial ou tem alguma dúvida? Estamos à disposição.
//           </p>
//         </div>
//       </section>

//       {/* 3. Container para o conteúdo restante (Formulário e Mapa) */}
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
//           {/* Formulário de Contato */}
//           <div className="bg-white p-8 rounded-2xl shadow-xl">
//             <h2 className="text-2xl font-bold text-rosen-wine mb-6">Envie uma Mensagem</h2>
//             <form onSubmit={handleSubmit} className="space-y-6">
              
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
//                 <input
//                   id="name"
//                   type="text"
//                   name="name"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosen-gold focus:border-transparent outline-none transition-all"
//                   placeholder="Seu nome"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
//                 <input
//                   id="email"
//                   type="email" 
//                   name="email"
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosen-gold focus:border-transparent outline-none transition-all"
//                   placeholder="seu@email.com"
//                 />
//                 <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosen-gold focus:border-transparent outline-none transition-all resize-none"
//                   placeholder="Como podemos ajudar?"
//                 />
//                 <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
//               </div>

//               <button
//                 type="submit"
//                 disabled={state.submitting}
//                 className="w-full bg-rosen-wine hover:bg-rosen-gold text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {state.submitting ? (
//                     "Enviando..."
//                 ) : (
//                     <>
//                         Enviar Mensagem <Send size={18} />
//                     </>
//                 )}
//               </button>
//             </form>
//           </div>

//           {/* Map & Info */}
//           <div className="flex flex-col gap-6">
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-1 min-h-[400px]">
//               <iframe 
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5009269388934!2d-49.16233802654556!3d-26.82401533798795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dee256cc52a205%3A0xa13cb460328cc635!2sTv.%20K%C3%BChlewein%2C%20199%2C%20Pomerode%20-%20SC%2C%2089107-000!5e0!3m2!1spt-BR!2sbr!4v1768152215546!5m2!1spt-BR!2sbr" 
//                 width="100%" 
//                 height="100%" 
//                 style={{ border: 0, minHeight: '400px' }} 
//                 allowFullScreen 
//                 loading="lazy" 
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Localização Rosen Doces"
//               ></iframe>
//             </div>
            
//             <div className="bg-rosen-wine text-white p-6 rounded-2xl shadow-lg">
//               <h3 className="font-bold text-xl mb-2 text-rosen-gold">Visite-nos</h3>
//               <p className="opacity-90">
//                 Estamos localizados na Rota do Imigrante, em Testo Central - Pomerode, em um ambiente acolhedor 
//                 onde você pode conhecer nossos produtos e sentir o aroma dos doces tradicionais alemães.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;