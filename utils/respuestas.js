const { error } = require('../src/error')
const { MessageEmbed } = require('discord.js')


/**
 * 
 * @param {String} pregunta la pregunta :v
 */



async function bola8(pregunta){


if(!pregunta){
    throw new error('Debe incluir una pregunta valida!')
}

let opciones = ['Tal vez', 'No lo se', 'No Deberias','Puede ser','Mejor no','Porque?', 'Porfavor!','No','Si','Puede salir bien', 'Puede salir muy mal']
let respuesta  = opciones[Math.floor(Math.random()*opciones.length)]
    const embed = new MessageEmbed()

    .setTitle('Yo te respondo a tu pregunta')
    .setDescription(`Tu pregunta: ${pregunta} \n Yo respondo: ${respuesta}`)
    .setColor('#ff0000')

    let mensaje = embed
    return embed
     
}

async function respuestas(){
    let opcioness = ['Tal vez', 'No lo se', 'No Deberias','Puede ser','Mejor no','Porque?', 'Porfavor!','No','Si','Puede salir bien', 'Puede salir muy mal']
let respuestafinal  = opcioness[Math.floor(Math.random()*opcioness.length)]

let anser = respuesta
return anser
}

module.exports = {
    bola8,
    respuestas
}