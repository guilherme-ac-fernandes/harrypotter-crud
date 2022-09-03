const { Character } = require('../database/models');

module.exports = {
  getAll: async () => {
    const characters = await Character.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (!characters) return { code: 404, message: 'Characters not found' };
    return { code: 200, data: characters };
  },

  findById: async (id) => {
    const character = await Character.findByPk(id, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (!character) return { code: 404, message: 'Character not exist' };
    return { code: 200, data: character };
  },

  create: async ({ character }) => {
    const { dataValues } = await Character.create({ character });
    return { code: 200, data: dataValues };
  },

  delete: async (id) => {
    await Character.destroy({ where: { id } });
    return { code: 204 };
  },
};