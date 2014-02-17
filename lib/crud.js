var service = require('./service');
var auth = require('');
exports.crud = function (app, entity) {
    app.get('/:entity/:id', function (req, res) {
        service.get(entity, req.body.id);
    });
    app.post('/:entity/:id', function (req, res) {
        service.save(req.body, req.body.id);
    });
    app.put('/:entity', function (req, res) {
        service.save(req.body);
    });
    app.delete('/:entity/:id', function (req, res) {
        service.delete(req.body.id);
    });
}