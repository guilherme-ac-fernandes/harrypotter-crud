const { Character } = require('../database/models');
const { validateQuantity } = require('./validation');

const OBJECT_ATTRIBUTES = { attributes: { exclude: ['createdAt', 'updatedAt'] } };

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

  create: async ({ character, house }) => {
    const validation = validateQuantity({ character, house });
    if (validation.code) return validation;
    const newCharacter = await Character.create({ character, house });
    return { code: 200, data: newCharacter };
  },

  update: async (id, { character, house }) => {
    const validation = validateQuantity({ character, house });
    if (validation.code) return validation;
    await Character.update({ character, house }, { where: { id } });
    return { code: 200 };
  },

  delete: async (id) => {
    await Character.destroy({ where: { id } });
    return { code: 204 };
  },
};
