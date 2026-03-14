const Employee = require("../models/Employee");

// Obtener todos los empleados
exports.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

// Crear empleado
exports.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.json(savedEmployee);
};

// Obtener un empleado
exports.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

// Actualizar empleado
exports.updateEmployee = async (req, res) => {
    const updatedEmployee = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedEmployee);
};

// Eliminar empleado
exports.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Empleado eliminado" });
};