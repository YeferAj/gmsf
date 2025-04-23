const Entrenador = require('../models/Entrenador');

exports.getAllEntrenadores = async (req, res) => {
  try {
    const entrenadores = await Entrenador.findAll();
    res.json(entrenadores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEntrenador = async (req, res) => {
  try {
    const { nombre, fecha_registro, especialidad, email, telefono, numero_documento } = req.body;
    
    const entrenador = await Entrenador.create({
      nombre,
      fecha_registro,
      especialidad,
      email,
      telefono,
      numero_documento,
      estado: true
    });
    
    res.status(201).json({
      success: true,
      data: entrenador
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


exports.getEntrenadorById = async (req, res) => {
  try {
    const entrenador = await Entrenador.findByPk(req.params.id);
    if (!entrenador) {
      return res.status(404).json({ error: 'Entrenador no encontrado' });
    }
    res.json(entrenador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEntrenador = async (req, res) => {
  try {
    const { nombre, fecha_registro, especialidad, email, telefono, numero_documento } = req.body;
    const entrenador = await Entrenador.findByPk(req.params.id);
    if (!entrenador) {
      return res.status(404).json({ error: 'Entrenador no encontrado' });
    }
    entrenador.nombre = nombre || entrenador.nombre;
    entrenador.fecha_registro = fecha_registro || entrenador.fecha_registro;
    entrenador.especialidad = especialidad || entrenador.especialidad;
    entrenador.email = email || entrenador.email;
    entrenador.telefono = telefono || entrenador.telefono;
    entrenador.numero_documento = numero_documento || entrenador.numero_documento;
    entrenador.estado = estado !== undefined ? estado : entrenador.estado;
    await entrenador.save();
    res.json(entrenador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.changeEntrenadorStatus = async (req, res) => {
  try {
    const entrenador = await Entrenador.findByPk(req.params.id);
    if (!entrenador) {
      return res.status(404).json({ error: 'Entrenador no encontrado' });
    }
    entrenador.estado = !entrenador.estado;
    await entrenador.save();
    res.json(entrenador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEntrenador = async (req, res) => {
  try {
    const entrenador = await Entrenador.findByPk(req.params.id);
    if (!entrenador) {
      return res.status(404).json({ error: 'Entrenador no encontrado' });
    }
    await entrenador.destroy();
    res.json({ message: 'Entrenador eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};