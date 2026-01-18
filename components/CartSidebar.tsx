import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useForm, ValidationError } from '@formspree/react';
import { X, Trash2, Plus, Minus, ShoppingBag, AlertCircle, Mail, CheckCircle } from 'lucide-react';

const CartSidebar = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, toggleCart, clearCart } = useCart();
  
  // --- CONFIGURAÇÃO DO FORMSPREE ---
  // Substitua "SEU_ID_FORMSPREE" pelo código real
  const [state, handleSubmit] = useForm("xojjeboa");

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [obs, setObs] = useState('');
  const [showError, setShowError] = useState(false);
  
  useEffect(() => {
    if (state.succeeded) {
      // Opcional: limpar carrinho aqui se desejar
    }
  }, [state.succeeded]);

  if (!isCartOpen) return null;

  // --- FUNÇÕES DE FORMATAÇÃO ---

  const formatMoney = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.substring(0, 11);

    if (value.length > 10) value = value.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    else if (value.length > 5) value = value.replace(/^(\d{2})(\d{4,5})/, "($1) $2-");
    else if (value.length > 2) value = value.replace(/^(\d{2})/, "($1) ");
    else if (value.length > 0) value = value.replace(/^(\d*)/, "($1");
    
    setPhone(value);
  };

  const formatDateBR = (dateString: string) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  // --- PREPARAÇÃO DOS DADOS ---

  const itemsSummary = cart.map(item => 
    `${item.quantity}x ${item.name} (${formatMoney(item.price * item.quantity)})`
  ).join('\n');

  const validateFields = () => {
    const onlyNumbers = phone.replace(/\D/g, "");
    if (!name || onlyNumbers.length < 11 || !date) {
      setShowError(true);
      return false;
    }
    return true;
  };

  // --- AÇÃO 1: WHATSAPP (Manual) ---
  const handleWhatsApp = () => {
    if (!validateFields()) return;

    const EMOJI = {
        user: String.fromCodePoint(0x1F464),
        phone: String.fromCodePoint(0x1F4DE),
        calendar: String.fromCodePoint(0x1F4C5),
        cart: String.fromCodePoint(0x1F6D2),
        money: String.fromCodePoint(0x1F4B0),
        note: String.fromCodePoint(0x1F4DD)
    };

    const message = 
`Olá Rosen! Gostaria de fazer um pedido:

${EMOJI.user} *Nome:* ${name}
${EMOJI.phone} *Telefone:* ${phone}
${EMOJI.calendar} *Data de entrega:* ${formatDateBR(date)}

${EMOJI.cart} *Itens do pedido:*
${cart.map(item => `• ${item.quantity}x ${item.name} - ${formatMoney(item.price * item.quantity)}`).join('\n')}

${EMOJI.money} *Total: ${formatMoney(cartTotal)}*

${EMOJI.note} *Observações:* ${obs || 'Nenhuma'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=5547992210556&text=${encodedMessage}`, '_blank');
    
    clearCart();
    toggleCart(); 
  };

  // --- AÇÃO 2: EMAIL ---
  const handleEmailSubmit = (e: React.FormEvent) => {
    if (!validateFields()) {
      e.preventDefault();
      return;
    }
    handleSubmit(e);
  };

  const handleSuccessClose = () => {
    clearCart();
    toggleCart();
    window.location.reload(); 
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleCart}></div>

      {/* POP-UP SUCESSO E-MAIL */}
      {state.succeeded && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 animate-in fade-in duration-200">
           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
           <div className="relative bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center border-t-4 border-green-500">
             <div className="flex justify-center mb-4"><CheckCircle className="w-12 h-12 text-green-500" /></div>
             <h3 className="font-serif font-bold text-2xl text-rosen-dark mb-2">Pedido Enviado!</h3>
             <p className="text-gray-600 mb-6">Recebemos o seu pedido por e-mail. Entraremos em contato em breve para confirmar.</p>
             <button onClick={handleSuccessClose} className="w-full bg-rosen-wine text-white font-bold py-3 rounded-xl hover:bg-rosen-dark transition-colors">Fechar</button>
           </div>
        </div>
      )}

      {/* POP-UP ERRO */}
      {showError && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowError(false)}></div>
          <div className="relative bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center border-t-4 border-red-500">
            <div className="flex justify-center mb-4"><AlertCircle className="w-10 h-10 text-red-500" /></div>
            <h3 className="font-serif font-bold text-2xl text-rosen-dark mb-2">Dados Incompletos</h3>
            <p className="text-gray-600 mb-6">Por favor, verifique se preencheu o seu <b>nome</b>, a <b>data</b> e o <b>telefone completo</b>.</p>
            <button onClick={() => setShowError(false)} className="w-full bg-rosen-wine text-white font-bold py-3 rounded-xl hover:bg-rosen-dark transition-colors">Voltar e Corrigir</button>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div className="relative w-full max-w-md bg-white h-[100dvh] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        <div className="p-5 bg-rosen-wine text-white flex justify-between items-center shadow-md flex-none">
          <h2 className="text-xl font-serif font-bold flex items-center gap-2"><ShoppingBag size={20} /> Seu Pedido</h2>
          <button onClick={toggleCart} className="hover:text-rosen-gold"><X size={24} /></button>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col">
            <div className="flex-1 p-5 space-y-4">
            {cart.length === 0 ? (
                <div className="text-center text-gray-500 mt-10">
                <p>Seu carrinho está vazio 🥨</p>
                <button onClick={toggleCart} className="mt-4 text-rosen-wine font-bold hover:underline">Voltar aos produtos</button>
                </div>
            ) : (
                cart.map(item => (
                <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                    <h3 className="font-bold text-rosen-dark text-sm">{item.name}</h3>
                    <p className="text-rosen-wine font-bold text-sm">{formatMoney(item.price)}</p>
                    <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"><Minus size={14} /></button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"><Plus size={14} /></button>
                        <button onClick={() => removeFromCart(item.id)} className="ml-auto text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                    </div>
                    </div>
                </div>
                ))
            )}
            </div>

            {cart.length > 0 && (
            <form onSubmit={handleEmailSubmit} className="p-5 bg-gray-50 border-t border-gray-200 space-y-3 flex-none">
                <h3 className="font-bold text-rosen-dark mb-2">Dados para entrega:</h3>
                
                <input type="text" name="nome" placeholder="Seu Nome *" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 border rounded-lg text-sm focus:border-rosen-gold outline-none focus:ring-1 focus:ring-rosen-gold" />
                
                <div className="grid grid-cols-2 gap-2">
                    <input type="tel" name="telefone" maxLength={15} placeholder="(47) 99999-9999" value={phone} onChange={handlePhoneChange} 
                        className={`w-full p-2 border rounded-lg text-sm focus:outline-none focus:ring-1 ${phone.length > 0 && phone.replace(/\D/g, "").length < 11 ? "border-red-300 focus:border-red-500 focus:ring-red-200" : "focus:border-rosen-gold focus:ring-rosen-gold"}`} />
                    <input type="date" name="data_entrega" value={date} onChange={e => setDate(e.target.value)} className="w-full p-2 border rounded-lg text-sm focus:border-rosen-gold outline-none focus:ring-1 focus:ring-rosen-gold" />
                </div>
                
                <textarea name="observacoes" placeholder="Observações (opcional)" rows={2} value={obs} onChange={e => setObs(e.target.value)} className="w-full p-2 border rounded-lg text-sm resize-none focus:border-rosen-gold outline-none focus:ring-1 focus:ring-rosen-gold" />

                <input type="hidden" name="resumo_pedido" value={itemsSummary} />
                <input type="hidden" name="total_pagar" value={formatMoney(cartTotal)} />

                <div className="flex justify-between items-center py-2 text-lg font-bold text-rosen-dark">
                    <span>Total:</span>
                    <span>{formatMoney(cartTotal)}</span>
                </div>

                <div className="space-y-3 pt-2">
                    {/* Botão WhatsApp - Sempre visível */}
                    <button 
                        type="button" 
                        onClick={handleWhatsApp}
                        className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                        Enviar Pedido no WhatsApp 📲
                    </button>

                    {/* Divisória - SÓ NO DESKTOP (hidden md:flex) */}
                    <div className="hidden md:flex relative py-1 items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase">ou envie por e-mail</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* Botão E-mail - SÓ NO DESKTOP (hidden md:flex) */}
                    <button 
                        type="submit"
                        disabled={state.submitting}
                        className="hidden md:flex w-full bg-rosen-brown text-white py-3 rounded-xl font-bold hover:bg-rosen-wine transition-colors shadow items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {state.submitting ? 'Enviando...' : <><Mail size={18} /> Enviar Pedido por E-mail</>}
                    </button>
                </div>
                <div className="h-6 md:hidden"></div>
            </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;