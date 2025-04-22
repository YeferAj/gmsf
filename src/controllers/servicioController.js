const Servicio = require('../models/Servicio');

exports.getAllServicios = async (req, res) => {
  try {
    const servicios = await Servicio.findAll();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createServicio = async (req, res) => {
  try {
    const { nombre, descripcion, precio, estado } = req.body;
    const nuevoServicio = await Servicio.create({ 
      nombre, 
      descripcion, 
      precio, 
      estado 
    });
    res.status(201).json(nuevoServicio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicioById = async (req, res) => {
  try {
    const servicio = await Servicio.findByPk(req.params.id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.json(servicio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateServicio = async (req, res) => {
  try {
    const { nombre, descripcion, precio, estado } = req.body;
    const servicio = await Servicio.findByPk(req.params.id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    servicio.nombre = nombre || servicio.nombre;
    servicio.descripcion = descripcion || servicio.descripcion;
    servicio.precio = precio || servicio.precio;
    servicio.estado = estado !== undefined ? estado : servicio.estado;
    await servicio.save();
    res.json(servicio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.changeServicioStatus = async (req, res) => {
  try {
    const servicio = await Servicio.findByPk(req.params.id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    servicio.estado = !servicio.estado;
    await servicio.save();
    res.json(servicio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteServicio = async (req, res) => {
  try {
    const servicio = await Servicio.findByPk(req.params.id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    await servicio.destroy();
    res.json({ message: 'Servicio eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};