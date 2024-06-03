import { Role } from '@roles/http/routes/entities/Role'

type CreateRoleDTO = {
  name: string
}
export class RolesRepository {
  private roles: Role[]

  constructor() {
    this.roles = []
    //Quando instanciar a classe Role, ele fala que se iniciará como um array vazio
  }

  create({ name }: CreateRoleDTO) {
    const role = new Role()

    Object.assign(role, {
      name,
      created_at: new Date(),
    })
    //Criando o objeto que será adicionado dentro do array roles

    this.roles.push(role)
    return role
  }
}
