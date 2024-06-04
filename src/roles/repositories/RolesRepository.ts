import { Role } from '@roles/http/routes/entities/Role'

type CreateRoleDTO = {
  name: string
}
export class RolesRepository {
  private roles: Role[]
  private static INSTANCE: RolesRepository
  //Static é uma variavel que não terá o valor alterado dentro do código
  private constructor() {
    this.roles = []
    //Quando instanciar a classe Role, ele fala que se iniciará como um array vazio
  }

  public static getInstance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository()
    }
    return RolesRepository.INSTANCE
  }

  //Método usado para garantir que tenha apenas 1 instancia de RolesRepository dentro do código
  //If mostra que se a varivael INSTANCE (Onde guarda a informação da instancia do repositorio) for false, ele cria uma

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

  findByName(name: string): Role | undefined {
    return this.roles.find(x => x.name == name)
  }

  findAll(): Role[] {
    return this.roles
  }
}
