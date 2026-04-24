import { Order } from '../interfaces/orders.interface';

/**
 * Datos de órdenes de ejemplo para pruebas y desarrollo.
 * Estos datos se utilizan para simular la respuesta de la API REST
 * y permitir el desarrollo de la interfaz de usuario sin depender
 * de un backend real.
 *
 * Cada objeto en el array representa una orden con información como
 * el id, customerName, product, quantity, total, status y date.
 *
 * @remarks
 * Estos datos son estáticos y no cambian durante la ejecución de la aplicación.
 * Se recomienda utilizarlos solo para propósitos de desarrollo y pruebas, y no deben
 * ser utilizados en producción.
 *
 * @example
 * ```ts
 * import { ORDERS_MOCK } from './orders.mocks';
 * console.log(ORDERS_MOCK);
 * ```
 */
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
