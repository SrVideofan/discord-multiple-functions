class error extends Error {
    constructor(error, recomendado){
        super()
        this.name = `Ah sucedido un error: ${error ? error : 'Error Desconocido'}\n ${recomendado ? recomendado : 'No se recomienda nada'}`
    }
}
module.exports = {
    error
}