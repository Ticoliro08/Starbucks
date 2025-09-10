import { Product } from '@/contexts/CartContext';
import starbucksCoffee from '@/assets/starbucks-coffee-1.jpg';
import starbucksFrappuccino from '@/assets/starbucks-frappuccino.jpg';
import starbucksCroissant from '@/assets/starbucks-croissant.jpg';

export const products = [
  // Coffee
  {
    id: '1',
    name: 'Americano',
    description: 'Café expresso suave e encorpado, preparado com grãos torrados na medida certa.',
    price: 12.90,
    image: starbucksCoffee,
    category: 'coffee',
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Espresso cremoso com leite vaporizado e uma camada generosa de espuma.',
    price: 15.90,
    image: starbucksCoffee,
    category: 'coffee',
  },
  {
    id: '3',
    name: 'Latte',
    description: 'Combinação perfeita de espresso com leite vaporizado e um toque de espuma.',
    price: 16.90,
    image: starbucksCoffee,
    category: 'coffee',
  },
  {
    id: '4',
    name: 'Macchiato Caramelo',
    description: 'Espresso com leite vaporizado, finalizado com calda de caramelo e chantilly.',
    price: 18.90,
    image: starbucksCoffee,
    category: 'coffee',
  },

  // Cold Drinks
  {
    id: '5',
    name: 'Frappuccino Caramelo',
    description: 'Bebida gelada cremosa com café, leite, gelo e calda de caramelo.',
    price: 22.90,
    image: starbucksFrappuccino,
    category: 'cold-drinks',
  },
  {
    id: '6',
    name: 'Frappuccino Chocolate',
    description: 'Mistura irresistível de café, chocolate, leite e gelo, coberto com chantilly.',
    price: 24.90,
    image: starbucksFrappuccino,
    category: 'cold-drinks',
  },
  {
    id: '7',
    name: 'Cold Brew',
    description: 'Café extraído a frio por 20 horas, resultado em sabor suave e refrescante.',
    price: 14.90,
    image: starbucksFrappuccino,
    category: 'cold-drinks',
  },
  {
    id: '8',
    name: 'Iced Latte',
    description: 'Espresso gelado com leite cremoso, perfeito para dias quentes.',
    price: 17.90,
    image: starbucksFrappuccino,
    category: 'cold-drinks',
  },

  // Desserts
  {
    id: '9',
    name: 'Croissant de Chocolate',
    description: 'Croissant artesanal recheado com chocolate belga de alta qualidade.',
    price: 8.90,
    image: starbucksCroissant,
    category: 'desserts',
  },
  {
    id: '10',
    name: 'Muffin de Blueberry',
    description: 'Muffin fofinho repleto de mirtilos frescos e cobertura crocante.',
    price: 9.90,
    image: starbucksCroissant,
    category: 'desserts',
  },
  {
    id: '11',
    name: 'Cheesecake',
    description: 'Fatia cremosa de cheesecake com calda de frutas vermelhas.',
    price: 12.90,
    image: starbucksCroissant,
    category: 'desserts',
  },
  {
    id: '12',
    name: 'Cookie Chocolate Chip',
    description: 'Cookie tradicional com pedaços generosos de chocolate.',
    price: 6.90,
    image: starbucksCroissant,
    category: 'desserts',
  },
];