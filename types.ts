export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'bolos' | 'biscoitos' | 'tortas' | 'doces-finos';
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  since: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string[];
}