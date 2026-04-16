import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from '../../interfaces/inventory.interface';

/**
 * Servicio encargado de la gestión del inventario.
 * 
 * Proporciona métodos para obtener información del inventario
 * desde la API REST.
 *
 * @example
 * ```ts
 * constructor(private inventoryService: InventoryService) {}
 * 
 * this.inventoryService.getInventoryStatus().subscribe(status => {
 *  console.log(status);
 * });
 * 
 */
@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  /**
   * Cliente HTTP de Angular para realizar peticiones a la API.
   * Se inyecta usando la función `inject`.
   */
  private httpClient = inject(HttpClient);
  

  /**
   * Obtiene una lista de inventarios según la cantidad solicitada.
   *
   * @param countInventory Cantidad de inventarios a obtener
   * @returns Observable con la lista de inventarios
   */
  getAllInventory(countInventory: number): Observable<Inventory[]> {
    return this.httpClient.get<Inventory[]>(`http://localhost:3004/api/inventory/${countInventory}`);
  }
}
