import { IValidateFields, ValidationFunction } from '../interfaces'

const validateDiaper: ValidationFunction = (data) => {
  return []
}

const validateSleep: ValidationFunction = (data) => {
  return []
}

const validateEat: ValidationFunction = (data) => {
  return []
}

const validateFields: IValidateFields = (data, actionType) => {
  switch (actionType) {
    case "1":
      return validateSleep(data);

    case "2":
      return validateEat(data);

    case "3":
      return validateDiaper(data);

    default:
      return validateEat(data);
  }
}

export default validateFields;