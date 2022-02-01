import bCrypt from 'bcrypt'

const isValidPassword = (user, password) => {
  return bCrypt.compareSync(password, user.password);
}

export default isValidPassword;