import { Schema, model } from 'mongoose'

type Astronaut = {
  firstName: string
  lastName: string
  birthDate: number
  ability: string
}

const AstronautSchema = new Schema<Astronaut>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Number,
    required: true,
  },
  ability: {
    type: String,
    required: true,
  },
})

export default model('astronaut', AstronautSchema)
