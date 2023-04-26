const User = require('../models/user.model');

const emailValidation = async (email) => {
  const isExist = await User.findOne({ email });
  if (isExist) {
    throw new Error(`El email ${email} ya está en uso.`);
  }
  return false;
};

module.exports = {
  emailValidation,
};
