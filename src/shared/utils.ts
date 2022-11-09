import { Result, ValidationError } from 'express-validator'

export const mapExpressValidatorErrors = (errors: Result<ValidationError>) => {
  return errors
    .array()
    .map((err) => err.msg)
    .join('; ')
}
