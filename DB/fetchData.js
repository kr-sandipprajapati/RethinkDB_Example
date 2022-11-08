const fetchData = (r, tableName, connection) => {
    r.table(tableName).run(connection, (err, cursor) => {
        if (err) throw err;
        cursor.toArray((err, result) => {
            if (err) throw err;
            console.log(JSON.stringify(result, null, 2))
        })
    })
}

module.exports = fetchData;