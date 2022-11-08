import { Request, Response } from 'express'

const addAstronaut = (req: Request, res: Response) => {
    return res.send('add astronaut')
}

export default addAstronaut
