import { Express } from 'express'

import addAstronaut from './controllers/addAstronaut'
import editAstronaut from './controllers/editAstronaut'
import deleteAstronaut from './controllers/deleteAstronaut'

const routes = (app: Express) => {
    app.post('/api/astronaut', addAstronaut)
    app.put('/api/astronaut/:id', editAstronaut)
    app.delete('/api/astronaut/:id', deleteAstronaut)
}

export default routes