var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var salasSchema = new Schema({
    id: String,
    nombre: String,
    ubicacion: String,
    aforo: String,
})

module.exports = mongoose.model('Salas', salasSchema)