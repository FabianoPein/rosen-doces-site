import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá Rosen! Tenho uma mensagem através do site:
    
👤 *Nome:* ${formData.name}
📧 *E-mail:* ${formData.email}
📞 *Telefone:* ${formData.phone}
📋 *Assunto:* ${formData.subject}

💬 *Mensagem:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/5547992210556?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="pb-20">
      <section className="bg-rosen-dark py-16 text-center text-white mb-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contato</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos tornar seu momento ainda mais doce.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-rosen-cream text-rosen-brown rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-rosen-brown">Endereço</h3>
            <p className="text-sm text-gray-600">Tv. Leopoldo Kühlewein, 199<br/>Testo Central<br/>Pomerode, SC</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-rosen-cream text-rosen-brown rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-rosen-brown">Telefone</h3>
            <p className="text-sm text-gray-600">(47) 99221-0556<br/>Segunda a Sábado</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-rosen-cream text-rosen-brown rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-rosen-brown">E-mail</h3>
            <p className="text-sm text-gray-600">contato@rosen.com.br<br/>Respondemos em 24h</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:-translate-y-2 transition-transform">
            <div className="w-12 h-12 bg-rosen-cream text-rosen-brown rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-rosen-brown">Horários</h3>
            <p className="text-sm text-gray-600">Seg a Sex: 8h às 18h<br/>Sábado: 8h às 15h</p>
          </div>
        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl font-bold text-rosen-dark">Envie sua Mensagem</h2>
              <p className="text-gray-500">Ficaremos felizes em atendê-lo</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                  <input type="text" id="name" required onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosen-gold focus:border-transparent outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                  <input type="email" id="email" required onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosen-gold focus:border-transparent outline-none" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <input type="tel" id="phone" onChange={handleChange} placeholder="(11) 99999-9999" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosen-gold focus:border-transparent outline-none" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto *</label>
                  <select id="subject" required onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosen-gold focus:border-transparent outline-none bg-white">
                    <option value="">Selecione...</option>
                    <option value="duvidas">Dúvidas</option>
                    <option value="orcamento">Orçamento para Eventos</option>
                    <option value="informacoes">Informações</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
                <textarea id="message" rows={5} required onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rosen-gold focus:border-transparent outline-none" placeholder="Como podemos ajudá-lo?"></textarea>
              </div>

              <button type="submit" className="w-full bg-rosen-brown text-white font-bold py-3 rounded-lg hover:bg-rosen-wine transition-colors shadow-lg">
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Map & Info */}
          <div className="flex flex-col">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-1 mb-6 min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.732999999999!2d-49.1769!3d-26.9111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzUzLjIiUyA0NsKwMzknMjAuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
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
    </div>
  );
};

export default Contact;