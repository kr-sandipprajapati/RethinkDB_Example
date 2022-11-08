const { table } = require("rethinkdb")

const deleteData = (r, tableName, filterData, connection) => {
    r.table(tableName).filter(r.row(filterData).count().lt(3))
    .delete()
    .run(connection, (err, result) => {
        if(err) throw err;
        console.log(JSON.stringify(result, null , 2))
    })
}

module.exports = deleteData