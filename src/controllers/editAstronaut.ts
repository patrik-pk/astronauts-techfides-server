import { Request, Response } from 'express'

const addAstronaut = (req: Request, res: Response) => {
    return res.send(`delete astronaut: ${req.params.id}`)
}

export default addAstronaut
