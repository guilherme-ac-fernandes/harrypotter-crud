const { Character } = require('../database/models');

module.exports = {
  getAll: async () => {
    const characters = await Character.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (!characters) return { code: 404, message: 'Characters not found' };
    return { code: 200, data: characters };
  },
};