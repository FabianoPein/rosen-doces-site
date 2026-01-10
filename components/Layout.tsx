import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Phone, MapPin, Mail } from 'lucide-react';

const Layout = ({ children }: { children?: React.ReactNode }) => {
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

  return (
    <div className="min-h-screen flex flex-col bg-rosen-cream font-sans text-rosen-dark">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-rosen-brown shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-white font-serif font-bold text-2xl tracking-wider">
              ROSEN
              <span className="block text-xs font-sans font-normal text-rosen-gold tracking-widest uppercase">Doces Artesanais</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 hover:text-rosen-gold ${
                  isActive(link.path) ? 'text-rosen-gold border-b-2 border-rosen-gold' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-rosen-brown border-t border-rosen-wine/30">
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 px-4 text-white hover:bg-rosen-wine/50 rounded transition-colors ${
                    isActive(link.path) ? 'text-rosen-gold font-bold' : ''
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

      {/* Footer */}
      <footer className="bg-rosen-dark text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="font-serif text-xl mb-4 text-rosen-gold">Rosen Doces Artesanais</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Tradição alemã em doces artesanais. Cada receita carrega gerações de história e sabor.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-serif text-lg mb-4 text-rosen-gold">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path} className="hover:text-rosen-gold transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg mb-4 text-rosen-gold">Contato</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-rosen-gold shrink-0 mt-0.5" />
                  <span>Tv. Leopoldo Kühlewein, 199<br />Testo Central, Pomerode - SC</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-rosen-gold shrink-0" />
                  <span>(47) 99221-0556</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-rosen-gold shrink-0" />
                  <span>contato@rosen.com.br</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Rosen Doces Artesanais. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-rosen-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-rosen-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5547992210556"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 z-30"
        aria-label="Fale conosco no WhatsApp"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default Layout;