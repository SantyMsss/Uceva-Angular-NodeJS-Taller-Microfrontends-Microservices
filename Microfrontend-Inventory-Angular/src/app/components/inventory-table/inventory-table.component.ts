import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { InventoryMovement, Inventory } from '../../interfaces/inventory.interface';

/**
 * Componente de tabla de inventario.
 * 
 * Se utiliza para mostrar un listado de inventario en una tabla,
 * mostrando información como nombre del producto, cantidad disponible, moviento del producto, fecha de vencimiento 
 * y un badge visual que indica el estado del producto, como por ejemplo si está próximo a vencer o si está agotado.
 * 
 * @remarks
 * Este componente recibirá los datos del inventario desde un componente padre
 * a través de un Input (a implementar) y utilizará un mapeo para asignar colores a los badges según el estado del producto.
 * 
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 * 
 * @example
 * ```html
 * <app-inventory-table [inventory]="inventoryList"></app-inventory-table>
 * 
 * ```
 */
@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class InventoryTableComponent {
  /**
   * Listado de inventario que se mostrarán en la tabla.
   * @type {Inventory[]}
   * @remarks
   * Este Input permite pasar un array de inventario desde un componente padre,
   * generalmente `ListInventoryComponent`. Cada inventario debe cumplir la interfaz `Inventory`.
   */

  @Input() inventory: Inventory[] = [];

  /**
   * Mapeo de estados de inventario a tipos de Badge.
   * @type {Record<InventoryMovement, BadgeType>}
   * @remarks
   * Este mapeo asigna un tipo de badge según el estado del producto en el inventario.
   * - 'entrada' → 'success' (verde)
   * - 'salida' → 'danger' (rojo)
   * - 'ajuste' → 'warning' (amarillo)
   * 
   * Esto permite que en la tabla cada producto tenga un badge visual que indique su estado
   * de forma clara para el usuario.
   */
  inventoryMap: Record<InventoryMovement, BadgeType> = {
    'entrada': 'success',
    'salida': 'danger',
    'ajuste': 'warning',
 
  };
}
