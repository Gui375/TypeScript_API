import { Role } from '@roles/http/routes/entities/Role'
import { dataSource } from '@shared/typeorm'
import { Repository } from 'typeorm'

type CreateRoleDTO = {
  name: string
}

export type PaginateParams = {
  //Criando o paginador
  page: number
  skip: number
  take: number
} //Parametros do paginator

export type RolesPaginateProperties = {
  per_page: number
  total: number
  current_page: number
  data: Role[]
} //Retorno do paginator

export class RolesRepository {
  private repository: Repository<Role> //Essa variavel vai manipular as informações da estrutura de dados role
  private static INSTANCE: RolesRepository //Implementação do singleton | Tambem é a minha instancia
  //Static é uma variavel que não terá o valor alterado dentro do código
  private constructor() {
    this.repository = dataSource.getRepository(Role) //Atribuindo a minha propriedade repository o repositorio de um objeto Role
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

  async create({ name }: CreateRoleDTO): Promise<Role> {
    //Como o método é assincrono ele tem sempre que retornar uma promessa
    const role = this.repository.create({ name })
    return this.repository.save(role)
  }

  async save(role: Role): Promise<Role> {
    return this.repository.save(role)
  }

  async delete(role: Role): Promise<void> {
    await this.repository.remove(role)
  }
  //Diferença do método create pro método save, é que no create estamos criando um novo objeto pra depois salvar. Já no Save, passamos uma propiedade como parametro e salvamos depois

  async findByName(NameExe: string): Promise<Role | null> {
    //TypeORM retorna null no lugar de undefinide
    return await this.repository.findOneBy({ name: NameExe }) //Quando o nome do parametro do método é diferente do nome da coluna a ser buscada, temos que referenciar desta forma, porem quando é igual podemos passar somente o nome
  }

  async findById(id: string): Promise<Role | null> {
    //TypeORM retorna null no lugar de undefinide
    return await this.repository.findOneBy({ id }) //Quando o nome do parametro do método é diferente do nome da coluna a ser buscada, temos que referenciar desta forma, porem quando é igual podemos passar somente o nome
  }

  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<RolesPaginateProperties> {
    const [roles, count] = await this.repository
      .createQueryBuilder()
      .skip(skip)
      .take(take) //Parametros é para o usuário dizer os valores que é pra pegar
      .getManyAndCount()
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: roles,
    }
    return result
  }
}
