//Métodos que a rota chama
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateRoleUseCase } from './CreateRoleUseCase'

export class CreateRoleController {
  //Onde fica parte da gravação
  async handle(request: Request, response: Response): Promise<Response> {
    const createRoleUseCase = container.resolve(CreateRoleUseCase) //O container pega a instancia do createRoleUseCase e implementa aqui
    const { name } = request.body
    const role = await createRoleUseCase.execute({ name })

    return response.status(201).json(role)
  }
}
