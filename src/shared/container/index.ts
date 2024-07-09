import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { container } from 'tsyringe'
// Criando o Container para injeção de dependencia
container.registerSingleton<IRolesRepository>( //Registra um singleton no container de injeção de dependência.
  'RolesRepository', //'RolesRepository': A chave que será usada para identificar esta dependência no container. (Colocamos o nome do token com o mesmo nome da classe para facilitar a identificação)
  //Com esse token acima, ondeu eu usar ele, quer dizer que estou injetando uma instancia da classe RolesRepository
  RolesRepository, // RolesRepository: A classe que será instanciada como singleton.
)
