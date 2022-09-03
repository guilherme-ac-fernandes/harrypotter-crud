const Joi = require('joi');

const characterSchema = Joi.object({
  character: Joi.string().min(2).email().required().messages({
    'string.empty': '400|"character" is required',
  'string.min': '422|"character" length must be at least {#limit} characters long',
  'any.required': '400|"character" is required',
  }),
});

// Função genérica para validações
const handleCallback = (schema, variable) => {
  const { error } = schema.validate(variable);
  if (error !== undefined) {
    const [code, message] = error.message.split('|');
    return { code: Number(code), message };
  }
  return true;
};


const validateQuantity = (object) => handleCallback(characterSchema, object);


module.exports = {
  validateQuantity,
};