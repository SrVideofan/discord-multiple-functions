const { error } = require('../src/error')

async function curioso(){
    let curiosidades = ['Sabias que... Minecraft supero a tetris en descargas en el años 2019','Sabias que... que fortnite fue lanzado el 2017 pero se creo en 2009 con su modo de juego Salvar el Mundo','Sabias que... el programador mas joven del mundo tenia 9 años','Sabias que... El apolo 11 fue el primer cohete en llegar a la luna']
    let curiosidad  = curiosidades[Math.floor(Math.random()*curiosidades.length)]
    let mensaje = curiosidad
    return mensaje
}

module.exports = {
    curioso
}