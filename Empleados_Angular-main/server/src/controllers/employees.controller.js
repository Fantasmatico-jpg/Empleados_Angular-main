const Employee = require("../models/Employee");
const mongoose = require("mongoose");

// Obtener todos los empleados
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener empleados" });
  }
};

// Crear empleado
exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.json(savedEmployee);
  } catch (error) {
    res.status(500).json({ error: "Error al crear empleado" });
  }
};

// Obtener un empleado
exports.getEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    // 🔥 VALIDACIÓN IMPORTANTE
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }

    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener empleado" });
  }
};

// Actualizar empleado
exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar empleado" });
  }
};

// Eliminar empleado
exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    await Employee.findByIdAndDelete(id);
    res.json({ message: "Empleado eliminado" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar empleado" });
  }
};