const { error } = require('../src/error')
const curiosidades = require('../requerimientos/curiosidades.json')

async function curioso(){
    let curiosidad  = curiosidades.curiosidad[Math.floor(Math.random()*curiosidades.curiosidad.length)]
    let mensaje = curiosidad
    return mensaje
}

module.exports = {
    curioso
}