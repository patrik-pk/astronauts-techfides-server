import { Request, Response } from 'express'

import Astronaut from '../models/Astronaut'

const editAstronaut = async (req: Request, res: Response) => {
  try {
    const astronaut = await Astronaut.findById(req.params.id)
    const { firstName, lastName, birthDate, ability } = req.body

    if (!astronaut) {
      res.status(400).send('No astronaut with given id found.')
    }

    await Astronaut.findByIdAndUpdate(req.params.id, {
      firstName: firstName || astronaut.firstName,
      lastName: lastName || astronaut.lastName,
      birthDate: birthDate || astronaut.birthDate,
      ability: ability || astronaut.ability,
    })
    res.json('Astronaut has been successfuly updated.')
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error. Editing astronaut failed.')
  }
}

export default editAstronaut
