var express = require('express') //llamamos a Express
var app = express()       
var bodyParser = require('body-parser')        

var port = process.env.PORT || 4000  // establecemos nuestro puerto

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            

// nuestra ruta irá en http://localhost:8080/despliegueapi
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
var router = require('./routes')
const { swaggerDocs: SwaggerDocs } = require("./swagger.js");

app.use('/despliegueapi', router)

//arrancamos el servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    SwaggerDocs(app, port);
});