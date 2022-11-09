import { Request, Response } from 'express'

import Astronaut from '../models/Astronaut'

const getAstronauts = async (req: Request, res: Response) => {
  try {
    const astronauts = await Astronaut.find()
    res.json(astronauts)
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error. Getting astronauts failed.')
  }
}

export default getAstronauts
