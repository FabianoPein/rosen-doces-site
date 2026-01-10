import React, { useState } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { 
    cart, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal,
    clearCart
  } = useCart();
  
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerName || !customerPhone || !deliveryDate) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const itemsList = cart.map(item => 
      `• ${item.quantity}x ${item.name} (R$ ${(item.price * item.quantity).toFixed(2)})`
    ).join('\n');

    const message = `Olá Rosen! Gostaria de fazer um pedido:
    
👤 *Nome:* ${customerName}
📞 *Telefone:* ${customerPhone}
📅 *Data Desejada:* ${new Date(deliveryDate).toLocaleDateString('pt-BR')}

🛒 *Itens:*
${itemsList}

💰 *Total:* R$ ${cartTotal.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5547992210556?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    clearCart();
    toggleCart();
    setShowOrderForm(false);
  };

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 bg-rosen-brown text-white flex justify-between items-center shadow-md">
            <h2 className="font-serif text-xl">Seu Carrinho</h2>
            <button onClick={toggleCart} className="hover:text-rosen-gold transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center text-gray-500 mt-10">
                <p>Seu carrinho está vazio.</p>
                <button 
                  onClick={toggleCart}
                  className="mt-4 text-rosen-wine underline font-medium"
                >
                  Ver produtos
                </button>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-rosen-dark">{item.name}</h3>
                    <p className="text-rosen-gold font-bold">R$ {item.price.toFixed(2)}</p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-500 hover:text-rosen-wine"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-500 hover:text-rosen-wine"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600"
                        aria-label="Remover item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Checkout */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="font-serif text-lg text-rosen-dark">Total</span>
              <span className="font-bold text-xl text-rosen-wine">R$ {cartTotal.toFixed(2)}</span>
            </div>

            {cart.length > 0 && (
              !showOrderForm ? (
                <button
                  onClick={() => setShowOrderForm(true)}
                  className="w-full bg-rosen-brown text-white py-3 rounded-lg font-medium hover:bg-rosen-wine transition-colors"
                >
                  Finalizar Pedido
                </button>
              ) : (
                <form onSubmit={handleCheckout} className="space-y-3 animate-in fade-in slide-in-from-bottom-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
                    <input 
                      type="text" 
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rosen-gold focus:ring focus:ring-rosen-gold focus:ring-opacity-50 p-2 border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Telefone</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="(99) 99999-9999"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rosen-gold focus:ring focus:ring-rosen-gold focus:ring-opacity-50 p-2 border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Data de Entrega</label>
                    <input 
                      type="date" 
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rosen-gold focus:ring focus:ring-rosen-gold focus:ring-opacity-50 p-2 border"
                    />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => setShowOrderForm(false)}
                      className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-300"
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 flex items-center justify-center gap-2"
                    >
                      Enviar no WhatsApp
                    </button>
                  </div>
                </form>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;