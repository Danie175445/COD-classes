const classController = require("../controller/class.controller")

module.exports = (app) => {
    app.post('/api/class',classController.createClass)
    app.get('/api/class', classController.findAll)
    app.get('/api/class/:id',classController.findOne)
    app.put('/api/class/:id',classController.updateClass)
    app.delete('/api/class/:id', classController.deleteClass)
}