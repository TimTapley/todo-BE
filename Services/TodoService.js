const JsonResponseService = require("../Services/JsonResponseService");

const TodoService = {
    getAllTodos: async (db, searchObj)=>{
        const collection = db.collection('todos')
        const result = await collection.find(searchObj).toArray()
        return result
    },
    getCompletedTodos: async (db)=>{
        const collection = db.collection('todos')
        const result = await collection.find({status: 'completed'}).toArray()
        return result
    },
    getUncompletedTodos: async (db)=>{
        const collection = db.collection('todos')
        const result = await collection.find({status: 'uncompleted'}).toArray()
        return result
    },
    addTodo: async (db, todoToAdd) => {
        const collection = db.collection('todos')
        const result = await collection.insertOne(todoToAdd)
        return result
    },

    markAsCompleted: async (db, id) => {
        const collection = db.collection('todos')
        const result = await collection.updateOne({_id: id}, {$set: {status:'completed'}})
        return result
    },

    markAsUncompleted: async (db, id) => {
        const collection = db.collection('todos')
        const result = await collection.updateOne({_id: id}, {$set: {status:'uncompleted'}})
        return result
    },

    deleteTodo: async (db, id) => {
        const collection = db.collection('todos')
        const result = await collection.deleteOne({_id: id})
        return result
    },

}

module.exports = TodoService