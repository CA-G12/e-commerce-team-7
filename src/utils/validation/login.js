const joi = require('joi');
const loginValidation = (data) => {
  const schema = joi.object({
    username: joi.string().required(),
    password: joi
      .string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required()
  });

  return schema.validateAsync(data);
};

module.exports = loginValidation;
