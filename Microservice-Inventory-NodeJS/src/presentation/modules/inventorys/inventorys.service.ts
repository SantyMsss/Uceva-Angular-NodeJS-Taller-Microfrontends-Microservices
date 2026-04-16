import { faker } from '@faker-js/faker';
import { Inventory, InventoryMovement } from '../../../domain/interfaces/inventory.interface';
/**
 * Servicio encargado de la generacion y gestión de inventarios.
 * 
 * @remarks
 * Este servicio utiliza la librería `faker` para generar inventarios
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class InventorysService {

    /**
     * Movimientos disponibles para los inventarios.
     * 
     * @remarks
     * Se utilizan para asignar aleatoriamente un 
     * movimiento a cada inventario generado.
     */
     private movements: InventoryMovement[] = [
        'entrada',
        'salida',
        'ajuste'
     ];

     /**
      * Obtiene un listado de inventarios generados dinámicamente.
      * 
      * @param countInventorys Cantidad de inventarios a generar
      * @returns Promesa que resuelve un arreglo de inventarios
      * 
      * @example
      * ```ts
      * const inventorys = await inventorysService.getAllInventorys(10);
      * ```
      */
     public async getAllInventorys(countInventorys: number): Promise<Inventory[]> {
        const inventorys: Promise<Inventory>[] = [];

        for (let i = 1; i <= countInventorys; i++) {
            inventorys.push(this.generateInventory(i));
        }
        return Promise.all(inventorys);
      }

      /**
       * Genera un inventario ficticio.
       * 
       * @param id Identificador único del inventario
       * @return Promesa que resuelve un inventario generado
       */
      private generateInventory(id: number): Promise<Inventory> {
        return Promise.resolve({
          id,
          productId: faker.number.int({ min: 1, max: 100 }),
          productName: faker.commerce.productName(),
          quantity: faker.number.int({ min: 0, max: 1000 }),
          movements: faker.helpers.arrayElement(this.movements),
          lastUpdated: faker.date.recent()
      });
    }
}