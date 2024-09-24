const { request } = require('express')
const jwt = require('jsonwebtoken')

module.exports = function (request, response, next) {

    const userToken = request.header('token')

    if (!userToken) {
        return response.status(401).json({
            auth: false,
            message: 'Não existe token de autenticação!'
        })
    }

    //verificar se o token é valido
    jwt.verify(userToken, process.env.SECRET, function (error, decoded) {
        if (error) return response.status(500).json({
            auth: false,
            message: 'Token invalido!'
        })

        request.user = decoded.user
        next()
    })
}