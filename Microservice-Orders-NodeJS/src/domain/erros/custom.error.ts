/**
 * Error personalizado para la aplicación.
 *
 * @remarks
 * Esta clase extiende el objeto `Error` nativo y permite
 * asociar un código de estado HTTP a los errores lanzados
 * dentro de la aplicación.
 *
 * Se utiliza principalmente en controladores y servicios
 * para estandarizar el manejo de errores HTTP.
 *
 * @example
 * ```ts
 * throw CustomError.badRequest('Datos inválidos');
 * ```
 */
export class CustomError extends Error {

  /**
   * Crea una nueva instancia de `CustomError`.
   *
   * @param statusCode Código de estado HTTP asociado al error
   * @param message Mensaje descriptivo del error
   */
  constructor(
    public readonly statusCode: number,
    public readonly message: string
  ) {
    super(message);
  }

  /**
   * Error HTTP 400 – Bad Request.
   *
   * @param message Mensaje descriptivo del error
   * @returns Instancia de `CustomError` con código 400
   */
  static badRequest(message: string): CustomError {
    return new CustomError(400, message);
  }

  /**
   * Error HTTP 404 – Not Found.
   *
   * @param message Mensaje descriptivo del error
   * @returns Instancia de `CustomError` con código 404
   */
  static notFound(message: string): CustomError {
    return new CustomError(404, message);
  }

  /**
   * Error HTTP 500 – Internal Server Error.
   *
   * @param message Mensaje descriptivo del error
   * @returns Instancia de `CustomError` con código 500
   */
  static internalServer(message: string): CustomError {
    return new CustomError(500, message);
  }
}
