import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Phone, MapPin, Mail, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';
import logoSite from '../assets/logo-rosen-site.webp';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { cart, toggleCart } = useCart(); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/novidades', label: 'Novidades' },
    { path: '/contato', label: 'Contato' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    // Fundo Creme Harmonizado e Texto "Café" (#3B110F)
    <div className="min-h-screen flex flex-col bg-[#FDF6F0] font-sans text-[#3B110F]">
      
      {/* --- HEADER (Cor Principal #8D2924) --- */}
      <header className="sticky top-0 z-40 bg-[#8D2924] shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          
          {/* Brand - COM LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logoSite} 
              alt="Rosen Doces Artesanais" 
              // ADICIONADO: width e height explícitos para o navegador reservar espaço
              width="200" 
              height="64"
              className="h-12 md:h-16 w-auto object-contain transition-transform hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#E6B325] ${
                  isActive(link.path) ? 'text-[#E6B325] border-b-2 border-[#E6B325]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5547992210556"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-colors mr-2"
              title="Fale conosco no WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>

            {/* Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
              aria-label="Abrir menu principal"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (Fundo Café) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#3B110F] border-t border-white/20">
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 px-4 text-white hover:bg-white/10 rounded transition-colors ${
                    isActive(link.path) ? 'text-[#E6B325] font-bold' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* --- FOOTER (Tom Escuro Harmônico #3B110F) --- */}
      <footer className="bg-[#3B110F] text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            {/* 1. Brand */}
            <div>
              <h3 className="font-serif text-xl mb-4 text-[#E6B325]">Rosen Doces Artesanais</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Tradição alemã em doces artesanais. Cada receita carrega gerações de história e sabor.
              </p>
            </div>

            {/* 2. Links */}
            <div>
              <h4 className="font-serif text-lg mb-4 text-[#E6B325]">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-[#E6B325] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Contact */}
            <div>
              <h4 className="font-serif text-lg mb-4 text-[#E6B325]">Contato</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#E6B325] shrink-0 mt-0.5" />
                  <span>Tv. Leopoldo Kühlewein, 199<br />Testo Central, Pomerode - SC</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#E6B325] shrink-0" />
                  <span>(47) 99221-0556</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[#E6B325] shrink-0" />
                  <span>contato@rosen.com.br</span>
                </li>
              </ul>
            </div>

            {/* 4. Redes Sociais */}
            <div>
              <h4 className="font-serif text-lg mb-4 text-[#E6B325]">Redes Sociais</h4>
              <p className="text-sm text-gray-300 mb-4">Acompanhe nossas novidades e bastidores:</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/rosendoceriaartesanal" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-white/10 p-2 rounded-full text-white hover:text-[#3B110F] hover:bg-[#E6B325] transition-all duration-300"
                  title="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/rosendoceria/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-white/10 p-2 rounded-full text-white hover:text-[#3B110F] hover:bg-[#E6B325] transition-all duration-300"
                  title="Instagram"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
            <p className="text-xs text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Rosen Doces Artesanais. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <CartSidebar />

      {/* Botão Flutuante do CARRINHO (#E6B325 - Dourado) */}
      <button 
        onClick={toggleCart} 
        className="fixed bottom-6 right-6 bg-[#E6B325] text-[#3B110F] p-4 rounded-full shadow-2xl hover:bg-[#FFD700] transition-transform hover:scale-110 z-40 group"
        aria-label="Abrir carrinho de compras"
      >
        <ShoppingCart size={28} />
        
        {/* Badge contador de itens (#8D2924) */}
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#8D2924] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-in zoom-in">
            {totalItems}
          </span>
        )}
      </button>

    </div>
  );
};

export default Layout;