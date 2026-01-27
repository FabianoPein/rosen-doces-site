import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Importar
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import News from './pages/News';
import Contact from './pages/Contact';

// --- NOVIDADE 1: Imports do Toastify ---
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // O CSS obrigatório

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <CartProvider> {/* Envolvendo tudo aqui */}

      {/* --- NOVIDADE 2: O Componente que exibe as notificações --- */}
      {/* Configurei para ficar no canto inferior direito, estilo "App Moderno" */}
      <ToastContainer 
        position="bottom-right"
        autoClose={3000} // Fecha sozinho em 3 segundos
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // Fica mais bonito com cores sólidas
        aria-label="Notificações do Sistema"
      />

      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/novidades" element={<News />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </Layout>
      </HashRouter>
    </CartProvider>
  );
};

export default App;