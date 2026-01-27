import { Product } from '../types';
import imgLuisen from '../assets/doces-luisenKekse.webp';
import imgNatal from '../assets/doces-natal.webp';
import imgMelado from '../assets/doces-melado.webp';
import imgMel from '../assets/doces-mel.webp';
import imgNinho from '../assets/doces-leite-ninho.webp';
import imgRosquinha from '../assets/doces-redondinha.webp';
import imgFerradura from '../assets/doces-ferradura.webp';
import imgGoiabinha from '../assets/doces-goiabinha.webp';

export const productsList: Product[] = [
  {
    id: 'luisen',
    name: 'Luisenkekse',
    description: 'A receita que viajou da Alemanha direto para nossa família!',
    category: 'doces-finos',
    price: 15.00,
    image: imgLuisen
  },
  
  {
    id: 'natal',
    name: 'Bolacha de Natal',
    description: 'Os ramos do pinheiro 🎄 simbolizam resistência, vitalidade e renovação, pois mantém suas folhas verdes durante o ano todo, mesmo nas estações mais frias',
    category: 'biscoitos',
    price: 12.00,
    image: imgNatal
  },

  {
    id: 'melado',
    name: 'Bolacha de Melado',
    description: 'Bolacha de melado, uma receita que une sabores intensos e a doçura natural do melado. Essa iguaria conquista paladares há gerações 🥰',
    category: 'biscoitos',
    price: 12.00,
    image: imgMelado
  },
  
  {
    id: 'mel',
    name: 'Bolacha de Mel',
    description: 'Feitas com a receita tradicional da família, nossas bolachas de mel trazem o sabor e o aconchego das origens.',
    category: 'biscoitos',
    price: 12.00,
    image: imgMel
  },
  
  {
    id: 'ninho',
    name: 'Cookies de Leite Ninho',
    description: 'Conheça essa novidade deliciosa.',
    category: 'doces-finos',
    price: 15.00,
    image: imgNinho
  },
  
  {
    id: 'redondinha',
    name: 'Rosquinha de Chocolate',
    description: 'Rosquinhas amanteigadas com cobertura de chocolate.',
    category: 'doces-finos',
    price: 15.00, 
    image: imgRosquinha
  },
  
  {
    id: 'ferradura',
    name: 'Ferradura de Chocolate',
    description: 'Ferraduras amanteigadas com as pontas cobertas de chocolate.',
    category: 'doces-finos',
    price: 15.00,
    image: imgFerradura
  },
  
  {
    id: 'goiabinha',
    name: 'Amanteigados com Goiabada',
    description: 'Um café quentinho e nossas clássicas bolachinhas de goiabinha — a combinação perfeita pra adoçar o dia! ❤️',
    category: 'biscoitos',
    price: 12.00,
    image: imgGoiabinha
  }

];