const { error } = require('../src/error')
const anserws = require('../requerimientos/deberia.json')

function question(){
 
    const respuesta = anserws.respuestas[Math.floor(Math.random() * anserws.respuestas.length)]
     let respuestafinal = respuesta

     return respuestafinal
     
}

module.exports = {
    question
}