import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { container } from 'tsyringe'
import { CreateRoleController } from '@roles/UseCase/createRole/CreateRoleController'
import { ListRolesController } from '@roles/UseCase/listRole/listRolesController'
import { showRoleController } from '@roles/UseCase/showRole/showRoleController'
import { UpdateRoleController } from '@roles/UseCase/UpdateRole/UpdateRoleController'
import { deleteRoleController } from '@roles/UseCase/DeleteRole/DeleteRoleController'

const rolesRoutes = Router()
//Area responsavel por linkar as controler no arquivo de rotas, atraves do container!
const createRolesController = container.resolve(CreateRoleController)
const listRolesController = container.resolve(ListRolesController)
const showRolesController = container.resolve(showRoleController)
const updateRolesController = container.resolve(UpdateRoleController)
const deleteRolesController = container.resolve(deleteRoleController)
rolesRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }), //Validações do celebrate para a rota Post, validando que o nome tem que ser obrigatorio e uma string
  }),
  (request, response) => {
    return createRolesController.handle(request, response)
  },
)

rolesRoutes.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }), //Validações do celebrate para a rota Post, validando que o nome tem que ser obrigatorio e uma string
  }),
  (request, response) => {
    return listRolesController.handle(request, response)
  },
)

rolesRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }), //Validações do celebrate para a rota Post, validando que o nome tem que ser obrigatorio e uma string
  }),
  (request, response) => {
    //Rota com parametro
    return showRolesController.handle(request, response)
  },
)

rolesRoutes.put(
  '/:id',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }), //Validações do celebrate para a rota Post, validando que o nome tem que ser obrigatorio e uma string
  }),
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }), //Validações do celebrate para a rota Post, validando que o nome tem que ser obrigatorio e uma string
  }),
  (request, response) => {
    return updateRolesController.handle(request, response)
  },
)

rolesRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }), //Validações do celebrate para a rota Post, validando que o nome tem que ser obrigatorio e uma string
  }),
  (request, response) => {
    return deleteRolesController.handle(request, response)
  },
)

export { rolesRoutes }
