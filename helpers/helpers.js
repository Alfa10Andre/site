import { v4 as uidv4 } from 'uuid'

export const id = () => {
  return uidv4()
}
