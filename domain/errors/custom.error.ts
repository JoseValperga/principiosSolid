export class CustomError extends Error {
  //extiendo throw new Error()
  constructor(
    public readonly statusCode: number,
    public readonly message: string
  ) {
    //llamo a Error porque lo estoy extendiendo
    super(message);
  }

  //creo tantos mensajes como necesite
  static badRequest(message: string) {
    return new CustomError(400, message);
  }

  static unauthorized(message: string) {
    return new CustomError(401, message);
  }

  static forbidden(message: string) {
    return new CustomError(403, message);
  }

  static notFound(message: string) {
    return new CustomError(404, message);
  }

  static internalSeverError(message: string = "Internal Server Error") {
    return new CustomError(500, message);
  }
}
