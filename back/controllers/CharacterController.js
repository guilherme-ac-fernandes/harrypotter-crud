const rescue = require('express-rescue');
const { CharacterService } = require('../services');

module.exports = {
  getAll: rescue(async (_req, res, next) => {
    const { data, code, message } = await CharacterService.getAll();
    if (message) return next({ code, message });
    return res.status(code).json(data);
  }),

  findById: rescue(async (req, res, next) => {
    const { id } = req.params;
    const { data, code, message } = await CharacterService.findById(id);
    if (message) return next({ code, message });
    return res.status(code).json(data);
  }),

  delete: rescue(async (req, res) => {
    const { id } = req.params;
    const { code } = await userService.delete(id);
    return res.status(code).end();
  }),
};