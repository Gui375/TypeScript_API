//Métodos que a rota chama
import { Request, Response } from 'express'
import { showRoleUseCase } from './showRoleUseCase'

export class showRoleController {
  constructor(private showRoleUseCase: showRoleUseCase) {}
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const role = await this.showRoleUseCase.execute({ id })

    return response.status(200).json(role)
  }
}
