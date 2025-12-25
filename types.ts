
export type Category = 'Chicken' | 'Pizza' | 'Burgers' | 'Sides' | 'Drinks';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  popular?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderDetails {
  customerName: string;
  phone: string;
  email: string;
  deliveryType: 'Dine-in' | 'Takeaway' | 'Hotel-Delivery';
  roomNumber?: string;
  paymentMethod: string;
}
