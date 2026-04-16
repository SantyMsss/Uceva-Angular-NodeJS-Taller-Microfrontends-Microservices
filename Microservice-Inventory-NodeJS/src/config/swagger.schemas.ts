/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un inventario del sistema
 *       required:
 *         - id
 *         - id del producto
 *         - name del producto
 *         - cantidad disponible
 *         - movimiento del inventario
 *         - fecha de última actualización
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         id del producto:
 *           type: number
 *           example: 1
 *         name del producto:
 *           type: string
 *           example: portatil Dell XPS 13
 *         cantidad disponible:
 *           type: number
 *           example: 100
 *         movimiento del inventario:
 *           type: string
 *           enum:
 *             - entrada
 *             - salida
 *             - ajuste
 *          example: entrada
 *        fecha de última actualización:
 *          type: string
 *         format: date-time
 *        example: 2024-06-01T12:00:00Z
 */
export {};