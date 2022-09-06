const express = require('express');

const { CharacterController } = require('../controllers');

const router = express.Router();

router.get('/', CharacterController.getAll);
router.get('/:id', CharacterController.findById);
router.post('/', CharacterController.create);
router.put('/:id', CharacterController.update);
router.delete('/:id', CharacterController.delete);

module.exports = router;
