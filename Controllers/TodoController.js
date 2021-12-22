const connToDb = require("../Services/DbService");
const JsonResponseService = require("../Services/JsonResponseService");
const {ObjectId} = require("mongodb");
const TodoService = require('../Services/TodoService')

let TodoController = {
    getAllTodos: async (req, res) => {
        let searchObj = {}

        if (req.query.completed === 'true') {
            searchObj.completed = true
        }

        if (req.query.completed === 'false') {
            searchObj.completed = false
        }

        connToDb(async (db) => {
            let result = await TodoService.getAllTodos(db, searchObj)
            res.json(JsonResponseService(result))
        })
    },
    getCompletedTodos: async (req, res) => {

        connToDb(async (db) => {
            let result = await TodoService.getCompletedTodos(db)
            res.json(JsonResponseService(result))
        })
    },
    getUncompletedTodos: async (req, res) => {

        connToDb(async (db) => {
            let result = await TodoService.getUncompletedTodos(db)
            res.json(JsonResponseService(result))
        })
    },

    addTodo: async (req, res) => {

        const todoToAdd = {
            title: req.body.title,
            status: 'uncompleted'
        }

        connToDb(async (db) => {
            let result = await TodoService.addTodo(db, todoToAdd)
            if (result.acknowledged) {
                res.json(JsonResponseService(result))
            } else {
                res.json(JsonResponseService(result))
            }
        })
    },

    markAsCompleted: (req, res) => {

        const id = ObjectId(req.params.id)

        connToDb(async (db) => {
            let result = await TodoService.markAsCompleted(db, id)
            if (result.acknowledged) {
                res.json(JsonResponseService(result))
            } else {
                res.json(JsonResponseService(result))
            }
        })
    },

    markAsUncompleted: (req, res) => {

        const id = ObjectId(req.params.id)

        connToDb(async (db) => {
            let result = await TodoService.markAsUncompleted(db, id)
            if (result.acknowledged) {
                res.json(JsonResponseService(result))
            } else {
                res.json(JsonResponseService(result))
            }
        })
    },

    deleteTodo: (req, res) => {

        const id = ObjectId(req.params.id)

        connToDb(async (db) => {
            let result = TodoService.deleteTodo(db, id)
            if (result.acknowledged) {
                res.json(JsonResponseService(result))
            } else {
                res.json(JsonResponseService(result))
            }
        })
    }
}

module.exports = TodoController