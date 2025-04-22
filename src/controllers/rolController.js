const Rol = require('../models/Rol');

// Obtener todos los roles
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo rol
exports.createRol = async (req, res) => {
  try {
    const { nombre, descripcion, estado } = req.body;
    const nuevoRol = await Rol.create({ nombre, descripcion, estado });
    res.status(201).json(nuevoRol);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un rol por ID
exports.getRolById = async (req, res) => {
  try {
    const rol = await Rol.findByPk(req.params.id);
    if (!rol) {
      return res.status(404).json({ error: 'Rol no encontrado' });
    }
    res.json(rol);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un rol
exports.updateRol = async (req, res) => {
  try {
    const { nombre, descripcion, estado } = req.body;
    const rol = await Rol.findByPk(req.params.id);
    if (!rol) {
      return res.status(404).json({ error: 'Rol no encontrado' });
    }
    rol.nombre = nombre || rol.nombre;
    rol.descripcion = descripcion || rol.descripcion;
    rol.estado = estado !== undefined ? estado : rol.estado;
    await rol.save();
    res.json(rol);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Cambiar estado de un rol
exports.changeRolStatus = async (req, res) => {
  try {
    const rol = await Rol.findByPk(req.params.id);
    if (!rol) {
      return res.status(404).json({ error: 'Rol no encontrado' });
    }
    rol.estado = !rol.estado;
    await rol.save();
    res.json(rol);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un rol
exports.deleteRol = async (req, res) => {
  try {
    const rol = await Rol.findByPk(req.params.id);
    if (!rol) {
      return res.status(404).json({ error: 'Rol no encontrado' });
    }
    await rol.destroy();
    res.json({ message: 'Rol eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};