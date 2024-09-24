const { Task } = require('../models/index')
const jwt = require('jsonwebtoken')

exports.createTask = async (request, response) => {

    try {
        const { taskName, description } = request.body

        if (!taskName) {
            return response.json({ message: 'Você precisa informar o nome da tarefa ou nome do usuário a quem ela pertence!' })
        }

        const data = {
            taskName: taskName,
            description: description,
            owner: request.user.owner,
            status: 'todo'
        }

        const newTask = await Task.create(data)

        if (!newTask) {
            return response.json({ message: 'Erro ao criar a task' })
        }

        return response.json(newTask)

    } catch (error){

        return response.status(500).send({
            error: 'error',
            message: error.message
        })
    }
}

exports.listAllTasks = async (request, response, next) => {

    try {

        const filter = request.query

        const owner = request.user.owner

        const tasksList = await Task.findAll({where: filter, owner })

        return response.json(tasksList)

    } catch (error) {

        return response.status(500).send({
            error: 'error',
            message: error.message
        })
    }
}

exports.taskDetails = async (request, response) => {

    const id = request.params.id;
    const owner = request.user.owner

    const taskDetailsById = await Task.findOne({ where: { id, owner } })

    if(!taskDetailsById) {
        return response.json({message: 'Task não encontrada!'})
    }

    return response.json(taskDetailsById)
}

exports.updateTaskStatus = async (request, response) => {

    const id = request.params.id

    const taskData = request.body

    const owner = request.user.owner

    const updateTaskStatusById = await Task.update(taskData, { where: { id, owner } })

    return response.json({ message: `Atualizando dados da tarefa ${id}` })
}

exports.deleteTask = async (request, response) => {

    const id = request.params.id;

    const owner = request.user.owner

    const deleteTaskById = await Task.destroy({ where: { id, owner } })

    return response.json({ message: `Excluindo tarefa ${id}` })
}