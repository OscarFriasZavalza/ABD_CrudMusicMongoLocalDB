var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var docentesSchema = new Schema({
    curp: String,
    nombre: String,
    instrumentos_domina: [String],
     
})

module.exports = mongoose.model('Docentes', docentesSchema)