//Métodos que a rota chama
import { Request, Response } from 'express'
import { UpdateRoleUseCase } from './UpdateRoleUseCase'

export class UpdateRoleController {
  constructor(private updateRoleUseCase: UpdateRoleUseCase) {}
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name } = request.body
    const role = await this.updateRoleUseCase.execute({ id, name })

    return response.status(200).json(role)
  }
}
