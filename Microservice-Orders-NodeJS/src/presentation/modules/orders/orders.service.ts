import { Order, OrderStatus } from "../../../domain/interfaces/order.interface";
import { faker } from '@faker-js/faker';

/**
 * Servicio encargado de la generación y gestión de pedidos.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar pedidos
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class OrdersService {

  /**
   * Estados posibles de un pedido.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente un estado
   * a cada pedido generado.
   */
  private orderStatuses: OrderStatus[] = [
    'Pending',
    'Processing',
    'Shipped',
    'Delivered',
    'Cancelled',
  ];

  /**
   * Productos de ejemplo para asignar a los pedidos.
   */
  private products: string[] = [
    'Laptop Dell XPS',
    'Monitor Samsung 27"',
    'Teclado Mecánico Logitech',
    'Mouse Inalámbrico HP',
    'Auriculares Sony WH-1000XM5',
    'Cámara Web Logitech C920',
    'Disco Duro SSD 1TB',
    'Memoria RAM 16GB',
    'Tarjeta Gráfica RTX 4060',
    'Smartphone Samsung Galaxy S24',
  ];

  /**
   * Obtiene un listado de pedidos generados dinámicamente.
   *
   * @param countOrders Cantidad de pedidos a generar
   * @returns Promesa que resuelve un arreglo de pedidos
   *
   * @example
   * ```ts
   * const orders = await ordersService.getAllOrders(5);
   * ```
   */
  public async getAllOrders(countOrders: number): Promise<Order[]> {
    const orders: Promise<Order>[] = [];

    for (let i = 1; i <= countOrders; i++) {
      orders.push(this.generateOrder(i));
    }

    return Promise.all(orders);
  }

  /**
   * Genera un pedido ficticio.
   *
   * @param id Identificador único del pedido
   * @returns Promesa que resuelve un pedido generado
   */
  private generateOrder(id: number): Promise<Order> {
    const quantity = faker.number.int({ min: 1, max: 10 });
    const unitPrice = faker.number.int({ min: 50000, max: 5000000 });

    return Promise.resolve({
      id,
      customerName: `${faker.person.firstName()} ${faker.person.lastName()}`,
      product: faker.helpers.arrayElement(this.products),
      quantity,
      total: quantity * unitPrice,
      status: faker.helpers.arrayElement(this.orderStatuses),
      date: faker.date.recent({ days: 30 }).toISOString().split('T')[0] as string,
    });
  }
}
