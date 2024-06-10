//Métodos que a rota chama
import { Request, Response } from 'express'
import { deleteRoleUseCase } from './DeleteRoleUseCase'

export class deleteRoleController {
  constructor(private deleteRoleUseCase: deleteRoleUseCase) {}
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    await this.deleteRoleUseCase.execute({ id })

    return response.status(204).send({ message: 'Conteudo excluido' })
  }
}
