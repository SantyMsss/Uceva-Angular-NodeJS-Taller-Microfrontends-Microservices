/**
 * @openapi
 * components:
 *   schemas:
 *     Inventory:
 *       type: object
 *       description: Representa un inventario del sistema
 *       required:
 *         - id
 *         - productId
 *         - productName
 *         - quantity
 *         - movements
 *         - lastUpdated
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         productId:
 *           type: number
 *           example: 1
 *         productName:
 *           type: string
 *           example: Portatil Dell XPS 13
 *         quantity:
 *           type: number
 *           example: 100
 *         movements:
 *           type: string
 *           enum:
 *             - entrada
 *             - salida
 *             - ajuste
 *           example: entrada
 *         lastUpdated:
 *           type: string
 *           format: date-time
 *           example: 2024-06-01T12:00:00Z
 */
export {};