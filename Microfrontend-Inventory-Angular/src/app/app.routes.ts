import { Routes } from '@angular/router';
import { InventoryPage } from './pages/inventory/inventory.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 * 
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link InventoryPage}
 */

export const routes: Routes = [
    /**
     * Ruta de inventario.
     * 
     * @remarks
     * Renderiza el componente `InventoryPage`, encargado
     * de mostrar y gestionar el listado de productos en el inventario.
     */
    {path: '', loadComponent: () => import('./pages/inventory/inventory.page').then((m) => m.InventoryPage)},
];
