const { Character } = require('../database/models');

const OBJECT_ATTRIBUTES = { attributes: { exclude: ['createdAt', 'updatedAt'] }};

module.exports = {
  getAll: async () => {
    const characters = await Character.findAll(OBJECT_ATTRIBUTES);
    if (!characters) return { code: 404, message: 'Characters not found' };
    return { code: 200, data: characters };
  },

  findById: async (id) => {
    const character = await Character.findByPk(id, OBJECT_ATTRIBUTES);
    if (!character) return { code: 404, message: 'Character not exist' };
    return { code: 200, data: character };
  },

  create: async ({ character }) => {
    await Character.create({ character });
    return { code: 200 };
  },

  update: async (id, { character }) => {
    await Character.update({ character }, { where: { id } });
    return { code: 200 };
  },

  delete: async (id) => {
    await Character.destroy({ where: { id } });
    return { code: 204 };
  },
};