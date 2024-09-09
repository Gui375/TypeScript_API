import { v4 as uuidv4 } from 'uuid'
import { dataSource } from '@shared/typeorm'
import { hash } from 'bcryptjs'

async function create() {
  //Criando a conexão com o banco de dados dentro desta função
  //Create Role
  const connection = await dataSource.initialize()
  //Realizando a função de Create Role
  const roleId = uuidv4() //informando um uuid aleatorio para startar a seed
  await connection.query(`
    INSERT INTO roles(id, name)
    values ('${roleId}','T.I.')
    `)
  //Create user
  const userId = uuidv4()
  const password = await hash('1234', 10)
  await connection.query(
    `INSERT INTO USERS(id, name, email, password, isAdmin, roleId)
      values('${userId}', 'admin', 'a@a.com', '${password}', true, '${roleId}')
    `,
  )

  //fechando a conexão com o banco de dados
  await connection.destroy()
}

create().then(() => console.log('User admin created'))
