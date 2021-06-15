'use strict'

import express from 'express'

// Middleware
import { isAuth } from '../middleware/authMiddleware'

// Routes
import post from './postRouter'
import user from './userRouter'
import auth from './authRouter'

const swaggerUi = require('swagger-ui-express')
const swagger = require('../../swagger.json')
const error404 = requiere('../middleware/error')

const api = express.Router()

// Nested routes
api.use('/post', post)
api.use('/user', isAuth, user)
api.use('/', auth)
api.use('doc', swaggerUi.serve)

api.get('/private', isAuth, (req, res) => {
  console.log('private')
  res.status(200).send({ message: "It's ok" })
})

app.get('/doc', swaggerUi.setup(swagger))
api.use(error404)


export default api
