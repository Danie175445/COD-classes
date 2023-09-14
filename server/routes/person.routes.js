const PersonController = require('../controller/person.controller')

module.exports = (app)=>{
    app.get('/api', PersonController.index)
}