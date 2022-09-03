const rescue = require('express-rescue');
const { CharacterService } = require('../services');

module.exports = {
  getAll: rescue(async (_req, res, next) => {
    const { data, code, message } = await CharacterService.getAll();
    if (message) return next({ code, message });
    return res.status(code).json(data);
  }),

  
};