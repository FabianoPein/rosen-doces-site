import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';
// 1. Importar o toast
import { toast } from 'react-toastify'

// Definindo o formato do Item no Carrinho
export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  isCartOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Adicionar item
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        // Se já existe, só avisa que aumentou a quantidade
        toast.info(`+1 ${product.name} no carrinho!`, {
          style: { backgroundColor: '#FDF6F0', color: '#3B110F', borderLeft: '4px solid #C95A54' }
        });

        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

  // 2. DISPARAR O TOAST DE SUCESSO
      // Aqui personalizamos para ficar com a cor da marca
      toast.success(`${product.name} adicionado!`, {
        style: { backgroundColor: '#C95A54', color: '#fff' }, // Fundo Vinho
      });

      return [...prev, { ...product, quantity: 1 }];
    });
    
    // Opcional: Se quiser abrir o carrinho automaticamente, descomenta a linha abaixo
    // setIsCartOpen(true); 
  };    


  // Remover item
  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
    toast.error('Produto removido.', { position: 'bottom-left' });
  };

  // Atualizar quantidade
  const updateQuantity = (id: string, qty: number) => {
    if (qty < 1) return;
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  const clearCart = () => {
    setCart([]);
    toast.warn('Carrinho esvaziado.');
  };
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Calcular Total
  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, isCartOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart deve ser usado dentro de um CartProvider');
  return context;
};