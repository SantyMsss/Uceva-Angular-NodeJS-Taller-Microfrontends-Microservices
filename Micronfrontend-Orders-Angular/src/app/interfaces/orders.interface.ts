/**
 * Estado posible de un pedido.
 *
 * @remarks
 * Representa el ciclo de vida de un pedido dentro del sistema.
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: OrderStatus = 'Pending';
 * ```
 */
export type OrderStatus =
  | 'Pending'
  | 'Processing'
  | 'Shipped'
  | 'Delivered'
  | 'Cancelled';

/**
 * Interfaz que representa un pedido del sistema.
 *
 * @remarks
 * Contiene la información básica para mostrar un pedido
 * en la tabla o en cualquier componente de listado.
 *
 * @example
 * ```ts
 * const pedido: Order = {
 *   id: 1,
 *   customerName: 'Carlos Ramírez',
 *   product: 'Laptop Dell XPS',
 *   quantity: 2,
 *   total: 2500000,
 *   status: 'Pending',
 *   date: '2026-04-14'
 * };
 * ```
 */
export interface Order {
  /** Identificador único del pedido */
  id: number;

  /** Nombre del cliente que realizó el pedido */
  customerName: string;

  /** Nombre del producto pedido */
  product: string;

  /** Cantidad de unidades pedidas */
  quantity: number;

  /** Valor total del pedido */
  total: number;

  /** Estado actual del pedido */
  status: OrderStatus;

  /** Fecha en que se realizó el pedido (formato YYYY-MM-DD) */
  date: string;
}
