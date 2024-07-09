import { Request, Response } from 'express'
import { ListRolesUseCase } from './listRolesUseCase'
import { container } from 'tsyringe'

export class ListRolesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listRolesUseCase = container.resolve(ListRolesUseCase)
    const page =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1
    const limit =
      request.query.limit && Number(request.query.limit) > 0 //Condições do if ternary
        ? Number(request.query.limit) //Caso seja verdadeiro faz isso
        : 15 //Caso seja falso faz isso

    const roles = await listRolesUseCase.execute({ page, limit })
    return response.status(200).json(roles)
  }
}
