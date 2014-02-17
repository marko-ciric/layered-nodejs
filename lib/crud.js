var service = require('./service');
var auth = require('./auth');

module.exports = function (app, entity) {
    app.get('/:entity/:id', auth, function (error, req, res) {
        service.get(null, req.params.entity, req.params.id, function (error, entity) {
            res.json(entity);
        });
    });
    app.post('/:entity/:id', auth, function (req, res) {
        service.save(null, req.body, req.params.entity, req.params.id, function (error, entity) {
            res.json(entity);
        });
    });
    app.put('/:entity', auth, function (req, res) {
        service.save(null, req.body, req.params.entity, null, function (error, entity) {
            res.json(entity);
        });
    });
    app.delete('/:entity/:id', auth, function (req, res) {
        service.delete(req.body.id, function (error, entity) {
            res.json(entity);
        });
    });
}