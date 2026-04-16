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
  /**
   * Título de la aplicación, utilizado en el navbar y otras partes del layout.
   * Se define como una señal para permitir reactividad en caso de cambios futuros.
   * Actualmente, el título es estático, pero se ha implementado como una señal
   * para facilitar su actualización dinámica si se requiere en el futuro.
   */
  protected readonly title = signal('mf-Inventory');
}
