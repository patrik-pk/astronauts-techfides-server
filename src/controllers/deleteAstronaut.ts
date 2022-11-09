import { Request, Response } from 'express'

import Astronaut from '../models/Astronaut'

const deleteAstronaut = async (req: Request, res: Response) => {
  try {
    const ids = req.params.ids.split(',')

    await Astronaut.deleteMany({ _id: ids })
    res.json('Astronaut(s) has been successfuly deleted.')
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error. Deleting astronaut(s) failed.')
  }
}

export default deleteAstronaut
