import { Router } from 'express'
import { rolesRoutes } from '@roles/http/routes/roles.routes'
import { userRouter } from '@user/http/users.routes'

const routes = Router()

// routes.get('/', (request, response) => {
//   response.json({ message: 'Olá mundo !' })
// })

routes.use('/roles', rolesRoutes)
routes.use('/users', userRouter)

export { routes }
