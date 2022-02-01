import bCrypt from 'bcrypt'

const createHash = (password) => bCrypt.hashSync(
  password,
  bCrypt.genSaltSync(10),
  null);

export default createHash;