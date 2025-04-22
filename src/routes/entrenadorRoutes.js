const express = require('express');
const router = express.Router();
const entrenadorController = require('../controllers/entrenadorController');

router.get('/', entrenadorController.getAllEntrenadores);
router.post('/', entrenadorController.createEntrenador);
router.get('/:id', entrenadorController.getEntrenadorById);
router.put('/:id', entrenadorController.updateEntrenador);
router.patch('/:id/status', entrenadorController.changeEntrenadorStatus);
router.delete('/:id', entrenadorController.deleteEntrenador);

module.exports = router;