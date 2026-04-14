import { Order } from '../interfaces/orders.interface';

export const ORDERS_MOCK: Order[] = [
  {
    id: 1,
    customerName: 'Carlos Ramírez',
    product: 'Laptop Dell XPS',
    quantity: 1,
    total: 4500000,
    status: 'Pending',
    date: '2026-04-10',
  },
  {
    id: 2,
    customerName: 'Ana Gómez',
    product: 'Monitor Samsung 27"',
    quantity: 2,
    total: 1800000,
    status: 'Delivered',
    date: '2026-04-12',
  },
];
