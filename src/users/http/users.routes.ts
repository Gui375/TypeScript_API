import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { container } from 'tsyringe'
import { CreateUserController } from '@user/useCases/createUser/CreateUserController'
import { ListUsersController } from '@user/useCases/listUsers/ListUsersCaseController'
import { CreateLoginController } from '@user/useCases/createLogin/CreateLoginController'
import { isAuthenticated } from '@shared/http/middlewares/isAuthenticated'

const userRouter = Router()
const createUserController = container.resolve(CreateUserController)
const listUsersContoller = container.resolve(ListUsersController)
const crateLoginController = container.resolve(CreateLoginController)

userRouter.post(
  '/',
  isAuthenticated, //Autentica com o tokem
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      roleId: Joi.string().uuid().required(),
    },
  }),
  (request, response) => {
    return createUserController.handle(request, response)
  },
)

userRouter.get(
  '/',
  isAuthenticated, //Autentica com o tokem
  celebrate({
    [Segments.QUERY]: {
      page: Joi.number(),
      limit: Joi.number(),
    },
  }),
  (request, response) => {
    return listUsersContoller.handle(request, response)
  },
)

userRouter.post(
  '/login',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  (request, response) => {
    return crateLoginController.handle(request, response)
  },
)

export { userRouter }
