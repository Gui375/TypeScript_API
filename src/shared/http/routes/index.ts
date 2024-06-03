import { Router } from 'express'
import { rolesRoutes } from '@roles/http/routes/roles.routes'

const routes = Router()

// routes.get('/', (request, response) => {
//   response.json({ message: 'Olá mundo !' })
// })

routes.use('/roles', rolesRoutes)

export { routes }
