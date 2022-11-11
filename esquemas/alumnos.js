var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var alumnosSchema = new Schema({
    curp: String,
    nombre: String,
    fecha_nac: String,
    telefonos: [String],
    instrumento: {
        id: String,
        nombre:String,
        fecha_inicio:String
    },
    materias_cursadas:[String]
})

module.exports = mongoose.model('Alumnos', alumnosSchema)