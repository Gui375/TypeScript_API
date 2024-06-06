import 'dotenv/config'
import 'reflect-metadata'
import { app } from './app' //Refatoração dos métodos express
import { dataSource } from '@shared/typeorm'

dataSource.initialize().then(() => {
  app.listen(process.env.PORT, () => {
    //process.env.PORT Vaiavel de ambiente criada para não versionar a mesma
    console.log({ message: `Server started on port ${process.env.PORT}!` })
  })
})
//Esse comando fala que depois que conectar com o banco de dados, AI SIM, ele vai iniciar o servidor
