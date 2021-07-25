class error extends Error {
    constructor(error, recomendado){
        super()
        this.name = `Discord Multiple Functions Error: ${error ? error : 'Error Desconocido'}\n ${recomendado ? recomendado : 'No se recomienda nada'}`
    }
}
module.exports = {
    error
}