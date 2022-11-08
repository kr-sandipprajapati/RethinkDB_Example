const insertData = (r, tableName, connection, data) => {
    r.table(tableName).insert(data).run(connection, (err, result) => {
        if(err) throw err;
        console.log(JSON.stringify(result, null, 2));
    })
}

module.exports = insertData;