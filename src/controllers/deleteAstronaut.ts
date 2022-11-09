import { Request, Response } from 'express'

import Astronaut from '../models/Astronaut'

const deleteAstronaut = async (req: Request, res: Response) => {
  try {
    const astronaut = await Astronaut.findById(req.params.id)

    if (!astronaut) {
      res.status(400).send('No astronaut with given id found.')
    }

    await astronaut.remove()
    res.json('Astronaut has been successfuly deleted.')
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error. Deleting astronaut failed.')
  }
}

export default deleteAstronaut
