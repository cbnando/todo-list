const { User } = require('../models/index')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10);

exports.signUp = async (request, response) => {

    try {

        var { firstName, lastName, email, password } = request.body

        if (!firstName || !lastName || !email || !password) {
            return response.json({message: 'Todos os dados são necessários para criar a conta do usuário!'})
        }

        password = bcrypt.hashSync(password, salt);

        const data = {
            firstName,
            lastName,
            email,
            password
        }

        const newUser = await User.create(data)

        if (!newUser) {
            return response.json({message: 'Não foi possível criar a conta, tente outra vez!'})
        }

        return response.json(newUser)


    } catch (error) {
        return response.status(500).send({
            error: 'error',
            message: error.message
        })
    }
}


exports.signIn = async (request, response) => {

    try {

        const { email, password } = request.body

        //validar se o usuário existe na base de dados
        const account = await User.findOne({where: {email} })

        if(!account) {
            return response.status(400).json({message: 'Usuário não encontrado!'})
        }

        //validar se a senha do usuário é valida
        const passwordMatch = bcrypt.compareSync(password, account.password)

        if(!passwordMatch) {
            return response.status(400).json({message: 'Senha incorreta, tente novamente!'})
        }

        //gerar um token de autenticação

        const payload = {
            user: {
                owner: account.id,
                email: account.email,
                username: account.firstName
            }
        }

        const token = jwt.sign(
            payload,
            process.env.SECRET
        );

        return response.json({
            auth: true,
            token: token
        })

    } catch (error) {
        return response.status(500).send({
            error: 'error',
            message: error.message
        })
    }
}