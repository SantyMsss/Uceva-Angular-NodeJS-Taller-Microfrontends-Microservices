import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { InventorysService } from "./inventorys.service";

/**
 * Controlador de inventarios.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con inventarios,
 * delegando la lógica de negocio al `InventorysService`.
 */
export class InventorysController {

  /**
   * Servicio de inventarios.
   */
  private readonly inventorysService = new InventorysService();

  /**
   * Maneja la petición HTTP para obtener un listado de inventarios.
   *
   * @remarks
   * El número de inventarios a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /inventorys/10
   * ```
   */
  getAllInventorys = (req: Request, res: Response): void => {
    const { countInventorys } = req.params;

    setTimeout(() => {
      this.inventorysService
      .getAllInventorys(Number(countInventorys))
      .then((inventorys) => res.status(201).json(inventorys))
      .catch((error) => HandleError.error(error, res));
    }, 1000);
  };
}
