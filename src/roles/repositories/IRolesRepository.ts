//interface que define a tipagem da classe roles

import { Role } from '@roles/http/routes/entities/Role'

export type CreateRoleDTO = {
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

export interface IRolesRepository {
  create({ name }: CreateRoleDTO): Promise<Role>
  save(role: Role): Promise<Role>
  findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<RolesPaginateProperties>
  findById(id: string): Promise<Role | null>
  findByName(name: string): Promise<Role | null>
  delete(role: Role): Promise<void>
}
//Criando a interface para padronizar a classe e deixar claro o que precisa ser implementado no minimo, dentro do repositorio
//Será injetado a dependencia no container dentro da pasta container
