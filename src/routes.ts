import { Express } from 'express'
import { check } from 'express-validator'

import getAstronauts from './controllers/getAstronauts'
import addAstronaut from './controllers/addAstronaut'
import editAstronaut from './controllers/editAstronaut'
import deleteAstronaut from './controllers/deleteAstronaut'

const routes = (app: Express) => {
  app.get('/api/astronaut', getAstronauts)
  app.post(
    '/api/astronaut',
    [
      check('firstName', 'First name is required').not().isEmpty(),
      check('lastName', 'Last name is required').not().isEmpty(),
      check('birthDate', 'Birthdate as timestamp is required').isNumeric(),
      check('ability', 'Ability is required').not().isEmpty(),
    ],
    addAstronaut
  )
  app.put('/api/astronaut/:id', editAstronaut)
  app.delete('/api/astronaut/:ids', deleteAstronaut)
}

export default routes
