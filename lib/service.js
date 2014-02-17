var db = require('./db');

exports.save = function (error, object, entity, id) {
    if (error) {
        throw error;
    }
    if (id === null) {
        db.dao.create(error, object, entity, id);
    } else {
        db.dao.save(error, object, entity);
    }
};
exports.get = function (error, entity, id) {
    if (error) {
        throw error;
    }
    return db.dao.get(error, entity, id);
};
exports.delete = function (error, entity, id) {
    if (error) {
        throw error;
    }
    return db.dao.delete(error, entity, id);
}