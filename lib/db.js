var pg = require('pg');
var q = require('q');
var dao = {
    url: "postgres://tt:tt@localhost:5432/tt",
    url_dev: "postgres://tt:tt@localhost:5432/tt_dev",
    connect: function (err, sql) {
        var deferred = q.defer(), client = new pg.Client(this.url);
        client.query(sql, function (err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    },
    execute: function (err, sql, cb) {
        this.connect(err, sql).then(cb).catch(function (error) {
            throw new Error(error);
        });
    },
    create: function (error, object, entity, id, cb) {
        this.execute(error, "", cb);
    },
    save: function (error, object, entity, cb) {
        this.execute(error, "", cb);
    },
    get: function (error, object, entity, cb) {
        this.execute(error, "", cb);
    }
};
module.exports = dao;