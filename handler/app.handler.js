const { Task } = require('../models/index')
const jwt = require('jsonwebtoken')

exports.createTask = async (request, response) => {

    try {
        const { taskName, description, owner } = request.body

        if (!taskName || !owner) {
            return response.json({ message: 'Você precisa informar o nome da tarefa ou nome do usuário a quem ela pertence!' })
        }

        const data = {
            taskName: taskName,
            description: description,
            owner: owner,
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

exports.listAllTasks = async (request, response) => {

    try {

        const tasksList = await Task.findAll()

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

    const taskDetailsById = await Task.findOne({ where: { id } })

    if(!taskDetailsById) {
        return response.json({message: 'Task não encontrada!'})
    }

    return response.json(taskDetailsById)
}

exports.updateTaskStatus = async (request, response) => {

    const id = request.params.id

    const taskData = request.body

    const updateTaskStatusById = await Task.update(taskData, { where: { id } })

    return response.json({ message: `Atualizando dados da tarefa ${id}` })
}

exports.deleteTask = async (request, response) => {

    const id = request.params.id;

    const deleteTaskById = await Task.destroy({ where: { id } })

    return response.json({ message: `Excluindo tarefa ${id}` })
}