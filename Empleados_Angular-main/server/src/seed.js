const mongoose = require("mongoose");
const Employee = require("./models/Employee");


mongoose.connect("mongodb://127.0.0.1:27017/empleadosDB")
  .then(async () => {
    console.log("Conectado a MongoDB");

    
    await Employee.deleteMany();

    
    const empleados = [
      {
        name: "Juan",
        office: "Quito",
        position: "Developer",
        salary: 3000
      },
      {
        name: "Ana",
        office: "Guayaquil",
        position: "Senior Developer",
        salary: 4500
      },
      {
        name: "Luis",
        office: "Cuenca",
        position: "Manager",
        salary: 5000
      },
      {
        name: "Carlos",
        office: "Ambato",
        position: "Designer",
        salary: 3500
      },
      {
        name: "María",
        office: "Loja",
        position: "QA Tester",
        salary: 3200
      }
    ];

    
    await Employee.insertMany(empleados);

    console.log("🔥 Datos insertados correctamente");

    mongoose.connection.close();
  })
  .catch(err => console.log(err));