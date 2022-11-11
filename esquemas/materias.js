var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var materiasSchema = new Schema({
    codigo: String,
    nombre: String,
    cantidad_horas: String,
    docente: String,
})

module.exports = mongoose.model('Materias', materiasSchema)