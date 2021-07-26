const { error } = require('../src/error')
const gifs = require('../requerimientos/gifs.json')


function kiss(){
 
  let randomkiss = gifs.kiss[Math.floor(Math.random() * gifs.kiss.length)]
  let gifkiss = randomkiss
  return gifkiss

}

function hug(){

    let randomhug = gifs.hug[Math.floor(Math.random() * gifs.hug.length)]
    let gifhug = randomhug
    return gifhug
}

function kisstext(){
    let randomtextkiss = gifs.kistexto[Math.floor(Math.random() * gifs.kistexto.length)]
    let textkis = randomtextkiss
    return textkis
}

function hugtext(){
    let randomhugtext = gifs.abrazotexto[Math.floor(Math.random() * gifs.abrazotexto.length)]
    let texthug = randomhugtext
    return texthug
}

module.exports = {
    kisstext,
    hug,
    kiss,
    hugtext
}