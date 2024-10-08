import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListUsersUseCase } from './ListUsersUseCase'
import { instanceToInstance } from 'class-transformer'

export class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersUseCase)
    const page =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1
    const limit =
      request.query.limit && Number(request.query.limit) > 0 //Condições do if ternary
        ? Number(request.query.limit) //Caso seja verdadeiro faz isso
        : 15 //Caso seja falso faz isso

    const users = await listUsersUseCase.execute({ page, limit })
    return response.status(200).json(instanceToInstance(users)) //Depois de marcar na classe o atributo que queremos excluir, usamos o instanceToInstance para aplicar o Exclude
  }
}
