import { deleteRolesController } from '@roles/UseCase/DeleteRole'
import { updateRolesController } from '@roles/UseCase/UpdateRole'
import { createRolesController } from '@roles/UseCase/createRole'
import { listRolesController } from '@roles/UseCase/listRole'
import { showRolesController } from '@roles/UseCase/showRole'
import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

const rolesRoutes = Router()

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
