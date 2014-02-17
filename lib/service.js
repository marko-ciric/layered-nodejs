var db = require('./db');

exports.save = function (error, object, entity, id, cb) {
    if (error) {
        throw error;
    }
    if (id === null) {
        db.dao.create(error, object, entity, id, cb);
    } else {
        db.dao.save(error, object, entity, cb);
    }
};
exports.get = function (error, entity, id, cb) {
    if (error) {
        throw error;
    }
    return db.dao.get(error, entity, id, cb);
};
exports.delete = function (error, entity, id, cb) {
    if (error) {
        throw error;
    }
    db.dao.delete(error, entity, id, cb);
}