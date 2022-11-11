var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var salas_reservacionesSchema = new Schema({
    id: String,
    docente: String,
    sala: String,
    fecha: String,
})

module.exports = mongoose.model('Salas_reservaciones', salas_reservacionesSchema)