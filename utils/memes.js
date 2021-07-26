const { error } = require('../src/error')
const memes = require('../requerimientos/memes.json')

function memeimagen(){
    let randomeme  = memes.memesimagenes[Math.floor(Math.random()*memes.memesimagenes.length)]
    let meme = randomeme
    
    return meme
}

function memevideo(){
    let randovideo  = memes.memesvideos[Math.floor(Math.random()*memes.memesvideos.length)]
    let memevideos = randovideo
    
    return memevideos
}

function momasos(){
    let randomomaso  = memes.momasos[Math.floor(Math.random()*memes.momasos.length)]
    let memaso = randomomaso
    
    return memaso
}

module.exports = {
    memevideo,
    memeimagen,
    momasos
}