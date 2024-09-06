export class AppError {
  public readonly message: string //Variaveis sendo declaradas
  public readonly statusCode: number

  constructor(message: string, statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}
