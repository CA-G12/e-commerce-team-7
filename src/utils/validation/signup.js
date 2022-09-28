const joi = require('joi');

const signUpValidation = (data) => {
  const schema = joi.object({
    username: joi.string().required(),
    password: joi
      .string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
    avatar: joi
      .string()
      .pattern(/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/i),
  });

  return schema.validateAsync(data);
};

module.exports = signUpValidation;
