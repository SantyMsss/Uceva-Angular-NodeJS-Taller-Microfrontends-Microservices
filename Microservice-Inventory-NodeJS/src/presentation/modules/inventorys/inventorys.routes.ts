import { Router } from "express";
import { InventorysController } from "./inventorys.controller";

export class InventoryRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new InventorysController();

    /**
     * @openapi
     * /api/inventory/{countInventorys}:
     *   get:
     *     summary: Obtener listado de inventarios
     *     description: Retorna una lista de inventarios generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Inventory
     *     parameters:
     *       - in: path
     *         name: countInventorys
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de inventarios a generar
     *     responses:
     *       200:
     *         description: Lista de inventarios generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Inventory'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countInventorys", controller.getAllInventorys);

    return router;
  }
}