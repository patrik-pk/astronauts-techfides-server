import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import Astronaut from '../models/Astronaut'

import { mapExpressValidatorErrors } from '../shared/utils'

const addAstronaut = async (req: Request, res: Response) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json(mapExpressValidatorErrors(errors))
  }

  const { firstName, lastName, birthDate, ability } = req.body

  try {
    const astronaut = new Astronaut({
      firstName,
      lastName,
      birthDate,
      ability,
    })

    await astronaut.save()

    res.status(200).send('Astronaut has been successfully added')
  } catch (err) {
    console.error(err)
    res.status(500).send('Server error. Adding astronaut failed.')
  }
}

export default addAstronaut
