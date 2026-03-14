const app = require("./app");
require("./database");

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});