import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { Order, OrderStatus } from '../../interfaces/orders.interface';

/**
 * Componente de tabla de pedidos.
 *
 * Se utiliza para mostrar un listado de pedidos en una tabla,
 * mostrando información como id, cliente, producto, cantidad, total,
 * estado (con badge visual) y fecha.
 *
 * @remarks
 * Este componente recibe los pedidos desde un componente padre
 * a través del Input `orders` y utiliza el mapeo `statusMap`
 * para asignar colores a los badges según el estado del pedido.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-orders-table [orders]="ordersList"></app-orders-table>
 * ```
 */
@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  imports: [BadgeAtom, DecimalPipe],
})
export class OrdersTableComponent {
  /**
   * Listado de pedidos que se mostrarán en la tabla.
   * @type {Order[]}
   * @remarks
   * Este Input permite pasar un array de pedidos desde un componente padre,
   * generalmente `OrdersPage`. Cada pedido debe cumplir la interfaz `Order`.
   */
  @Input() orders: Order[] = [];

  /**
   * Mapeo de estados de pedidos a tipos de Badge.
   * @type {Record<OrderStatus, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada estado:
   * - 'Pending'    → 'warning'   (amarillo)
   * - 'Processing' → 'primary'   (azul)
   * - 'Shipped'    → 'secondary' (gris)
   * - 'Delivered'  → 'success'   (verde)
   * - 'Cancelled'  → 'danger'    (rojo)
   */
  statusMap: Record<OrderStatus, BadgeType> = {
    'Pending':    'warning',
    'Processing': 'primary',
    'Shipped':    'secondary',
    'Delivered':  'success',
    'Cancelled':  'danger',
  };
}
