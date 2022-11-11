var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var aulasSchema = new Schema({
    codigo: String,
    nombre: String,
    num_max: String
})

module.exports = mongoose.model('Aulas', aulasSchema)