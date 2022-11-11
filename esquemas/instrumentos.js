var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var instrumentosSchema = new Schema({
    id: String,
    nombre: String,
    tipo: String,
    descripcion: String,
    edad_recomentada: String
})

module.exports = mongoose.model('Instrumentos', instrumentosSchema)