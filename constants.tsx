
import { Product } from './types';

export const RESTAURANT_CONFIG = {
  name: 'Crazy Chicken',
  whatsapp: '+25676646667',
  email: 'allanemudeck@gmail.com',
  location: 'Kampala, Uganda',
  currency: 'UGX',
};

export const MENU_ITEMS: Product[] = [
  {
    id: '1',
    name: 'Full Grilled Chicken',
    description: 'Slow-roasted to perfection with our secret spice blend.',
    price: 45000,
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: '2',
    name: 'Family Sized Pizza',
    description: 'Rich cheesy toppings with pepperoni and fresh veggies.',
    price: 65000,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=80',
    popular: true
  },
  {
    id: '3',
    name: '2pcs Fried Chicken & Chips',
    description: 'Crispy fried chicken served with golden salted chips.',
    price: 18000,
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    name: 'Supreme Beef Burger',
    description: 'Double patty, caramelised onions, and special sauce.',
    price: 25000,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Full Platter Mega Mix',
    description: 'Ideal for groups: Chicken, burgers, chips, and drinks.',
    price: 150000,
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    name: 'African Tea (Ginger)',
    description: 'Traditional Ugandan spiced tea with fresh milk and hand-crushed ginger.',
    price: 8000,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: '7',
    name: 'Whole Milk Tea',
    description: 'Creamy and satisfying classic milk tea, perfected over generations.',
    price: 12000,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc458695d6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    name: 'Spiced Black Tea',
    description: 'Warm blend of local spices and premium tea leaves.',
    price: 6000,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '11',
    name: 'Tea & Biscuits Combo',
    description: 'Our famous milk tea served with classic crispy biscuits.',
    price: 15000,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1544787210-2213d84ad964?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '12',
    name: 'Classic Coca Cola',
    description: 'Refreshingly cold 500ml PET bottle of the original taste.',
    price: 4000,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '13',
    name: 'Fanta Orange',
    description: 'Bright and bubbly orange soda to sparkle up your meal.',
    price: 4000,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '14',
    name: 'Sprite',
    description: 'Crisp, refreshing lemon-lime soda (500ml).',
    price: 4000,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1625772290748-3912a1ca2a7c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '15',
    name: 'Fresh Orange Juice',
    description: '100% freshly squeezed Ugandan oranges, chilled to perfection.',
    price: 10000,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: '16',
    name: 'Tropical Pineapple Juice',
    description: 'Sweet and tangy juice made from hand-picked ripe pineapples.',
    price: 10000,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1596463059283-da257325bee8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '17',
    name: 'Sweet Mango Juice',
    description: 'Thick and luscious mango nectar, a true tropical delight.',
    price: 12000,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '18',
    name: 'Mixed Fruit Blast',
    description: 'A vibrant blend of seasonal fruits for the ultimate health kick.',
    price: 15000,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    name: 'Large Golden Chips',
    description: 'Crispy on the outside, fluffy on the inside.',
    price: 10000,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '10',
    name: 'VIP Hotel Banquet Package',
    description: 'The ultimate feast for corporate or luxury hotel dining.',
    price: 450000,
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80'
  }
];
