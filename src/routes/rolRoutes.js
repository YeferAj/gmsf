const express = require('express');
const router = express.Router();
const rolController = require('../controllers/rolController');

// Rutas para roles
router.get('/', rolController.getAllRoles);
router.post('/', rolController.createRol);
router.get('/:id', rolController.getRolById);
router.put('/:id', rolController.updateRol);
router.patch('/:id/status', rolController.changeRolStatus);
router.delete('/:id', rolController.deleteRol);

module.exports = router;