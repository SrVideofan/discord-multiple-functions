const { error } = require('../src/error')
const { MessageEmbed } = require('discord.js')

async function bola8(){

/**
 * 
 * @param {String} pregunta la pregunta :v
 */

if(!pregunta){
    throw new error('Debe incluir una pregunta valida!')
}

let opciones = ['Tal vez', 'No lo se', 'No Deberias','Puede ser','Mejor no','Porque?', 'Porfavor!','No','Si','Puede salir bien', 'Puede salir muy mal']
let respuesta  = respuesta[Math.floor(Math.random()*respuesta.length)]
    const embed = new MessageEmbed()

    .setTitle('Yo te respondo a tu pregunta')
    .setDescription(`Tu pregunta: ${pregunta} \n Yo respondo: ${respuesta}`)
    .setColor('#ff0000')

    let mensaje = embed
    return embed
     
}

async function respuestas(){
    let opciones = ['Tal vez', 'No lo se', 'No Deberias','Puede ser','Mejor no','Porque?', 'Porfavor!','No','Si','Puede salir bien', 'Puede salir muy mal']
let respuesta  = respuesta[Math.floor(Math.random()*respuesta.length)]

let anser = respuesta
return anser
}

module.exports = {
    bola8,
    respuestas
}