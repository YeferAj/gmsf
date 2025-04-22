const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');

router.get('/', servicioController.getAllServicios);
router.post('/', servicioController.createServicio);
router.get('/:id', servicioController.getServicioById);
router.put('/:id', servicioController.updateServicio);
router.patch('/:id/status', servicioController.changeServicioStatus);
router.delete('/:id', servicioController.deleteServicio);

module.exports = router;