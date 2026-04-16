import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Componente raíz de la aplicación.
 *
 * @remarks
 * Este componente actúa como punto de entrada principal
 * de la aplicación Angular. Define la estructura base
 * y configura el navbar principal mediante el componente
 * `NavbarOrganism`.
 *
 * Es responsable de:
 * - Inicializar el layout general
 * - Proveer la configuración del menú de navegación
 * - Renderizar las vistas según el sistema de rutas
 *
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mf-Inventory');
}
