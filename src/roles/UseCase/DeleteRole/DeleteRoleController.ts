//Métodos que a rota chama
import { Request, Response } from 'express'
import { DeleteRoleUseCase } from './DeleteRoleUseCase'
import { container } from 'tsyringe'

export class deleteRoleController {
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteRoleUseCase = container.resolve(DeleteRoleUseCase) //Ligação singleton, ou seja, onde liga as instancias
    const { id } = request.params
    await deleteRoleUseCase.execute({ id })

    return response.status(204).send({ message: 'Conteudo excluido' })
  }
}
