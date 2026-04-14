/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa un pedido del sistema
 *       required:
 *         - id
 *         - customerName
 *         - product
 *         - quantity
 *         - total
 *         - status
 *         - date
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         customerName:
 *           type: string
 *           example: Carlos Ramírez
 *         product:
 *           type: string
 *           example: Laptop Dell XPS
 *         quantity:
 *           type: number
 *           example: 2
 *         total:
 *           type: number
 *           example: 2500000
 *         status:
 *           type: string
 *           enum:
 *             - Pending
 *             - Processing
 *             - Shipped
 *             - Delivered
 *             - Cancelled
 *           example: Pending
 *         date:
 *           type: string
 *           format: date
 *           example: 2026-04-14
 */
export {};
