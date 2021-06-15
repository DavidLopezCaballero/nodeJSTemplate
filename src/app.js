'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


import api from './routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
   .use(bodyParser.json())
   .use(cors())
   .use('/api', api)

app.get('/health/check', (req, res) => {
  res.status(200).send({ message: 'Healthy' })
})

export default app
